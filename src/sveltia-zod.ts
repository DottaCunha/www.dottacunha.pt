import { z } from 'astro/zod';
import type { CmsConfig, Collection, CollectionDivider, Field } from '@sveltia/cms';

// ---------- Type-level inference ----------

type ScalarWidgetType<W> =
  W extends 'string' | 'text' | 'markdown' | 'richtext' | 'image' | 'file' | 'color' | 'uuid' | 'relation' ? string :
  W extends 'number' ? number :
  W extends 'boolean' ? boolean :
  W extends 'datetime' ? Date :
  unknown;

type SelectValue<Opts extends readonly any[]> =
  Opts[number] extends infer O
    ? O extends { value: infer V } ? V
    : O extends string ? O
    : never
    : never;

type FieldValue<F> =
  F extends { widget: 'list'; fields: infer Sub extends readonly any[] } ? Shape<Sub>[] :
  F extends { widget: 'list' } ? string[] :
  F extends { widget: 'object'; fields: infer Sub extends readonly any[] } ? Shape<Sub> :
  F extends { widget: 'select'; options: infer Opts extends readonly any[]; multiple: true } ? SelectValue<Opts>[] :
  F extends { widget: 'select'; options: infer Opts extends readonly any[] } ? SelectValue<Opts> :
  F extends { widget: infer W } ? ScalarWidgetType<W> :
  unknown;

type FieldEntry<F> =
  F extends { name: infer N extends string; required?: infer R }
    ? R extends false
      ? { [K in N]?: FieldValue<F> }
      : { [K in N]: FieldValue<F> }
    : never;

type UnionToIntersection<U> =
  (U extends any ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type Prettify<T> = { [K in keyof T]: Exclude<T[K], undefined> } & {};

type Shape<Fields extends readonly any[]> = Prettify<UnionToIntersection<FieldEntry<Fields[number]>>>;

export type CollectionData<Config, Name extends string> =
  Config extends { collections: readonly (infer C)[] }
    ? C extends { name: Name; fields: infer F extends readonly any[] }
      ? Shape<F>
      : never
    : never;

type FolderCollectionNames<Config> =
  Config extends { collections: readonly (infer C)[] }
    ? C extends { name: infer N extends string; folder: string }
      ? N
      : never
    : never;

type CollectionSchemaMap<Config> = {
  [Name in FolderCollectionNames<Config>]: z.ZodType<CollectionData<Config, Name>>;
};

// ---------- Runtime mapper ----------

function fieldToZod(field: Field): z.ZodTypeAny {
  let schema: z.ZodTypeAny;

  switch (field.widget) {
    case 'string':
    case 'text':
    case 'markdown':
    case 'richtext':
    case 'color':
    case 'uuid':
    case 'relation':
    case 'file':
    case 'image':
      schema = z.string();
      break;
    case 'number':
      schema = z.number();
      break;
    case 'boolean':
      schema = z.boolean();
      break;
    case 'datetime':
      schema = z.coerce.date();
      break;
    case 'select': {
      const opts = (field as any).options as (string | { value: string })[];
      const values = opts.map(o => typeof o === 'string' ? o : o.value) as [string, ...string[]];
      const base = z.enum(values);
      schema = (field as any).multiple ? z.array(base) : base;
      break;
    }
    case 'list': {
      const sub = (field as any).fields as Field[] | undefined;
      schema = sub ? z.array(z.object(toShape(sub))) : z.array(z.string());
      break;
    }
    case 'object':
      schema = z.object(toShape((field as any).fields));
      break;
    default:
      schema = z.any();
  }

  return 'required' in field && field.required === false ? schema.optional() : schema;
}

function toShape(fields: readonly Field[]) {
  return Object.fromEntries(fields.map(f => [f.name, fieldToZod(f)]));
}

function isFolderCollection(
  c: Collection | CollectionDivider,
): c is Extract<Collection, { folder: string }> {
  return 'folder' in c && 'fields' in c;
}

export function collectionSchema(c: Collection | CollectionDivider) {
  if (!isFolderCollection(c)) {
    throw new Error(`Collection "${(c as any).name ?? '?'}" is not a folder collection`);
  }
  return z.object(toShape(c.fields));
}

export function allCollectionSchemas<C extends CmsConfig>(config: C): CollectionSchemaMap<C> {
  if (!config.collections) return {} as CollectionSchemaMap<C>;

  return Object.fromEntries(
    config.collections
      .filter(isFolderCollection)
      .map(c => [c.name, collectionSchema(c)]),
  ) as unknown as CollectionSchemaMap<C>;
}

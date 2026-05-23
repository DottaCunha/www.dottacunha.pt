import config from '../sveltia.config';
import type { CollectionData } from '../sveltia-zod';

// Single source of truth for page block types, derived from the Sveltia config.
export type PageData = CollectionData<typeof config, 'pages'>;
export type PageBlock = NonNullable<PageData['blocks']>[number];

// One block variant by its `type` discriminator, e.g. BlockOf<'hero'>.
export type BlockOf<T extends PageBlock['type']> = Extract<PageBlock, { type: T }>;

// Props for a block component: its variant minus the `type` discriminator.
export type BlockProps<T extends PageBlock['type']> = Omit<BlockOf<T>, 'type'>;

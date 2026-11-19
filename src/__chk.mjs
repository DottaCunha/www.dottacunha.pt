import fs from "node:fs";
const { default: config } = await import("./sveltia.config.ts");
const { allCollectionSchemas } = await import("./sveltia-zod.ts");
const { projects } = allCollectionSchemas(config);
for (const l of ["pt", "en"]) {
  const r = projects.safeParse(JSON.parse(fs.readFileSync(`/tmp/${l}.json`, "utf8")));
  if (!r.success) { console.log(l, "FAIL", JSON.stringify(r.error.issues.slice(0, 5))); continue; }
  const d = r.data;
  console.log(l, "ok", d.seoDescription.length, d.typologies, d.units.map((u) => u.typology).join(" / "));
}

// Lê do IFC: pisos, sistemas, tipos, camadas de material e propriedades de cada elemento.
export function readInfo(api, W, m) {
  const L = id => api.GetLine(m, id, false);
  const ids = t => { const v = api.GetLineIDsWithType(m, t, true), a = []; for (let i = 0; i < v.size(); i++) a.push(v.get(i)); return a; };
  const val = x => x == null ? null : (typeof x === 'object' && 'value' in x ? x.value : x);
  const refs = x => (Array.isArray(x) ? x : x ? [x] : []).map(r => val(r));
  const storeyOf = {}, systemOf = {}, typeOf = {}, matOf = {}, psets = {};
  const storeys = ids(W.IFCBUILDINGSTOREY).map(id => { const s = L(id); return { id, name: val(s.Name), elev: val(s.Elevation) }; }).sort((a, b) => a.elev - b.elev);
  for (const r of ids(W.IFCRELCONTAINEDINSPATIALSTRUCTURE).map(L)) { const s = val(r.RelatingStructure); for (const e of refs(r.RelatedElements)) storeyOf[e] = s; }
  for (const r of ids(W.IFCRELAGGREGATES).map(L)) { const p = val(r.RelatingObject); for (const e of refs(r.RelatedObjects)) if (!(e in storeyOf) && p in storeyOf) storeyOf[e] = storeyOf[p]; }
  // segunda passagem: partes de agregados cujos pais só ficam conhecidos depois
  for (const r of ids(W.IFCRELAGGREGATES).map(L)) { const p = val(r.RelatingObject); for (const e of refs(r.RelatedObjects)) if (!(e in storeyOf) && p in storeyOf) storeyOf[e] = storeyOf[p]; }
  for (const r of ids(W.IFCRELASSIGNSTOGROUP).map(L)) { const g = L(val(r.RelatingGroup)); for (const e of refs(r.RelatedObjects)) systemOf[e] = val(g.Name); }
  for (const r of ids(W.IFCRELDEFINESBYTYPE).map(L)) { const t = L(val(r.RelatingType)); for (const e of refs(r.RelatedObjects)) typeOf[e] = { id: t.expressID, name: val(t.Name), desc: val(t.Description) }; }
  const layersOf = id => {
    const x = L(id), T = x.type;
    if (T === W.IFCMATERIALLAYERSETUSAGE) return layersOf(val(x.ForLayerSet));
    if (T === W.IFCMATERIALLAYERSET) return refs(x.MaterialLayers).map(l => { const y = L(l); return { name: val(L(val(y.Material)).Name), t: val(y.LayerThickness) }; });
    if (T === W.IFCMATERIAL) return [{ name: val(x.Name), t: null }];
    if (T === W.IFCMATERIALPROFILESETUSAGE) return layersOf(val(x.ForProfileSet));
    if (T === W.IFCMATERIALPROFILESET) return refs(x.MaterialProfiles).map(p => { const y = L(p); return { name: val(L(val(y.Material)).Name) + (y.Profile ? ' — ' + val(L(val(y.Profile)).ProfileName) : ''), t: null }; });
    if (T === W.IFCMATERIALCONSTITUENTSET) return refs(x.MaterialConstituents).map(c => { const y = L(c); return { name: val(L(val(y.Material)).Name), t: null }; });
    if (T === W.IFCMATERIALLIST) return refs(x.Materials).map(c => ({ name: val(L(c).Name), t: null }));
    return [];
  };
  for (const r of ids(W.IFCRELASSOCIATESMATERIAL).map(L)) { let ls; try { ls = layersOf(val(r.RelatingMaterial)); } catch { ls = []; } for (const e of refs(r.RelatedObjects)) matOf[e] = ls; }
  for (const r of ids(W.IFCRELDEFINESBYPROPERTIES).map(L)) {
    const ps = L(val(r.RelatingPropertyDefinition)); if (!ps.HasProperties) continue;
    const props = refs(ps.HasProperties).map(L).map(p => [val(p.Name), val(p.NominalValue)]).filter(p => p[1] != null);
    for (const e of refs(r.RelatedObjects)) (psets[e] ||= []).push({ name: val(ps.Name), props });
  }
  const sname = Object.fromEntries(storeys.map(s => [s.id, s.name]));
  const elem = id => { const x = L(id); return { id, name: val(x.Name) || '', cls: api.GetNameFromTypeCode(x.type), desc: val(x.Description), tag: val(x.Tag),
    storey: sname[storeyOf[id]] || '', system: systemOf[id] || '', type: typeOf[id] || null,
    layers: matOf[id] || (typeOf[id] && matOf[typeOf[id].id]) || [], psets: psets[id] || [] }; };
  return { storeys, elem };
}

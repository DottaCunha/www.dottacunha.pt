import { getCollection } from 'astro:content';
import type { Lang } from '../i18n/translations';

export async function getProjectsByLang(lang: Lang) {
  const allProjects = await getCollection('projects');

  // Filter by language folder (id starts with "pt/" or "en/")
  const filtered = allProjects
    .filter((p) => p.id.startsWith(`${lang}/`) && p.data.visible !== false)
    .sort((a, b) => (a.data.order ?? 0) - (b.data.order ?? 0));
  return filtered;
}

export async function getFeaturedProjectsByLang(lang: Lang) {
  const projects = await getProjectsByLang(lang);
  return projects.filter((p) => p.data.featured);
}

export function getProjectSlug(id: string) {
  // id is like "pt/residencias-da-estrela" — extract slug part
  return id.split('/').slice(1).join('/').replace(/\.md$/, '');
}

export function getStatusLabel(status: string, t: (key: string, lang: Lang) => string, lang: Lang) {
  const map: Record<string, string> = {
    completed: t('status.completed', lang),
    under_construction: t('status.underConstruction', lang),
    coming_soon: t('status.comingSoon', lang),
  };
  return map[status] ?? status;
}


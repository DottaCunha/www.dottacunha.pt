import { translations, defaultLang, supportedLangs, type Lang } from './translations';

/** Get translation for a key in the given language */
export function t(key: string, lang: Lang): string {
  return translations[lang]?.[key] ?? translations[defaultLang]?.[key] ?? key;
}

/** Extract language from URL path */
export function getLangFromUrl(url: URL): Lang {
  const [, langSegment] = url.pathname.split('/');
  if (supportedLangs.includes(langSegment as Lang)) {
    return langSegment as Lang;
  }
  return defaultLang;
}

/** Build a localized path */
export function localizedPath(path: string, lang: Lang): string {
  // Ensure path starts with /
  const cleanPath = path.startsWith('/') ? path : `/${path}`;
  return `/${lang}${cleanPath === '/' ? '' : cleanPath}`;
}

/** Get the alternate language */
export function getAlternateLang(lang: Lang): Lang {
  return lang === 'pt' ? 'en' : 'pt';
}

/** Get all static paths for a page (used in getStaticPaths) */
export function getI18nPaths() {
  return supportedLangs.map(lang => ({ params: { lang } }));
}

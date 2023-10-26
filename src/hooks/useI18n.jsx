export const useI18n = (lang, file) => {
  return { i18n: lang ? file[lang] : file["es"] };
};

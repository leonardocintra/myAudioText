import "server-only";

const dictionaries = {
  "pt-BR": () =>
    import("../locales/pt-BR.json").then((module) => module.default),
  en: () => import("../locales/en.json").then((module) => module.default),
};

export const getDictionary = async (locale: string) => {
  if (locale in dictionaries) {
    return dictionaries[locale as keyof typeof dictionaries]();
  }
  return dictionaries["pt-BR"]();
};

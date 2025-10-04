"use client";

import { createContext, useContext } from "react";

type Dictionary = any; // Ou defina o tipo completo das suas traduções

const DictionaryContext = createContext<Dictionary | null>(null);

export function DictionaryProvider({
  dictionary,
  children,
}: {
  dictionary: Dictionary;
  children: React.ReactNode;
}) {
  return (
    <DictionaryContext.Provider value={dictionary}>
      {children}
    </DictionaryContext.Provider>
  );
}

export function useDictionary() {
  const dictionary = useContext(DictionaryContext);
  if (!dictionary) {
    throw new Error(
      "useDictionary deve ser usado dentro de DictionaryProvider"
    );
  }
  return dictionary;
}

import type { Metadata } from "next";
import "../globals.css";
import { getDictionary } from "@/lib/dictionaries";
import { Locale } from "@/i18n.config";
import { DictionaryProvider } from "@/lib/dictionary-provider";

export const metadata: Metadata = {
  title: "My Audio Text",
  description: "Transcrição de áudios do WhatsApp em texto instantaneamente",
};

export default async function LangLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>; // 👈 deixar string aqui
}) {
  const { lang } = await params;

  // 👇 fazer cast manual depois de obter
  const locale = lang as Locale;
  const dictionary = await getDictionary(locale);

  return (
    <html lang={locale}>
      <body>
        <DictionaryProvider dictionary={dictionary}>
          {children}
        </DictionaryProvider>
      </body>
    </html>
  );
}

import {notFound} from 'next/navigation';
import {NextIntlClientProvider, useMessages} from 'next-intl';
 
type Props = {
  children: React.ReactNode;
  params: {locale: string};
};

// This is a temporary workaround for a bug in Next.js
// where the `params` object is not available in the root layout.
// We are defining a generateStaticParams function to get the locales.
export function generateStaticParams() {
  return [{locale: 'en'}, {locale: 'pt-BR'}];
}
 
export default function LocaleLayout({children, params: {locale}}: Props) {
  const messages = useMessages();
 
  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      {children}
    </NextIntlClientProvider>
  );
}
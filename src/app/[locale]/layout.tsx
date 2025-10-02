import {notFound} from 'next/navigation';
import {NextIntlClientProvider, useMessages} from 'next-intl';
 
type Props = {
  children: React.ReactNode;
  params: {locale: string};
};

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

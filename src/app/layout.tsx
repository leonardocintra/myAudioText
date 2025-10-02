import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';
import { NextIntlClientProvider, useMessages } from 'next-intl';

// This is a temporary workaround for a bug in Next.js
// where the `params` object is not available in the root layout.
// We are defining a generateStaticParams function to get the locales.
export function generateStaticParams() {
  return [{ locale: 'en' }, { locale: 'pt-BR' }];
}

export const metadata: Metadata = {
  title: 'AudioTranscriber | Convert Audios to Text Instantly',
  description: 'Save time, improve accessibility, and boost productivity with instant audio-to-text conversion for WhatsApp, Instagram, and Telegram.',
};

export default function RootLayout({
  children,
  params: { locale },
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {
  const messages = useMessages();
  return (
    <html lang={locale} className="!scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased">
        <NextIntlClientProvider locale={locale} messages={messages}>
          {children}
          <Toaster />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}

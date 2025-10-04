# My Audio Text

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

Usar lang em qualquer component

```
'use client';
import { useDictionary } from '@/lib/dictionary-provider';

export function MeuComponente() {
  const dict = useDictionary();
  
  return <h1>{dict.meuTexto}</h1>;
}

// ✅ Funciona igual ao useTranslation() do react-i18next
// ✅ Não precisa passar props
// ✅ Performance otimizada do Next.js 15
```

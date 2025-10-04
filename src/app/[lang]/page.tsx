import { Locale } from "@/i18n.config";
import { getDictionary } from "@/lib/dictionaries";

export default async function Home(props: {
  params: Promise<{ lang: Locale }>;
}) {
  const { lang } = await props.params;
  const dict = await getDictionary(lang);

  return (
    <div>
      <h1>{dict.hero.title}</h1>
      <p>{dict.hero.subtitle}</p>
    </div>
  );
}

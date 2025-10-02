import { Button } from "@/components/ui/button";
import { useTranslations } from "next-intl";
import Link from "next/link";

export default function Cta() {
  const t = useTranslations("Cta");
  return (
    <section id="cta" className="bg-secondary">
      <div className="container flex flex-col items-center gap-6 py-24 text-center">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
          {t("title")}
        </h2>
        <p className="max-w-2xl text-lg text-muted-foreground">
          {t("subtitle")}
        </p>
        <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
          <Link href="#pricing">{t("cta")}</Link>
        </Button>
      </div>
    </section>
  );
}

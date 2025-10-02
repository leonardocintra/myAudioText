import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Check } from "lucide-react";
import { useTranslations } from "next-intl";
import Link from "next/link";

export default function Pricing() {
  const t = useTranslations("Pricing");
  return (
    <section id="pricing" className="container">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">{t("title")}</h2>
        <p className="mt-4 text-lg text-muted-foreground">
          {t("subtitle")}
        </p>
      </div>
      <div className="mt-12 flex justify-center">
        <Card className="w-full max-w-md border-2 border-primary shadow-lg">
          <CardHeader className="text-center">
            <CardTitle className="text-4xl">
              {t("price")}<span className="text-xl font-normal text-muted-foreground">{t("period")}</span>
            </CardTitle>
            <CardDescription>{t("description")}</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-center font-semibold">{t("trial")}</p>
            <ul className="space-y-2 text-muted-foreground">
              <li className="flex items-start gap-2">
                <Check className="h-5 w-5 flex-shrink-0 text-accent" />
                <span>{t("feature1")}</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="h-5 w-5 flex-shrink-0 text-accent" />
                <span>{t("feature2")}</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="h-5 w-5 flex-shrink-0 text-accent" />
                <span>{t("feature3")}</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="h-5 w-5 flex-shrink-0 text-accent" />
                <span>{t("feature4")}</span>
              </li>
            </ul>
          </CardContent>
          <CardFooter>
            <Button asChild size="lg" className="w-full bg-accent text-accent-foreground hover:bg-accent/90">
              <Link href="#">{t("cta")}</Link>
            </Button>
          </CardFooter>
        </Card>
      </div>
    </section>
  );
}

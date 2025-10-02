import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { BotMessageSquare, Clock, FileText, Gauge, Settings, Accessibility } from "lucide-react";
import { useTranslations } from "next-intl";

export default function Features() {
  const t = useTranslations("Features");

  const features = [
    {
      icon: <BotMessageSquare className="h-8 w-8 text-primary" />,
      title: t("feature1_title"),
      description: t("feature1_desc"),
    },
    {
      icon: <Gauge className="h-8 w-8 text-primary" />,
      title: t("feature2_title"),
      description: t("feature2_desc"),
    },
    {
      icon: <FileText className="h-8 w-8 text-primary" />,
      title: t("feature3_title"),
      description: t("feature3_desc"),
    },
    {
      icon: <Accessibility className="h-8 w-8 text-primary" />,
      title: t("feature4_title"),
      description: t("feature4_desc"),
    },
    {
      icon: <Settings className="h-8 w-8 text-primary" />,
      title: t("feature5_title"),
      description: t("feature5_desc"),
    },
    {
      icon: <Clock className="h-8 w-8 text-primary" />,
      title: t("feature6_title"),
      description: t("feature6_desc"),
    },
  ];

  return (
    <section id="features" className="container">
      <div className="mx-auto max-w-4xl text-center">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">{t("title")}</h2>
        <p className="mt-4 text-lg text-muted-foreground">
          {t("subtitle")}
        </p>
      </div>
      <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {features.map((feature) => (
          <Card key={feature.title} className="flex flex-col items-center p-6 text-center">
            <CardHeader>
              {feature.icon}
              <CardTitle className="mt-4">{feature.title}</CardTitle>
            </CardHeader>
            <CardDescription>{feature.description}</CardDescription>
          </Card>
        ))}
      </div>
    </section>
  );
}

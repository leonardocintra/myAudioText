import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { useTranslations } from "next-intl";

export default function HowItWorks() {
  const t = useTranslations("HowItWorks");

  const steps = [
    {
      title: t("step1_title"),
      description: t("step1_desc"),
      image: PlaceHolderImages.find((img) => img.id === "how-it-works-1"),
    },
    {
      title: t("step2_title"),
      description: t("step2_desc"),
      image: PlaceHolderImages.find((img) => img.id === "how-it-works-2"),
    },
    {
      title: t("step3_title"),
      description: t("step3_desc"),
      image: PlaceHolderImages.find((img) => img.id === "how-it-works-3"),
    },
  ];

  return (
    <section id="how-it-works" className="container">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">{t("title")}</h2>
        <p className="mt-4 text-lg text-muted-foreground">
          {t("subtitle")}
        </p>
      </div>
      <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
        {steps.map((step) => (
          <Card key={step.title} className="text-center">
            <CardHeader>
              <CardTitle>{step.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="relative mx-auto mb-4 h-60 w-40 overflow-hidden rounded-lg border">
                {step.image && (
                  <Image
                    src={step.image.imageUrl}
                    alt={step.image.description}
                    fill
                    className="object-cover"
                    data-ai-hint={step.image.imageHint}
                  />
                )}
              </div>
              <p className="text-muted-foreground">{step.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}

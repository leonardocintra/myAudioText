import { Button } from "@/components/ui/button";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Ear } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "next-intl";

export default function Accessibility() {
  const t = useTranslations("Accessibility");
  const accessibilityImage = PlaceHolderImages.find(
    (img) => img.id === "accessibility-image"
  );

  return (
    <section id="accessibility" className="bg-secondary">
      <div className="container grid items-center gap-12 md:grid-cols-2">
        <div className="flex flex-col gap-4">
          <div className="inline-flex items-center rounded-lg bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
            <Ear className="-ml-1 mr-2 h-4 w-4" />
            {t("tag")}
          </div>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            {t("title")}
          </h2>
          <p className="text-lg text-muted-foreground">
            {t("p1")}
          </p>
          <p className="text-lg text-muted-foreground">
            {t("p2")}
          </p>
          <Button asChild size="lg" className="mt-4 w-fit bg-accent text-accent-foreground hover:bg-accent/90">
            <Link href="#pricing">{t("cta")}</Link>
          </Button>
        </div>
        <div className="relative aspect-4/3 overflow-hidden rounded-xl shadow-lg">
          {accessibilityImage && (
            <Image
              src={accessibilityImage.imageUrl}
              alt={accessibilityImage.description}
              fill
              className="object-cover"
              data-ai-hint={accessibilityImage.imageHint}
            />
          )}
        </div>
      </div>
    </section>
  );
}

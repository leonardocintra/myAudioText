import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { PlaceHolderImages } from "@/lib/placeholder-images";

export default function Hero() {
  const heroImage = PlaceHolderImages.find((img) => img.id === "hero-image");

  return (
    <section id="hero" className="container">
      <div className="mx-auto flex max-w-4xl flex-col items-center gap-4 text-center">
        <h1 className="text-4xl font-extrabold tracking-tight lg:text-6xl">
          Convert Your WhatsApp Audios to Text Instantly
        </h1>
        <p className="max-w-2xl text-lg text-muted-foreground">
          Save time, improve accessibility, and boost productivity with instant audio-to-text conversion.
        </p>
        <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
          <Link href="#pricing">Start Free Trial</Link>
        </Button>
      </div>
      <div className="mx-auto mt-12 max-w-5xl">
        <div className="relative aspect-video overflow-hidden rounded-xl border bg-card shadow-lg">
          {heroImage && (
            <Image
              src={heroImage.imageUrl}
              alt={heroImage.description}
              fill
              className="object-cover"
              data-ai-hint={heroImage.imageHint}
              priority
            />
          )}
        </div>
      </div>
    </section>
  );
}

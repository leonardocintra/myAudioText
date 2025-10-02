import { Button } from "@/components/ui/button";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Ear } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Accessibility() {
  const accessibilityImage = PlaceHolderImages.find(
    (img) => img.id === "accessibility-image"
  );

  return (
    <section id="accessibility" className="bg-secondary">
      <div className="container grid items-center gap-12 md:grid-cols-2">
        <div className="flex flex-col gap-4">
          <div className="inline-flex items-center rounded-lg bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
            <Ear className="-ml-1 mr-2 h-4 w-4" />
            Accessibility First
          </div>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Making Communication Inclusive
          </h2>
          <p className="text-lg text-muted-foreground">
            For professionals who are deaf or hard of hearing, voice messages can be a major barrier. AudioTranscriber breaks down this barrier by providing instant, accurate text versions of all audio messages.
          </p>
          <p className="text-lg text-muted-foreground">
            Our tool ensures that everyone can participate in conversations fully, without missing out on critical information. It's not just a convenience—it's a necessary tool for inclusive communication.
          </p>
          <Button asChild size="lg" className="mt-4 w-fit bg-accent text-accent-foreground hover:bg-accent/90">
            <Link href="#pricing">Learn More & Get Started</Link>
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

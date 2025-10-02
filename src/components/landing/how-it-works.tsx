import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";

export default function HowItWorks() {

  const steps = [
    {
      title: "1. Register Your Number",
      description: "Enter your WhatsApp number with DDD to link your account.",
      image: PlaceHolderImages.find((img) => img.id === "how-it-works-1"),
    },
    {
      title: "2. Start Your Free Trial",
      description: "Activate your 15-day free trial. No credit card required.",
      image: PlaceHolderImages.find((img) => img.id === "how-it-works-2"),
    },
    {
      title: "3. Get Instant Transcriptions",
      description: "Forward any voice message and receive the text transcription instantly.",
      image: PlaceHolderImages.find((img) => img.id === "how-it-works-3"),
    },
  ];

  return (
    <section id="how-it-works" className="container">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Get Started in 3 Simple Steps</h2>
        <p className="mt-4 text-lg text-muted-foreground">
          Transform your voice messages into text with a setup that takes less than a minute.
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

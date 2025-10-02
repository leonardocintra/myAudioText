import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";

export default function HowItWorks() {

  const steps = [
    {
      title: "1. Cadastre Seu Número",
      description: "Insira seu número de WhatsApp com DDD para vincular sua conta.",
      image: PlaceHolderImages.find((img) => img.id === "how-it-works-1"),
    },
    {
      title: "2. Comece Seu Teste Grátis",
      description: "Ative seu teste gratuito de 15 dias. Não é necessário cartão de crédito.",
      image: PlaceHolderImages.find((img) => img.id === "how-it-works-2"),
    },
    {
      title: "3. Receba Transcrições Instantâneas",
      description: "Encaminhe qualquer mensagem de voz e receba a transcrição em texto instantaneamente.",
      image: PlaceHolderImages.find((img) => img.id === "how-it-works-3"),
    },
  ];

  return (
    <section id="how-it-works" className="container">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Comece em 3 Passos Simples</h2>
        <p className="mt-4 text-lg text-muted-foreground">
          Transforme suas mensagens de voz em texto com uma configuração que leva menos de um minuto.
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

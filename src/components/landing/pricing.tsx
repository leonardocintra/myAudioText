import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Check } from "lucide-react";
import Link from "next/link";

export default function Pricing() {
  return (
    <section id="pricing" className="container">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Simples e Acessível</h2>
        <p className="mt-4 text-lg text-muted-foreground">
          Comece de graça e depois escolha o plano que funciona para você. Sem taxas ocultas, cancele a qualquer momento.
        </p>
      </div>
      <div className="mt-12 flex justify-center">
        <Card className="w-full max-w-md border-2 border-primary shadow-lg">
          <CardHeader className="text-center">
            <CardTitle className="text-4xl">
              R$4,90<span className="text-xl font-normal text-muted-foreground">/mês</span>
            </CardTitle>
            <CardDescription>Cobrado mensalmente após o seu teste gratuito.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-center font-semibold">Inclui um teste grátis de 15 dias!</p>
            <ul className="space-y-2 text-muted-foreground">
              <li className="flex items-start gap-2">
                <Check className="h-5 w-5 flex-shrink-0 text-accent" />
                <span>Transcrições ilimitadas</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="h-5 w-5 flex-shrink-0 text-accent" />
                <span>Suporte para WhatsApp, Instagram e Telegram</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="h-5 w-5 flex-shrink-0 text-accent" />
                <span>Resumos de áudios longos (com IA)</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="h-5 w-5 flex-shrink-0 text-accent" />
                <span>Suporte prioritário ao cliente</span>
              </li>
            </ul>
          </CardContent>
          <CardFooter>
            <Button asChild size="lg" className="w-full bg-accent text-accent-foreground hover:bg-accent/90">
              <Link href="#">Assine Agora</Link>
            </Button>
          </CardFooter>
        </Card>
      </div>
    </section>
  );
}

import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Cta() {
  return (
    <section id="cta" className="bg-secondary">
      <div className="container flex flex-col items-center gap-6 py-24 text-center">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
          Pronto para se livrar da reprodução de áudio?
        </h2>
        <p className="max-w-2xl text-lg text-muted-foreground">
          Junte-se a milhares de usuários produtivos e comece a converter suas mensagens de voz em texto hoje mesmo.
        </p>
        <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
          <Link href="#pricing">Comece seu Teste Grátis de 15 Dias</Link>
        </Button>
      </div>
    </section>
  );
}

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { MessageSquareText, Twitter, Instagram, Linkedin } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t">
      <div className="container py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div className="flex flex-col gap-4">
            <Link href="/" className="flex items-center gap-2 font-bold">
              <MessageSquareText className="h-6 w-6 text-primary" />
              <span className="text-lg">My Audio Text</span>
            </Link>
            <p className="text-muted-foreground">
              Conversão instantânea de áudio para texto para a comunicação moderna.
            </p>
            <div className="flex gap-4">
              <Link href="#" aria-label="Twitter">
                <Twitter className="h-6 w-6 text-muted-foreground hover:text-primary" />
              </Link>
              <Link href="#" aria-label="Instagram">
                <Instagram className="h-6 w-6 text-muted-foreground hover:text-primary" />
              </Link>
              <Link href="#" aria-label="LinkedIn">
                <Linkedin className="h-6 w-6 text-muted-foreground hover:text-primary" />
              </Link>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-8 md:col-span-2 md:grid-cols-3">
            <div>
              <h3 className="font-semibold">Produto</h3>
              <ul className="mt-4 space-y-2">
                <li><Link href="#features" className="text-muted-foreground hover:text-primary">Funcionalidades</Link></li>
                <li><Link href="#pricing" className="text-muted-foreground hover:text-primary">Preços</Link></li>
                <li><Link href="#how-it-works" className="text-muted-foreground hover:text-primary">Como Funciona</Link></li>
                <li><Link href="#faq" className="text-muted-foreground hover:text-primary">FAQ</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold">Empresa</h3>
              <ul className="mt-4 space-y-2">
                <li><Link href="#" className="text-muted-foreground hover:text-primary">Sobre Nós</Link></li>
                <li><Link href="#" className="text-muted-foreground hover:text-primary">Contato</Link></li>
                <li><Link href="#" className="text-muted-foreground hover:text-primary">Política de Privacidade</Link></li>
                <li><Link href="#" className="text-muted-foreground hover:text-primary">Termos de Serviço</Link></li>
              </ul>
            </div>
            <div className="col-span-2 md:col-span-1">
              <h3 className="font-semibold">Mantenha-se Atualizado</h3>
              <p className="mt-2 text-sm text-muted-foreground">Receba atualizações sobre novos recursos e promoções.</p>
              <form className="mt-4 flex gap-2">
                <Input type="email" placeholder="Digite seu e-mail" className="flex-1" aria-label="Email for newsletter"/>
                <Button type="submit" className="bg-primary hover:bg-primary/90">Inscrever-se</Button>
              </form>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t pt-8 text-center text-sm text-muted-foreground">
          <p>© {year} My Audio Text. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}

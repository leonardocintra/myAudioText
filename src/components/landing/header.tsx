import { Button } from "@/components/ui/button";
import { MessageSquareText } from "lucide-react";
import Link from "next/link";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-2 font-bold">
          <MessageSquareText className="h-6 w-6 text-primary" />
          <span className="hidden sm:inline-block">My Audio Text</span>
        </Link>
        <div className="flex items-center gap-2">
          <Button asChild variant="ghost" className="hidden sm:inline-flex">
            <Link href="#pricing">Preços</Link>
          </Button>
          <Button asChild className="bg-accent text-accent-foreground hover:bg-accent/90">
            <Link href="/cadastro">Começar Teste Grátis</Link>
          </Button>
        </div>
      </div>
    </header>
  );
}

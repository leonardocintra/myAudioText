import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Cta() {
  return (
    <section id="cta" className="bg-secondary">
      <div className="container flex flex-col items-center gap-6 py-24 text-center">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
          Ready to Ditch the Audio Playback?
        </h2>
        <p className="max-w-2xl text-lg text-muted-foreground">
          Join thousands of productive users and start converting your voice messages to text today.
        </p>
        <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
          <Link href="#pricing">Start Your 15-Day Free Trial</Link>
        </Button>
      </div>
    </section>
  );
}

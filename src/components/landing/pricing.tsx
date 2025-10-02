import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Check } from "lucide-react";
import Link from "next/link";

export default function Pricing() {
  return (
    <section id="pricing" className="container">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Simple and Affordable</h2>
        <p className="mt-4 text-lg text-muted-foreground">
          Start for free, then choose a plan that works for you. No hidden fees, cancel anytime.
        </p>
      </div>
      <div className="mt-12 flex justify-center">
        <Card className="w-full max-w-md border-2 border-primary shadow-lg">
          <CardHeader className="text-center">
            <CardTitle className="text-4xl">
              $4.90<span className="text-xl font-normal text-muted-foreground">/month</span>
            </CardTitle>
            <CardDescription>Billed monthly after your free trial.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-center font-semibold">Includes a 15-day free trial!</p>
            <ul className="space-y-2 text-muted-foreground">
              <li className="flex items-start gap-2">
                <Check className="h-5 w-5 flex-shrink-0 text-accent" />
                <span>Unlimited transcriptions</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="h-5 w-5 flex-shrink-0 text-accent" />
                <span>WhatsApp, Instagram & Telegram support</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="h-5 w-5 flex-shrink-0 text-accent" />
                <span>Long audio summaries (AI-powered)</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="h-5 w-5 flex-shrink-0 text-accent" />
                <span>Priority customer support</span>
              </li>
            </ul>
          </CardContent>
          <CardFooter>
            <Button asChild size="lg" className="w-full bg-accent text-accent-foreground hover:bg-accent/90">
              <Link href="#">Subscribe Now</Link>
            </Button>
          </CardFooter>
        </Card>
      </div>
    </section>
  );
}

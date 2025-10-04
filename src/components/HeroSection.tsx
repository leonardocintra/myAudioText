// components/HeroSection.tsx
"use client";

import { Button } from "@/components/ui/button";
import { MessageSquare } from "lucide-react";
import { useDictionary } from "@/lib/dictionary-provider";
import Image from "next/image";
import { LanguageSwitcherDropdown } from "./LanguageSwitcher";

export const HeroSection = () => {
  const dict = useDictionary();

  return (
    <section className="relative min-h-screen flex items-center bg-gradient-hero overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-primary/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

      <div className="container mx-auto px-4 py-20 relative z-10">
        {/* Language Switcher */}
        <div className="absolute top-8 right-8">
          <LanguageSwitcherDropdown />
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-8 animate-fade-in">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-light rounded-full">
              <MessageSquare className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium text-primary-dark">
                My Audio Text
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-foreground">
              {dict.hero.title}
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground max-w-xl">
              {dict.hero.subtitle}
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="lg" className="group">
                {dict.hero.cta}
                <MessageSquare className="ml-2 h-5 w-5 group-hover:scale-110 transition-transform" />
              </Button>
            </div>

            <p className="text-sm text-muted-foreground">
              ✓ {dict.hero.noCreditCard}
            </p>
          </div>

          {/* Hero Image */}
          <div className="relative animate-scale-in">
            <div className="absolute inset-0 bg-gradient-primary rounded-3xl blur-2xl opacity-30" />
            <Image
              src={"/assets/hero-image.jpg"}
              alt="WhatsApp Audio Transcription"
              width={600}
              height={400}
              className="relative rounded-3xl shadow-elevated w-full"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
};

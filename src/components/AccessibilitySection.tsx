"use client";

import { useDictionary } from "@/lib/dictionary-provider";
import { Heart, Users } from "lucide-react";
import { Button } from "./ui/button";

export const AccessibilitySection = () => {
  const dict = useDictionary();

  return (
    <section className="py-24 bg-background" id="accessibility">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="relative p-12 md:p-16 rounded-3xl bg-gradient-accent border border-primary/20 shadow-soft animate-fade-in">
            <div className="flex justify-center mb-8">
              <div className="w-20 h-20 rounded-2xl bg-gradient-primary flex items-center justify-center shadow-elevated">
                <Heart className="h-10 w-10 text-white" />
              </div>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">
              {dict.accessibility.title}
            </h2>
            <p className="text-lg text-foreground/80 text-center mb-8 leading-relaxed max-w-2xl mx-auto">
              {dict.accessibility.description}
            </p>
            <div className="flex justify-center gap-4">
              <Button variant="hero" size="lg" className="group">
                <Users className="mr-2 h-5 w-5" />
                {dict.accessibility.cta}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

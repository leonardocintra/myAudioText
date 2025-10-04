import { AccessibilitySection } from "@/components/AccessibilitySection";
import { HeroSection } from "@/components/HeroSection";
import { Locale } from "@/i18n.config";

export default async function Home(props: {
  params: Promise<{ lang: Locale }>;
}) {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <AccessibilitySection />
    </div>
  );
}

import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { BotMessageSquare, Clock, FileText, Gauge, Settings, Accessibility } from "lucide-react";

export default function Features() {

  const features = [
    {
      icon: <BotMessageSquare className="h-8 w-8 text-primary" />,
      title: "Instant Transcription",
      description: "Get transcriptions directly inside WhatsApp, Instagram Direct, and Telegram.",
    },
    {
      icon: <Gauge className="h-8 w-8 text-primary" />,
      title: "Fast & Accurate",
      description: "Our AI is faster and more accurate than native transcription services.",
    },
    {
      icon: <FileText className="h-8 w-8 text-primary" />,
      title: "Summaries for Long Audios",
      description: "Receive concise summaries for long audio messages, saving you even more time.",
    },
    {
      icon: <Accessibility className="h-8 w-8 text-primary" />,
      title: "Enhanced Accessibility",
      description: "A vital tool for deaf or hard of hearing users to access voice messages.",
    },
    {
      icon: <Settings className="h-8 w-8 text-primary" />,
      title: "Easy Setup",
      description: "No complex installations. Get started in minutes with just your phone number.",
    },
    {
      icon: <Clock className="h-8 w-8 text-primary" />,
      title: "Save Time",
      description: "Read messages at your own pace and quickly search through transcribed content.",
    },
  ];

  return (
    <section id="features" className="container">
      <div className="mx-auto max-w-4xl text-center">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Everything you need, nothing you don't.</h2>
        <p className="mt-4 text-lg text-muted-foreground">
          Focus on what matters. Our tool seamlessly integrates into your workflow to make communication easier and more efficient.
        </p>
      </div>
      <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {features.map((feature) => (
          <Card key={feature.title} className="flex flex-col items-center p-6 text-center">
            <CardHeader>
              {feature.icon}
              <CardTitle className="mt-4">{feature.title}</CardTitle>
            </CardHeader>
            <CardDescription>{feature.description}</CardDescription>
          </Card>
        ))}
      </div>
    </section>
  );
}

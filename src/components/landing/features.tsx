import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { BotMessageSquare, Clock, FileText, Gauge, Settings, Accessibility } from "lucide-react";

export default function Features() {

  const features = [
    {
      icon: <BotMessageSquare className="h-8 w-8 text-primary" />,
      title: "Transcrição Instantânea",
      description: "Receba transcrições diretamente no WhatsApp, Instagram Direct e Telegram.",
    },
    {
      icon: <Gauge className="h-8 w-8 text-primary" />,
      title: "Rápido e Preciso",
      description: "Nossa IA é mais rápida e precisa do que os serviços de transcrição nativos.",
    },
    {
      icon: <FileText className="h-8 w-8 text-primary" />,
      title: "Resumos para Áudios Longos",
      description: "Receba resumos concisos para mensagens de áudio longas, economizando ainda mais tempo.",
    },
    {
      icon: <Accessibility className="h-8 w-8 text-primary" />,
      title: "Acessibilidade Aprimorada",
      description: "Uma ferramenta vital para usuários surdos ou com deficiência auditiva acessarem mensagens de voz.",
    },
    {
      icon: <Settings className="h-8 w-8 text-primary" />,
      title: "Configuração Fácil",
      description: "Sem instalações complexas. Comece em minutos apenas com seu número de telefone.",
    },
    {
      icon: <Clock className="h-8 w-8 text-primary" />,
      title: "Economize Tempo",
      description: "Leia as mensagens no seu próprio ritmo e pesquise rapidamente pelo conteúdo transcrito.",
    },
];

  return (
    <section id="features" className="container">
      <div className="mx-auto max-w-4xl text-center">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Tudo o que você precisa, sem o que não precisa.</h2>
        <p className="mt-4 text-lg text-muted-foreground">
          Concentre-se no que importa. Nossa ferramenta se integra perfeitamente ao seu fluxo de trabalho para tornar a comunicação mais fácil e eficiente.
        </p>
      </div>
      <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {features.map((feature) => (
          <Card key={feature.title} className="flex flex-col items-center p-6 text-center">
            <CardHeader className="items-center">
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

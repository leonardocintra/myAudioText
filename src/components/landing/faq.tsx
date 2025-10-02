import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function Faq() {
  const faqs = [
    {
      question: "Qual é a precisão da transcrição?",
      answer: "Nossa transcrição por IA é altamente precisa, geralmente ultrapassando 95% de precisão para áudios claros. Ela é projetada para lidar com vários sotaques e níveis de ruído de fundo, fornecendo versões em texto confiáveis de suas mensagens de voz.",
    },
    {
      question: "Funciona para mensagens de áudio longas?",
      answer: "Sim! O My Audio Text é otimizado para áudios longos. Além da transcrição completa, ele fornece um resumo conciso dos pontos principais, para que você possa entender o essencial de uma mensagem longa em segundos.",
    },
    {
      question: "Quais plataformas são suportadas?",
      answer: "Atualmente, suportamos WhatsApp, Instagram Direct e Telegram. Estamos sempre trabalhando para expandir nossos serviços para outras plataformas.",
    },
    {
      question: "Posso cancelar a qualquer momento?",
      answer: "Com certeza. Você pode cancelar sua assinatura a qualquer momento diretamente do seu painel de conta, sem perguntas. Você manterá o acesso até o final do seu período de faturamento atual.",
    },
    {
      question: "Existe um limite para o número de transcrições?",
      answer: "Nosso plano mensal inclui transcrições ilimitadas. Você pode converter quantas mensagens de voz precisar, sem se preocupar em atingir um limite."
    }
  ];
  return (
    <section id="faq" className="container">
        <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Perguntas Frequentes</h2>
            <p className="mt-4 text-lg text-muted-foreground">
                Encontre respostas para perguntas comuns sobre o My Audio Text.
            </p>
        </div>
        <div className="mx-auto mt-12 max-w-3xl">
            <Accordion type="single" collapsible className="w-full">
                {faqs.map((faq, index) => (
                    <AccordionItem value={`item-${index}`} key={index}>
                        <AccordionTrigger className="text-lg text-left">{faq.question}</AccordionTrigger>
                        <AccordionContent className="text-base text-muted-foreground">
                            {faq.answer}
                        </AccordionContent>
                    </AccordionItem>
                ))}
            </Accordion>
        </div>
    </section>
  );
}

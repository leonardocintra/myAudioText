import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How accurate is the transcription?",
    answer: "Our AI-powered transcription is highly accurate, often exceeding 95% accuracy for clear audio. It's designed to handle various accents and background noise levels, providing reliable text versions of your voice messages.",
  },
  {
    question: "Does it work for long audio messages?",
    answer: "Yes! AudioTranscriber is optimized for long audios. In addition to full transcription, it provides a concise summary of the key points, so you can get the gist of a long message in seconds.",
  },
  {
    question: "Which platforms are supported?",
    answer: "We currently support WhatsApp, Instagram Direct, and Telegram. We are always working on expanding our services to other platforms.",
  },
  {
    question: "Can I cancel anytime?",
    answer: "Absolutely. You can cancel your subscription at any time directly from your account dashboard, no questions asked. You will retain access until the end of your current billing period.",
  },
  {
    question: "Is there a limit on the number of transcriptions?",
    answer: "Our monthly plan includes unlimited transcriptions. You can convert as many voice messages as you need without worrying about hitting a limit."
  }
];

export default function Faq() {
  return (
    <section id="faq" className="container">
        <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Frequently Asked Questions</h2>
            <p className="mt-4 text-lg text-muted-foreground">
                Find answers to common questions about AudioTranscriber.
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

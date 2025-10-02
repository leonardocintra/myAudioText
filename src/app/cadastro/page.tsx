"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { MessageSquareText } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const formSchema = z.object({
  name: z.string().min(2, {
    message: "O nome deve ter pelo menos 2 caracteres.",
  }),
  whatsapp: z.string().regex(/^\d{10,11}$/, {
    message: "Por favor, insira um número de WhatsApp válido com DDD (apenas números).",
  }),
  email: z.string().email({
    message: "Por favor, insira um endereço de e-mail válido.",
  }).optional().or(z.literal("")),
});

export default function CadastroPage() {
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      whatsapp: "",
      email: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    toast({
      title: "Cadastro enviado!",
      description: "Seus dados foram enviados com sucesso. Entraremos em contato em breve.",
    });
    form.reset();
  }

  const handleWhatsAppChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\D/g, '');
    form.setValue('whatsapp', value, { shouldValidate: true });
  }

  return (
    <div className="flex min-h-screen w-full flex-col items-center justify-center bg-muted/40 p-4">
      <div className="absolute top-8 left-8">
        <Link href="/" className="flex items-center gap-2 font-bold text-lg">
          <MessageSquareText className="h-6 w-6 text-primary" />
          <span>My Audio Text</span>
        </Link>
      </div>
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl">Crie sua Conta</CardTitle>
          <CardDescription>Comece seu teste gratuito de 15 dias. Não é necessário cartão de crédito.</CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Nome</FormLabel>
                    <FormControl>
                      <Input placeholder="Seu nome completo" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="whatsapp"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>WhatsApp com DDD</FormLabel>
                    <FormControl>
                      <Input placeholder="11999998888" {...field} onChange={handleWhatsAppChange} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email (Opcional)</FormLabel>
                    <FormControl>
                      <Input placeholder="seu@email.com" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" className="w-full bg-accent text-accent-foreground hover:bg-accent/90">
                <Link href="/cadastro"> Criar Conta e Começar Teste Grátis</Link>

              </Button>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
}
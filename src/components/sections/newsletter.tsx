'use client';

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { useToast } from "@/hooks/use-toast"
import { FadeIn } from "@/components/animations/fade-in"
import { subscribeToNewsletter } from "@/ai/flows/subscription-flow"
import { BellRing } from "lucide-react";

const formSchema = z.object({
  name: z.string().min(2, {
    message: "El nombre debe tener al menos 2 caracteres.",
  }),
  email: z.string().email({
    message: "Por favor, introduce una dirección de correo electrónico válida.",
  }),
  phone: z.string().optional(),
})

export default function NewsletterSection() {
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      await subscribeToNewsletter(values);
      toast({
        title: "¡Suscripción Exitosa!",
        description: "Gracias por tu interés. Te mantendremos informado sobre futuros eventos.",
      });
      form.reset();
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Algo salió mal",
        description: "No se pudo procesar tu suscripción. Por favor, inténtalo de nuevo.",
      });
    }
  }

  return (
    <section id="newsletter" className="bg-transparent py-20 sm:py-32">
      <div className="container max-w-screen-2xl px-4">
        <FadeIn>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="font-headline text-3xl font-bold tracking-tight text-gold-gradient sm:text-4xl flex items-center justify-center gap-2">
              <BellRing className="h-8 w-8" />
              Notifícame de Futuros Eventos
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Suscríbete para recibir actualizaciones sobre nuestras próximas presentaciones y eventos exclusivos.
            </p>
            <div className="mx-auto max-w-xl">
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="mt-10 space-y-6 text-left">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Nombre Completo</FormLabel>
                        <FormControl>
                          <Input placeholder="Juan Pérez" {...field} />
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
                        <FormLabel>Correo Electrónico</FormLabel>
                        <FormControl>
                          <Input placeholder="juan.perez@ejemplo.com" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Teléfono (Opcional)</FormLabel>
                        <FormControl>
                          <Input placeholder="099 123 4567" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Button type="submit" size="lg" className="w-full bg-accent hover:bg-accent/90 text-accent-foreground" disabled={form.formState.isSubmitting}>
                    {form.formState.isSubmitting ? "Enviando..." : "Suscribirme"}
                  </Button>
                </form>
              </Form>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}


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
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/hooks/use-toast"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Image from "next/image"
import { FadeIn } from "@/components/animations/fade-in"
import { sendContactEmail } from "@/ai/flows/contact-flow";

const formSchema = z.object({
  name: z.string().min(2, {
    message: "El nombre debe tener al menos 2 caracteres.",
  }),
  email: z.string().email({
    message: "Por favor, introduce una dirección de correo electrónico válida.",
  }),
  phone: z.string().optional(),
  message: z.string().min(10, {
    message: "El mensaje debe tener al menos 10 caracteres.",
  }).max(500, {
    message: "El mensaje no debe tener más de 500 caracteres.",
  }),
})

export default function ContactSection() {
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "Me gustaría solicitar información sobre sus clases y/o presentaciones.",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      await sendContactEmail(values);
      toast({
        title: "¡Solicitud Enviada!",
        description: "Gracias por tu interés. Nos pondremos en contacto en breve.",
      });
      form.reset();
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Algo salió mal",
        description: "No se pudo enviar tu solicitud. Por favor, inténtalo de nuevo.",
      });
    }
  }
  
  const whatsappLinkAbigail = "https://wa.me/593984356792";
  const qrCodeUrlAbigail = `https://api.qrserver.com/v1/create-qr-code/?size=128x128&data=${encodeURIComponent(whatsappLinkAbigail)}&color=D4AF37&bgcolor=191970&qzone=1`;


  return (
    <section id="contact" className="py-20 sm:py-32">
      <div className="container max-w-screen-2xl px-4">
        <FadeIn>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="font-headline text-3xl font-bold tracking-tight text-gold-gradient sm:text-4xl">Contactos para clases y/o presentaciones</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Completa el formulario a continuación o contáctanos por WhatsApp para programar una clase o presentación.
            </p>
          </div>
        </FadeIn>
        
        <div className="mt-16 grid grid-cols-1 items-start gap-12 lg:grid-cols-2 lg:gap-8">
          <FadeIn>
            <div className="mx-auto max-w-xl text-left">
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
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
                        <FormLabel>Dirección de Correo Electrónico</FormLabel>
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
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Mensaje</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="Cuéntanos sobre tus intereses..."
                            className="min-h-[120px]"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Button type="submit" size="lg" className="w-full bg-accent hover:bg-accent/90 text-accent-foreground md:w-auto" disabled={form.formState.isSubmitting}>
                    {form.formState.isSubmitting ? "Enviando..." : "Enviar Solicitud"}
                  </Button>
                </form>
              </Form>
            </div>
          </FadeIn>

          <FadeIn delay={200}>
            <div className="mx-auto max-w-xl">
              <Card className="bg-card w-full">
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl font-headline text-gold-gradient">Reservar por WhatsApp</CardTitle>
                  <CardDescription>
                    Escanea el código QR para contactarnos.
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex flex-col items-center justify-center gap-6">
                  <div className="flex flex-row gap-4 justify-center">
                    <div className="flex flex-col items-center gap-2">
                      <div className="rounded-lg border-2 border-primary bg-background p-2">
                        <Image 
                          src={qrCodeUrlAbigail}
                          alt="Código QR de WhatsApp para Abigail Rosero"
                          width={128}
                          height={128}
                        />
                      </div>
                      <Button asChild variant="outline" size="sm" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                        <a href={whatsappLinkAbigail} target="_blank" rel="noopener noreferrer">
                          Abrir WhatsApp
                        </a>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

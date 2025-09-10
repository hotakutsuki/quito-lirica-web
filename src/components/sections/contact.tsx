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

const formSchema = z.object({
  name: z.string().min(2, {
    message: "El nombre debe tener al menos 2 caracteres.",
  }),
  email: z.string().email({
    message: "Por favor, introduce una dirección de correo electrónico válida.",
  }),
  message: z.string().min(10, {
    message: "El mensaje debe tener al menos 10 caracteres.",
  }).max(500, {
    message: "El mensaje no debe tener más de 500 caracteres.",
  }),
})

// A mock server action
async function submitPresentationRequest(data: z.infer<typeof formSchema>) {
  console.log("Formulario enviado:", data);
  // In a real app, you would send this to your backend
  await new Promise(resolve => setTimeout(resolve, 1000));
  return { success: true };
}

export default function ContactSection() {
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "Me gustaría solicitar una presentación privada sobre sus paquetes de reserva de ópera.",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    const result = await submitPresentationRequest(values);
    if (result.success) {
      toast({
        title: "¡Solicitud Enviada!",
        description: "Gracias por tu interés. Nos pondremos en contacto en breve.",
      });
      form.reset();
    } else {
      toast({
        variant: "destructive",
        title: "Algo salió mal",
        description: "No se pudo enviar tu solicitud. Por favor, inténtalo de nuevo.",
      });
    }
  }
  
  const whatsappLink = "https://wa.me/15551234567"; // Use a placeholder number
  const qrCodeUrl = `https://api.qrserver.com/v1/create-qr-code/?size=256x256&data=${encodeURIComponent(whatsappLink)}&color=D4AF37&bgcolor=191970&qzone=1`;

  return (
    <section id="contact" className="py-20 sm:py-32">
      <div className="container max-w-screen-2xl grid grid-cols-1 lg:grid-cols-5 gap-12">
        <div className="lg:col-span-3">
          <FadeIn>
            <h2 className="font-headline text-3xl font-bold tracking-tight text-primary sm:text-4xl">Solicitar una Presentación Privada</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Completa el formulario a continuación para programar una presentación privada y descubrir nuestros paquetes exclusivos.
            </p>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="mt-10 space-y-6">
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
          </FadeIn>
        </div>
        <div className="lg:col-span-2">
          <FadeIn delay={200}>
            <Card className="h-full bg-card">
              <CardHeader>
                <CardTitle className="text-2xl font-headline text-primary">Reservar por WhatsApp</CardTitle>
                <CardDescription>
                  Escanea el código QR con tu teléfono para iniciar una conversación con nosotros en WhatsApp y realizar reservas rápidas.
                </CardDescription>
              </CardHeader>
              <CardContent className="flex flex-col items-center justify-center gap-4">
                <div className="rounded-lg border-2 border-primary bg-background p-4">
                  <Image 
                    src={qrCodeUrl}
                    alt="Código QR de WhatsApp"
                    width={220}
                    height={220}
                  />
                </div>
                <Button asChild variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                  <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                    Abrir WhatsApp
                  </a>
                </Button>
              </CardContent>
            </Card>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

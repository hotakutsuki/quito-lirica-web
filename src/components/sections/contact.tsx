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
    message: "Name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  message: z.string().min(10, {
    message: "Message must be at least 10 characters.",
  }).max(500, {
    message: "Message must not be longer than 500 characters.",
  }),
})

// A mock server action
async function submitPresentationRequest(data: z.infer<typeof formSchema>) {
  console.log("Form submitted:", data);
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
      message: "I'd like to request a private presentation about your opera reservation packages.",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    const result = await submitPresentationRequest(values);
    if (result.success) {
      toast({
        title: "Request Sent!",
        description: "Thank you for your interest. We will be in touch shortly.",
      });
      form.reset();
    } else {
      toast({
        variant: "destructive",
        title: "Something went wrong",
        description: "Could not send your request. Please try again.",
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
            <h2 className="font-headline text-3xl font-bold tracking-tight text-primary sm:text-4xl">Request a Private Presentation</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Fill out the form below to schedule a private presentation and discover our exclusive packages.
            </p>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="mt-10 space-y-6">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Full Name</FormLabel>
                      <FormControl>
                        <Input placeholder="John Doe" {...field} />
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
                      <FormLabel>Email Address</FormLabel>
                      <FormControl>
                        <Input placeholder="john.doe@example.com" {...field} />
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
                      <FormLabel>Message</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Tell us about your interests..."
                          className="min-h-[120px]"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type="submit" size="lg" className="w-full bg-accent hover:bg-accent/90 text-accent-foreground md:w-auto" disabled={form.formState.isSubmitting}>
                  {form.formState.isSubmitting ? "Sending..." : "Send Request"}
                </Button>
              </form>
            </Form>
          </FadeIn>
        </div>
        <div className="lg:col-span-2">
          <FadeIn delay={200}>
            <Card className="h-full bg-card">
              <CardHeader>
                <CardTitle className="text-2xl font-headline text-primary">Reserve via WhatsApp</CardTitle>
                <CardDescription>
                  Scan the QR code with your phone to start a conversation with us on WhatsApp for quick reservations.
                </CardDescription>
              </CardHeader>
              <CardContent className="flex flex-col items-center justify-center gap-4">
                <div className="rounded-lg border-2 border-primary bg-background p-4">
                  <Image 
                    src={qrCodeUrl}
                    alt="WhatsApp QR Code"
                    width={220}
                    height={220}
                  />
                </div>
                <Button asChild variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                  <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                    Open WhatsApp
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

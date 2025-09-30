
'use client';

import Image from 'next/image';
import {
  Card,
  CardContent,
} from '@/components/ui/card';
import { images } from '@/lib/images';
import { Ticket } from 'lucide-react';
import { FadeIn } from '@/components/animations/fade-in';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import * as React from 'react';

const events = [
  {
    title: 'Gala Lírica',
    description: 'Un formato de concierto clásico con un repertorio selecto de ópera y zarzuela para audiencias refinadas.',
    images: images.eventCarousel1,
  },
  {
    title: 'Opera Brass',
    description: 'Una fusión innovadora de potentes voces líricas y la majestuosidad de un ensamble de instrumentos de viento-metal.',
    images: images.eventCarousel2,
  },
  {
    title: 'Show de Ópera',
    description: 'Una experiencia íntima y sorprendente que combina alta cocina con las mejores arias de ópera, interpretadas entre los comensales.',
    images: images.eventCarousel3,
  },
  {
    title: 'Conciertos y Montajes en vivo',
    description: 'Producciones completas y conciertos temáticos diseñados para teatros y grandes escenarios, llevando la ópera a su máxima expresión.',
    images: images.eventCarousel4,
  },
  {
    title: 'Flashmobs y Eventos Corporativos',
    description: 'Añade un toque de distinción y sorprende a tus invitados con cantantes infiltrados que crean un momento único e impactante.',
    images: images.eventCarousel5,
  },
  {
    title: 'Ceremonias Religiosas',
    description: 'Acompañamiento musical con un repertorio sacro y solemne para bodas y otros eventos litúrgicos, añadiendo un toque celestial.',
    images: images.eventCarousel6,
  },
];

export default function EventsSection() {
  return (
    <section id="events" className="bg-transparent py-20 sm:py-32">
      <div className="container max-w-screen-2xl px-4">
        <FadeIn>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="font-headline text-3xl font-bold tracking-tight text-gold-gradient sm:text-4xl">Eventos y Paquetes Exclusivos</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Ofrecemos entretenimiento en varios formatos.
            </p>
          </div>
        </FadeIn>
        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {events.map((event, index) => (
            <FadeIn key={index} delay={index * 150}>
              <Card className="h-full overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-primary/20">
                <Carousel
                  plugins={[
                    Autoplay({
                      delay: 5000,
                      stopOnInteraction: true,
                    }),
                  ]}
                  opts={{
                    loop: true,
                  }}
                  className="relative w-full"
                >
                  <CarouselContent>
                    {event.images.map((img, i) => (
                      <CarouselItem key={i}>
                        <div className="relative h-60 w-full">
                          <Image
                            src={img.src}
                            alt={img.alt}
                            fill
                            className="object-cover"
                            data-ai-hint={img.hint}
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                          />
                        </div>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2" />
                  <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2" />
                </Carousel>
                <CardContent className="p-6">
                  <h3 className="flex items-center gap-2 text-2xl font-headline text-foreground">
                    <Ticket className="h-6 w-6 text-primary" />
                    {event.title}
                  </h3>
                  <p className="pt-2 text-muted-foreground">{event.description}</p>
                </CardContent>
              </Card>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

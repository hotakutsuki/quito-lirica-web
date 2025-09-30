import Image from 'next/image';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { images } from '@/lib/images';
import { Ticket } from 'lucide-react';
import { FadeIn } from '@/components/animations/fade-in';

const events = [
  {
    title: 'Cena Show',
    description: 'Una experiencia íntima que combina alta cocina con las mejores arias de ópera, interpretadas entre los comensales.',
    image: images.event1,
  },
  {
    title: 'Eventos Corporativos',
    description: 'Añade un toque de distinción y cultura a tus eventos de empresa con un espectáculo lírico inolvidable.',
    image: images.event2,
  },
  {
    title: 'Ópera Secreta y Flashmobs',
    description: 'Sorprende a tus invitados con cantantes infiltrados que irrumpen en escena creando un momento único e impactante.',
    image: images.event3,
  },
  {
    title: 'Gala Lírica',
    description: 'Un formato de concierto clásico con un repertorio selecto de ópera y zarzuela para audiencias refinadas.',
    image: images.event4,
  },
  {
    title: 'Opera-Brass',
    description: 'Una fusión innovadora de potentes voces líricas y la majestuosidad de un ensamble de instrumentos de viento-metal.',
    image: images.event5,
  },
  {
    title: 'Montajes y Conciertos',
    description: 'Producciones completas y conciertos temáticos diseñados para teatros y grandes escenarios.',
    image: images.event6,
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
              <Card className="h-full overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 hover:-translate-y-1">
                {event.image && (
                  <div className="relative h-60 w-full">
                    <Image
                      src={event.image.src}
                      alt={event.title}
                      fill
                      className="object-cover"
                      data-ai-hint={event.image.hint}
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  </div>
                )}
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-2xl font-headline">
                    <Ticket className="h-6 w-6 text-primary" />
                    {event.title}
                  </CardTitle>
                  <CardDescription className="pt-2">{event.description}</CardDescription>
                </CardHeader>
              </Card>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

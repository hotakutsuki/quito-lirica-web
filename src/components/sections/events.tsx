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
    title: 'La Traviata de Verdi',
    description: 'Una historia atemporal de amor y sacrificio en el corazón de París. Una nueva producción espectacular.',
    image: images.event1,
  },
  {
    title: 'La Flauta Mágica de Mozart',
    description: 'Embárcate en un viaje mítico lleno de música encantadora y personajes fantásticos.',
    image: images.event2,
  },
  {
    title: 'Carmen de Bizet',
    description: 'Vive la pasión ardiente y la intensidad dramática de una de las óperas más populares del mundo.',
    image: images.event3,
  },
  {
    title: 'Don Giovanni de Mozart',
    description: 'La oscura y carismática historia de un libertino que desafía todas las normas sociales y divinas.',
    image: images.event4,
  },
  {
    title: 'Las bodas de Fígaro',
    description: 'Una comedia de intrigas, amor y enredos en un solo día de locura en el palacio del Conde de Almaviva.',
    image: images.event5,
  },
  {
    title: 'Tosca de Puccini',
    description: 'Un thriller operístico de amor, celos y política en la Roma de 1800.',
    image: images.event6,
  },
];

export default function EventsSection() {
  return (
    <section id="events" className="bg-transparent py-20 sm:py-32">
      <div className="container max-w-screen-2xl px-4">
        <FadeIn>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="font-headline text-3xl font-bold tracking-tight text-primary sm:text-4xl">Eventos y Paquetes Exclusivos</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Ofrecemos experiencias curadas y paquetes de reserva premium para los teatros de ópera más prestigiosos.
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

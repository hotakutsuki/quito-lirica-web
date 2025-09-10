import Image from 'next/image';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Ticket } from 'lucide-react';
import { FadeIn } from '@/components/animations/fade-in';

const events = [
  {
    title: 'La Traviata de Verdi',
    description: 'Una historia atemporal de amor y sacrificio en el corazón de París. Una nueva producción espectacular.',
    image: PlaceHolderImages.find(p => p.id === 'event1'),
  },
  {
    title: 'La Flauta Mágica de Mozart',
    description: 'Embárcate en un viaje mítico lleno de música encantadora y personajes fantásticos.',
    image: PlaceHolderImages.find(p => p.id === 'event2'),
  },
  {
    title: 'Carmen de Bizet',
    description: 'Vive la pasión ardiente y la intensidad dramática de una de las óperas más populares del mundo.',
    image: PlaceHolderImages.find(p => p.id === 'event3'),
  },
];

export default function EventsSection() {
  return (
    <section id="events" className="py-20 sm:py-32">
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
                      src={event.image.imageUrl}
                      alt={event.title}
                      fill
                      className="object-cover"
                      data-ai-hint={event.image.imageHint}
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

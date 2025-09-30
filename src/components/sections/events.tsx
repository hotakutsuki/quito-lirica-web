
'use client';

import Image from 'next/image';
import {
  Card,
  CardContent,
} from '@/components/ui/card';
import { images, audios } from '@/lib/images';
import { Ticket, Play, Youtube, Pause } from 'lucide-react';
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
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const events = [
  {
    title: 'Gala Lírica',
    description: 'Interpretación estilo concierto para un ambiente formal y distinguido.',
    images: images.eventCarousel1,
    audioSrc: audios.galaLirica,
    youtubeUrl: 'https://youtu.be/bXf8TwC6EeA',
  },
  {
    title: 'Ópera & Brass',
    description: 'Escucha el inigualable sonido de las voces líricas y la potencia del ensamble de Brass en un concierto brillante.',
    images: images.eventCarousel2,
    audioSrc: audios.operaBrass,
    youtubeUrl: 'https://youtu.be/LjbW8XCRwd8',
  },
  {
    title: 'Show de Ópera',
    description: 'Ópera en movimiento para la recepción o cena formal. Las voces líricas a pocos metros de distancia crearán una experiencia envolvente e impactante.',
    images: images.eventCarousel3,
    audioSrc: audios.showDeOpera,
    youtubeUrl: 'https://youtube.com/shorts/URjJz3TS_qw?feature=share',
  },
  {
    title: 'Conciertos y Montajes en vivo',
    description: 'Disfruta de conciertos y montajes con músicos en vivo en nuestras temporadas artísticas del más alto nivel.',
    images: images.eventCarousel4,
    audioSrc: audios.conciertos,
    youtubeUrl: 'https://youtu.be/2Rw3RZ3vdHY',
  },
  {
    title: 'Flashmobs y Eventos Corporativos',
    description: 'Visibiliza y potencia tu marca con un espectáculo sorpresivo para tus invitados o asistentes.',
    images: images.eventCarousel5,
    audioSrc: audios.flashmobs,
    youtubeUrl: 'https://youtu.be/xEmEeW63ppg',
  },
  {
    title: 'Ceremonias Religiosas',
    description: 'Música sacra que resuena con la fe y la solemnidad del momento.',
    images: images.eventCarousel6,
    audioSrc: audios.ceremonias,
    youtubeUrl: 'https://youtube.com/shorts/zVv2I3DQWPM',
  },
];

export default function EventsSection() {
  const [playingAudio, setPlayingAudio] = React.useState<string | null>(null);
  const audioRef = React.useRef<HTMLAudioElement | null>(null);

  const toggleAudio = (audioSrc: string) => {
    if (audioRef.current && playingAudio === audioSrc) {
      audioRef.current.pause();
      setPlayingAudio(null);
    } else {
      if (audioRef.current) {
        audioRef.current.pause();
      }
      const newAudio = new Audio(audioSrc);
      audioRef.current = newAudio;
      newAudio.play();
      setPlayingAudio(audioSrc);
      newAudio.onended = () => setPlayingAudio(null);
    }
  };

  React.useEffect(() => {
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
      }
    };
  }, []);

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
              <Card className="h-full flex flex-col overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-primary/20">
                <Carousel
                  plugins={[
                    Autoplay({
                      delay: 5000,
                      stopOnInteraction: false,
                      stopOnMouseEnter: true,
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
                <CardContent className="flex flex-col flex-grow p-6">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="flex items-center gap-2 text-xl font-headline text-foreground">
                      <Ticket className="h-6 w-6 text-primary" />
                      {event.title}
                    </h3>
                    <div className="flex items-center gap-2">
                      <Button
                        variant="outline"
                        size="icon"
                        onClick={() => toggleAudio(event.audioSrc)}
                        aria-label={playingAudio === event.audioSrc ? 'Pausar audio' : 'Reproducir audio'}
                      >
                        {playingAudio === event.audioSrc ? <Pause className="h-5 w-5" /> : <Play className="h-5 w-5" />}
                      </Button>
                      <Button asChild variant="outline" size="icon">
                        <Link href={event.youtubeUrl} target="_blank" rel="noopener noreferrer" aria-label="Ver video en YouTube">
                          <Youtube className="h-5 w-5 text-red-600" />
                        </Link>
                      </Button>
                    </div>
                  </div>
                  <p className="text-muted-foreground flex-grow">{event.description}</p>
                </CardContent>
              </Card>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}


'use client';

import Image from 'next/image';
import {
  Card,
  CardContent,
} from '@/components/ui/card';
import { images, audios } from '@/lib/images';
import { BookOpen, Play, Pause, LoaderCircle } from 'lucide-react';
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

export default function EducationSection() {
  const [playingAudio, setPlayingAudio] = React.useState<string | null>(null);
  const [loadingAudio, setLoadingAudio] = React.useState<string | null>(null);
  const audioRef = React.useRef<HTMLAudioElement | null>(null);

  const toggleAudio = (audioSrc: string) => {
    if (audioRef.current && playingAudio === audioSrc) {
      audioRef.current.pause();
      setPlayingAudio(null);
    } else {
      if (audioRef.current) {
        audioRef.current.pause();
      }
      
      setLoadingAudio(audioSrc);
      setPlayingAudio(null);

      const newAudio = new Audio(audioSrc);
      audioRef.current = newAudio;
      
      newAudio.oncanplay = () => {
        newAudio.play();
        setLoadingAudio(null);
        setPlayingAudio(audioSrc);
      };

      newAudio.onended = () => {
        setPlayingAudio(null);
      };

      newAudio.load();
    }
  };

  React.useEffect(() => {
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
      }
    };
  }, []);

  const educationImages = images.educationCarousel;
  const educationAudio = audios.recursosEducativos;

  return (
    <section id="education" className="bg-transparent py-20 sm:py-32">
      <div className="container max-w-screen-2xl px-4">
        <FadeIn>
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="font-headline text-3xl font-bold tracking-tight text-gold-gradient sm:text-4xl">Recursos Educativos</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Nútrete de la experiencia y conocimiento de nuestros artistas en clases maestras, vocal coaching, clases de piano, y canto coral.
            </p>
          </div>
        </FadeIn>
        
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
            <FadeIn className="lg:col-span-2">
                <div className="space-y-6 text-lg text-foreground/80">
                    <div className="flex items-start gap-4">
                        <BookOpen className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
                        <div>
                            <h3 className="font-semibold text-foreground">Ópera en las Aulas</h3>
                            <p className="text-muted-foreground">Nuestros artistas visitarán tu institución educativa y acercarán a los estudiantes al mundo de la ópera y la música clásica con entretenidos conciertos e invitarán a los estudiantes más talentosos a participar en master classes.</p>
                        </div>
                    </div>
                    <div className="flex items-start gap-4">
                        <BookOpen className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
                        <div>
                            <h3 className="font-semibold text-foreground">Montajes de Teatro Musical</h3>
                            <p className="text-muted-foreground">Montaremos un musical pensado para diferentes grupos de edad.</p>
                        </div>
                    </div>
                </div>
            </FadeIn>
            <FadeIn className="lg:col-span-3" delay={200}>
                <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-primary/20">
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
                        {educationImages.map((img, i) => (
                          <CarouselItem key={i}>
                            <div className="relative h-80 w-full">
                              <Image
                                src={img.src}
                                alt={img.alt}
                                fill
                                className="object-cover"
                                data-ai-hint={img.hint}
                                sizes="(max-width: 768px) 100vw, 60vw"
                              />
                            </div>
                          </CarouselItem>
                        ))}
                      </CarouselContent>
                      <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2" />
                      <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2" />
                    </Carousel>
                     <CardContent className="p-4 flex justify-center">
                        <Button
                          variant="outline"
                          size="icon"
                          onClick={() => toggleAudio(educationAudio)}
                          aria-label={playingAudio === educationAudio ? 'Pausar audio' : 'Reproducir audio'}
                          disabled={loadingAudio === educationAudio}
                        >
                          {loadingAudio === educationAudio ? (
                            <LoaderCircle className="h-5 w-5 animate-spin" />
                          ) : playingAudio === educationAudio ? (
                            <Pause className="h-5 w-5" />
                          ) : (
                            <Play className="h-5 w-5" />
                          )}
                        </Button>
                    </CardContent>
                </Card>
            </FadeIn>
        </div>
      </div>
    </section>
  );
}

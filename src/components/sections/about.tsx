
'use client';

import { images } from '@/lib/images';
import { Feather, ChevronDown } from 'lucide-react';
import Image from 'next/image';
import { FadeIn } from '@/components/animations/fade-in';
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"
import { Button } from '@/components/ui/button';
import { useState } from 'react';
import * as React from 'react';

export default function AboutSection() {
  const aboutImage = images.about;
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section id="about" className="bg-transparent py-10 sm:py-16">
      <div className="container max-w-screen-2xl px-4">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <FadeIn>
            <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
              <h2 className="font-headline text-3xl font-bold tracking-tight text-gold-gradient sm:text-4xl">Sobre Quito Lírica Ópera Show</h2>
              <div className="mt-6 flex items-center gap-4 text-muted-foreground">
                <Feather className="h-8 w-8 text-primary" />
                <p className="text-lg">Una historia de pasión, arte y un toque de humor.</p>
              </div>
              <Collapsible open={isOpen} onOpenChange={setIsOpen}>
                <p className="mt-8 text-lg text-foreground/80 whitespace-pre-line">
                  QUITO LÍRICA Ópera Show fue creada con el afán de popularizar la lírica en el territorio ecuatoriano en un ambiente cómico y distendido. Fundada por el tenor Juan Carlos Arellano y la soprano Abigail Rosero en el año 2008, en un inicio funcionó como una empresa de entretenimiento musical. Su propuesta artística une la lírica con el humor al estilo “Carnaval de Venecia” y procura llevar en cada presentación un repertorio variado, soberbio y atractivo; convirtiéndose en pionera al llevar el repertorio operístico fuera de los teatros.
                </p>
                <CollapsibleContent>
                  <p className="mt-4 text-lg text-foreground/80 whitespace-pre-line">
                    Posteriormente, el proyecto evoluciona y se integran varios músicos, bailarines y directores escénicos, consolidándose como compañía lírica independiente. Realiza montajes de escenas de óperas y zarzuelas y organiza sendos conciertos en diferentes teatros y salas de conciertos del Ecuador, sin dejar de lado su esencia de llevar la lírica a todas partes que fuera su razón de ser. Su labor de divulgación de la lírica ha permitido que el público se nutra de nuevo repertorio y que escuche interpretaciones de altísima calidad y profesionalismo. Actualmente configuran la lírica con repertorio popular y llegan a un público muy variado. Las propuestas, innovadoras y diferente procuran cumplir el derecho al acceso a expresiones culturales diversas.
                  </p>
                </CollapsibleContent>
                <CollapsibleTrigger asChild>
                  <Button variant="link" className="px-0 mt-4 text-primary hover:text-primary/80">
                    {isOpen ? 'Leer menos' : 'Leer más sobre nuestra historia'}
                    <ChevronDown className={`ml-2 h-4 w-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
                  </Button>
                </CollapsibleTrigger>
              </Collapsible>
            </div>
          </FadeIn>
          <FadeIn delay={200}>
            {aboutImage && (
              <div className="relative mx-auto h-[500px] w-full max-w-md lg:max-w-none">
                <Image
                  src={aboutImage.src}
                  alt={aboutImage.alt}
                  fill
                  className="rounded-lg object-contain shadow-lg"
                  data-ai-hint={aboutImage.hint}
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            )}
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

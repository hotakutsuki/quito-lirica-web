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
    <section id="about" className="bg-card py-20 sm:py-32">
      <div className="container max-w-screen-2xl px-4">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <FadeIn>
            <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
              <h2 className="font-headline text-3xl font-bold tracking-tight text-primary sm:text-4xl">Sobre Quito Lírica Ópera show</h2>
              <div className="mt-6 flex items-center gap-4 text-muted-foreground">
                <Feather className="h-8 w-8 text-primary" />
                <p className="text-lg">Una historia de pasión, arte y un toque de humor.</p>
              </div>
              <Collapsible open={isOpen} onOpenChange={setIsOpen}>
                <p className="mt-8 text-lg text-foreground/80 whitespace-pre-line">
                  Fundada en 2008 por el tenor Juan Carlos Arellano y la soprano Abigail Rosero, Quito Lírica Ópera Show nació con el afán de popularizar la lírica en Ecuador dentro de un ambiente cómico y distendido. Nuestra misión es desmitificar la ópera y llevar su pasión y belleza a una audiencia más amplia a través de experiencias exclusivas y curadas.
                </p>
                <CollapsibleContent>
                  <p className="mt-4 text-lg text-foreground/80 whitespace-pre-line">
                    Nuestra propuesta artística une la lírica con el humor al estilo del "Carnaval de Venecia", convirtiéndonos en pioneros al llevar el repertorio operístico fuera de los teatros. Con el tiempo, el proyecto evolucionó para consolidarse como una compañía lírica independiente, integrando a más músicos, bailarines y directores escénicos.
                    Realizamos montajes de escenas de óperas, zarzuelas y conciertos, sin perder nuestra esencia de llevar la lírica a todas partes. Actualmente, fusionamos la lírica con repertorio popular para llegar a un público variado, siempre con interpretaciones de la más alta calidad profesional.
                    Nuestros innovadores formatos incluyen:
                    - Show de Ópera al estilo Carnaval Veneciano: Una experiencia inmersiva donde los artistas, con vestuario de época, cantan alrededor del público.
                    - Flashmob y Ópera Secreta: Artistas disfrazados de personal sorprenden a la audiencia, creando un enorme impacto, ideal para reforzar marcas o productos.
                    - Concierto: Un formato más tradicional y formal, perfecto para seminarios, congresos o ceremonias solemnes.
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
import { images } from '@/lib/images';
import { Feather } from 'lucide-react';
import Image from 'next/image';
import { FadeIn } from '@/components/animations/fade-in';

export default function AboutSection() {
  const aboutImage = images.about;

  return (
    <section id="about" className="bg-card py-20 sm:py-32">
      <div className="container max-w-screen-2xl px-4">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <FadeIn>
            <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
              <h2 className="font-headline text-3xl font-bold tracking-tight text-primary sm:text-4xl">Sobre Opera Access</h2>
              <div className="mt-6 flex items-center gap-4 text-muted-foreground">
                <Feather className="h-8 w-8 text-primary" />
                <p className="text-lg">Una historia de pasión, arte y un toque de humor.</p>
              </div>
              <p className="mt-8 text-lg text-foreground/80 whitespace-pre-line">
                Fundada en 2008 como 'Quito Lírica Ópera Show' por Juan Carlos Arellano y Abigail Rosero, Opera Access tiene una rica historia haciendo la ópera accesible y disfrutable, a menudo mezclándola con un toque de humor. Nuestra misión es desmitificar la ópera y llevar su pasión y belleza a una audiencia más amplia a través de experiencias exclusivas y curadas.
              </p>
            </div>
          </FadeIn>
          <FadeIn delay={200}>
            {aboutImage && (
              <div className="relative mx-auto h-[500px] w-full max-w-md lg:max-w-none">
                <Image
                  src={aboutImage.src}
                  alt={aboutImage.alt}
                  fill
                  className="rounded-lg object-cover shadow-lg"
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

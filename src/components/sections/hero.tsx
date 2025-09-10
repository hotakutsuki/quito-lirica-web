import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export default function HeroSection() {
  const heroImage = PlaceHolderImages.find(p => p.id === 'hero');

  return (
    <section className="relative flex h-[60vh] w-full items-center justify-center text-center text-white md:h-[80vh]">
      {heroImage && (
        <Image
          src={heroImage.imageUrl}
          alt={heroImage.description}
          fill
          className="object-cover"
          priority
          data-ai-hint={heroImage.imageHint}
        />
      )}
      <div className="absolute inset-0 bg-background/70" />
      <div className="relative z-10 max-w-4xl px-4">
        <h1 className="font-headline text-4xl font-bold tracking-tight text-primary sm:text-6xl lg:text-7xl">
          Experience Opera Like Never Before
        </h1>
        <p className="mt-6 text-lg leading-8 text-foreground/90">
          Gain exclusive access to the most sought-after opera events and bespoke reservation packages.
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <a href="#contact">
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
              Request a Presentation
            </Button>
          </a>
          <a href="#events">
            <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
              Explore Events
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
}

'use client';
import { Button } from '@/components/ui/button';

export default function HeroSection() {
  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative flex h-[calc(60vh-12rem)] w-full items-center justify-center text-center text-white md:h-[calc(80vh-12rem)]">
      <div className="absolute inset-0 bg-background/70" />
      <div className="relative z-10 max-w-4xl px-4">
        <h1 className="font-headline text-4xl font-bold tracking-tight text-gold-gradient sm:text-6xl lg:text-7xl">
          Un espectáculo para no olvidar
        </h1>
        <p className="mt-6 text-lg leading-8 text-foreground/90">
          Obtén acceso exclusivo a los eventos de ópera más cotizados y paquetes de reserva a medida.
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-x-6">
          <Button size="lg" className="bg-gold-gradient hover:opacity-90 text-primary-foreground" onClick={() => scrollTo('contact')}>
            Solicitar una Presentación
          </Button>
          <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-gold-gradient hover:text-primary-foreground" onClick={() => scrollTo('events')}>
            Explorar Eventos
          </Button>
        </div>
      </div>
    </section>
  );
}

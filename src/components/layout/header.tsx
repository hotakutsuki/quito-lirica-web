'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Music2 } from 'lucide-react';

export default function Header() {
  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 max-w-screen-2xl items-center justify-between px-4">
        <Link href="/" className="flex items-center gap-2">
          <Music2 className="h-8 w-8 text-primary" />
          <span className="font-headline text-xl font-bold text-gold-gradient">Quito Lírica Ópera Show</span>
        </Link>
        <nav className="hidden items-center gap-4 text-sm md:flex">
          <Button variant="link" onClick={() => scrollTo('events')} className="text-foreground hover:text-primary">Eventos</Button>
          <Button variant="link" onClick={() => scrollTo('about')} className="text-foreground hover:text-primary">Sobre Nosotros</Button>
          <Button variant="link" onClick={() => scrollTo('contact')} className="text-foreground hover:text-primary">Contacto</Button>
        </nav>
        <Button onClick={() => scrollTo('contact')} className="hidden bg-accent hover:bg-accent/90 text-accent-foreground md:inline-flex">
          Solicitar Presentación
        </Button>
      </div>
    </header>
  );
}

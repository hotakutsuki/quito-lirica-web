
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { AlertTriangle } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center text-center">
      <div className="relative z-10 max-w-2xl px-4 py-20">
        <AlertTriangle className="mx-auto h-16 w-16 text-primary" />
        <h1 className="mt-8 font-headline text-4xl font-bold tracking-tight text-gold-gradient sm:text-6xl">
          404 - Página No Encontrada
        </h1>
        <p className="mt-6 text-lg leading-8 text-foreground/90">
          Lo sentimos, la página que estás buscando no existe o ha sido movida.
        </p>
        <div className="mt-10 flex items-center justify-center">
          <Button asChild size="lg" className="bg-gold-gradient text-primary-foreground hover:opacity-90">
            <Link href="/">Volver al Inicio</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}

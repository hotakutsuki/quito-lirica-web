import { Facebook, Instagram, Mail, Mic, Music2, Phone, Youtube } from 'lucide-react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="border-t border-border/40 bg-background/95 py-12">
      <div className="container grid max-w-screen-2xl grid-cols-1 gap-8 md:grid-cols-4">
        <div className="flex flex-col items-start gap-4 md:col-span-1">
          <Link href="/" className="flex items-center gap-2">
            <Music2 className="h-8 w-8 text-primary" />
            <span className="font-headline text-2xl font-bold text-primary">Opera Access</span>
          </Link>
          <p className="text-muted-foreground">Tu pase exclusivo a las mejores presentaciones de ópera del mundo.</p>
        </div>
        <div className="flex flex-col gap-2">
          <h3 className="font-headline text-lg font-semibold text-primary">Contacto Directo</h3>
          <p className="flex items-center gap-2 text-muted-foreground">
            <Phone className="h-4 w-4 text-primary" />
            <span>Abigail Rosero: 0984 356 792</span>
          </p>
          <p className="flex items-center gap-2 text-muted-foreground">
            <Phone className="h-4 w-4 text-primary" />
            <span>Juan Carlos Arellano: 0999 864 113</span>
          </p>
          <p className="flex items-center gap-2 text-muted-foreground">
            <Mail className="h-4 w-4 text-primary" />
            <a href="mailto:abi.soprano1@gmail.com" className="hover:text-primary">abi.soprano1@gmail.com</a>
          </p>
        </div>
        <div className="flex flex-col gap-2">
          <h3 className="font-headline text-lg font-semibold text-primary">Redes Sociales</h3>
          <a href="https://www.facebook.com/quitolirica.operashow" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-muted-foreground hover:text-primary">
            <Facebook className="h-4 w-4 text-primary" />
            <span>@quitolirica.operashow</span>
          </a>
          <a href="https://www.instagram.com/abigailrosero.soprano" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-muted-foreground hover:text-primary">
            <Instagram className="h-4 w-4 text-primary" />
            <span>@abigailrosero.soprano</span>
          </a>
          <a href="#" className="flex items-center gap-2 text-muted-foreground hover:text-primary">
            <Mic className="h-4 w-4 text-primary" />
            <span>Abigail Rosero en SoundCloud</span>
          </a>
          <a href="#" className="flex items-center gap-2 text-muted-foreground hover:text-primary">
            <Youtube className="h-4 w-4 text-primary" />
            <span>Juan Carlos Arellano en YouTube</span>
          </a>
        </div>
        <div className="flex flex-col gap-2">
          <h3 className="font-headline text-lg font-semibold text-primary">Enlaces Rápidos</h3>
          <a href="#events" className="text-muted-foreground hover:text-primary">Eventos</a>
          <a href="#about" className="text-muted-foreground hover:text-primary">Sobre Nosotros</a>
          <a href="#contact" className="text-muted-foreground hover:text-primary">Solicitar una Presentación</a>
        </div>
      </div>
      <div className="container mt-8 max-w-screen-2xl border-t border-border/40 pt-8 text-center text-sm text-muted-foreground">
        <p>&copy; {new Date().getFullYear()} Opera Access. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
}
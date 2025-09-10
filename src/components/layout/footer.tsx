import { Mail, MapPin, Music2, Phone } from 'lucide-react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="border-t border-border/40 bg-background/95 py-12">
      <div className="container grid max-w-screen-2xl grid-cols-1 gap-8 md:grid-cols-3">
        <div className="flex flex-col items-start gap-4">
          <Link href="/" className="flex items-center gap-2">
            <Music2 className="h-8 w-8 text-primary" />
            <span className="font-headline text-2xl font-bold text-primary">Opera Access</span>
          </Link>
          <p className="text-muted-foreground">Your exclusive pass to the world's finest opera performances.</p>
        </div>
        <div className="flex flex-col gap-2">
          <h3 className="font-headline text-lg font-semibold text-primary">Contact Us</h3>
          <p className="flex items-center gap-2 text-muted-foreground">
            <Phone className="h-4 w-4 text-primary" />
            <span>+1 (555) 123-4567</span>
          </p>
          <p className="flex items-center gap-2 text-muted-foreground">
            <Mail className="h-4 w-4 text-primary" />
            <span>contact@operaaccess.com</span>
          </p>
          <p className="flex items-center gap-2 text-muted-foreground">
            <MapPin className="h-4 w-4 text-primary" />
            <span>123 Opera Lane, Music City, 10101</span>
          </p>
        </div>
        <div className="flex flex-col gap-2">
          <h3 className="font-headline text-lg font-semibold text-primary">Quick Links</h3>
          <a href="#events" className="text-muted-foreground hover:text-primary">Events</a>
          <a href="#about" className="text-muted-foreground hover:text-primary">About Us</a>
          <a href="#contact" className="text-muted-foreground hover:text-primary">Request a Presentation</a>
        </div>
      </div>
      <div className="container mt-8 max-w-screen-2xl border-t border-border/40 pt-8 text-center text-sm text-muted-foreground">
        <p>&copy; {new Date().getFullYear()} Opera Access. All rights reserved.</p>
      </div>
    </footer>
  );
}

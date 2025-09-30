
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import HeroSection from '@/components/sections/hero';
import EventsSection from '@/components/sections/events';
import AboutSection from '@/components/sections/about';
import ContactSection from '@/components/sections/contact';
import VideosSection from '@/components/sections/videos';
import NewsletterSection from '@/components/sections/newsletter';
import Image from 'next/image';
import { images } from '@/lib/images';

export default function Home() {
  const bannerImage = images.banner; 
  
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        {bannerImage && (
          <div className="relative h-48 w-full">
            <Image
              src={bannerImage.src}
              alt={bannerImage.alt}
              fill
              className="object-cover"
              priority
              data-ai-hint={bannerImage.hint}
            />
          </div>
        )}
        <HeroSection />
        <EventsSection />
        <VideosSection />
        <AboutSection />
        <NewsletterSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}

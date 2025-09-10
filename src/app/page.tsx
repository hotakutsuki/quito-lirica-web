import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import HeroSection from '@/components/sections/hero';
import EventsSection from '@/components/sections/events';
import AboutSection from '@/components/sections/about';
import ContactSection from '@/components/sections/contact';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-background px-4">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <EventsSection />
        <AboutSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}


import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Feather } from 'lucide-react';
import Image from 'next/image';
import { FadeIn } from '@/components/animations/fade-in';

export default function AboutSection() {
  const businessInfo = {
    businessName: "Opera Access",
    founders: "Juan Carlos Arellano and Abigail Rosero",
    history: "Founded in 2008 as 'Quito Lírica Ópera Show', we have a rich history of making opera accessible and enjoyable, often blending it with a touch of humor. Our mission is to demystify opera and bring its passion and beauty to a wider audience through exclusive, curated experiences.",
  };
  const aboutImage = PlaceHolderImages.find(p => p.id === 'about');

  return (
    <section id="about" className="bg-card py-20 sm:py-32">
      <div className="container max-w-screen-2xl">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <FadeIn>
            <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
              <h2 className="font-headline text-3xl font-bold tracking-tight text-primary sm:text-4xl">About Opera Access</h2>
              <div className="mt-6 flex items-center gap-4 text-muted-foreground">
                <Feather className="h-8 w-8 text-primary" />
                <p className="text-lg">A story of passion, art, and a touch of humor.</p>
              </div>
              <p className="mt-8 text-lg text-foreground/80 whitespace-pre-line">
                Founded in 2008 as 'Quito Lírica Ópera Show' by Juan Carlos Arellano and Abigail Rosero, Opera Access has a rich history of making opera accessible and enjoyable, often blending it with a touch of humor. Our mission is to demystify opera and bring its passion and beauty to a wider audience through exclusive, curated experiences.
              </p>
            </div>
          </FadeIn>
          <FadeIn delay={200}>
            {aboutImage && (
              <div className="relative mx-auto h-[500px] w-full max-w-md lg:max-w-none">
                <Image
                  src={aboutImage.imageUrl}
                  alt="About Us"
                  fill
                  className="rounded-lg object-cover shadow-lg"
                  data-ai-hint={aboutImage.imageHint}
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

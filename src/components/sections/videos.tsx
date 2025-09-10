import { FadeIn } from '@/components/animations/fade-in';
import { Video } from 'lucide-react';

const videos = [
  {
    title: 'Opera',
    videoId: '5zobJRmnflw',
  },
  {
    title: 'Der Hölle Rache kocht in meinem Herzen (muestra)',
    videoId: 'EC__z-RJ268',
  },
  {
    title: 'Nessun Dorma',
    videoId: '5DV9SlRKKnQ',
  },
  {
    title: 'FLASHMOB. O sole mio',
    videoId: 'xEmEeW63ppg',
  },
  {
    title: 'Por ti volaré - Time to say Goodbye',
    videoId: 'QPeqTnIQO5M',
  },
  {
    title: 'AMENO Covered: El Reloj',
    videoId: 'rhWkRWWP1Pg',
  },
];

export default function VideosSection() {
  return (
    <section id="videos" className="py-20 sm:py-32 bg-card">
      <div className="container max-w-screen-2xl">
        <FadeIn>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="font-headline text-3xl font-bold tracking-tight text-primary sm:text-4xl">
              Galería de Videos
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Una muestra de nuestras presentaciones y talento en acción.
            </p>
          </div>
        </FadeIn>
        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {videos.map((video, index) => (
            <FadeIn key={index} delay={index * 150}>
              <div className="h-full overflow-hidden rounded-lg shadow-lg transition-all duration-300 hover:shadow-primary/20 hover:-translate-y-1">
                <div className="aspect-video">
                  <iframe
                    className="h-full w-full"
                    src={`https://www.youtube.com/embed/${video.videoId}`}
                    title={video.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
                <div className="bg-card p-4">
                  <h3 className="flex items-center gap-2 font-headline text-lg font-semibold text-foreground">
                    <Video className="h-5 w-5 text-primary" />
                    {video.title}
                  </h3>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

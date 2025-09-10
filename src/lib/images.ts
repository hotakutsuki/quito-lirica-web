import principalImage from '@/assets/principal.jpeg';
import bannerOperaImage from '@/assets/banner_opera.jpeg';
import event1Image from '@/assets/event1.jpeg';
import event2Image from '@/assets/event2.jpeg';
import event3Image from '@/assets/event3.jpeg';
import backgroundImage from '@/assets/background.jpeg';

export const images = {
  hero: {
    src: backgroundImage,
    alt: 'Una pareja en un escenario de ópera',
    hint: 'pareja opera',
  },
  event1: {
    src: event1Image,
    alt: 'Escena de La Traviata de Verdi',
    hint: 'pareja opera',
  },
  event2: {
    src: event2Image,
    alt: 'Escena de La Flauta Mágica de Mozart',
    hint: 'pareja opera',
  },
  event3: {
    src: event3Image,
    alt: 'Escena de Carmen de Bizet',
    hint: 'pareja opera',
  },
  about: {
    src: principalImage,
    alt: 'Los fundadores de Opera Access',
    hint: 'pareja opera',
  },
  banner: {
    src: bannerOperaImage,
    alt: 'Banner de Opera Access',
    hint: 'opera banner',
  }
};

import principalImage from '@/assets/principal.jpeg';
import bannerOperaImage from '@/assets/banner_opera.jpeg';
import event1Image from '@/assets/event1.jpeg';
import event2Image from '@/assets/event2.jpeg';
import event3Image from '@/assets/event3.jpeg';
import event4Image from '@/assets/event4.jpeg';
import event5Image from '@/assets/event5.jpeg';
import event6Image from '@/assets/event6.jpeg';
import backgroundImage from '@/assets/background.jpeg';
import operalogo from '@/assets/operalogo.png';

export const images = {
  logo: {
    src: operalogo,
    alt: 'Quito Lírica Ópera show Logo',
  },
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
  event4: {
    src: event4Image,
    alt: 'Escena de Don Giovanni de Mozart',
    hint: 'hombre opera',
  },
  event5: {
    src: event5Image,
    alt: 'Escena de Las bodas de Fígaro de Mozart',
    hint: 'gente opera',
  },
  event6: {
    src: event6Image,
    alt: 'Escena de Tosca de Puccini',
    hint: 'mujer opera',
  },
  about: {
    src: principalImage,
    alt: 'Los fundadores de Quito Lírica Ópera show',
    hint: 'pareja opera',
  },
  banner: {
    src: bannerOperaImage,
    alt: 'Banner de Quito Lírica Ópera show',
    hint: 'opera banner',
  }
};
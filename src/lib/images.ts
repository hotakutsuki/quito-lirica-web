

import principalImage from '@/assets/principal.jpeg';
import bannerOperaImage from '@/assets/banner_opera.jpeg';
import background from '@/assets/background.jpeg'

// Gala Lirica
import galaLirica1 from '@/assets/GalaLirica/1 (1).jpg';
import galaLirica2 from '@/assets/GalaLirica/1 (2).jpg';
import galaLirica3 from '@/assets/GalaLirica/1 (3).jpg';

// Opera Brass
import operaBrass1 from '@/assets/OperaBrass/1 (1).jpg';
import operaBrass2 from '@/assets/OperaBrass/1 (2).jpg';
import operaBrass3 from '@/assets/OperaBrass/1 (3).jpg';

// Show de Opera
import showDeOpera1 from '@/assets/ShowDeOpera/1 (1).jpg';
import showDeOpera2 from '@/assets/ShowDeOpera/1 (2).jpg';
import showDeOpera3 from '@/assets/ShowDeOpera/1 (3).jpg';

// Conciertos y Montajes en vivo
import conciertos1 from '@/assets/ConciertosYMontajesEnVivo/1 (1).jpg';
import conciertos2 from '@/assets/ConciertosYMontajesEnVivo/1 (2).jpg';
import conciertos3 from '@/assets/ConciertosYMontajesEnVivo/1 (3).jpg';

// Flashmobs y Eventos Corporativos
import flashmobs1 from '@/assets/FlashmobsYEventosCorporativos/1 (1).jpg';
import flashmobs2 from '@/assets/FlashmobsYEventosCorporativos/1 (2).jpg';
import flashmobs3 from '@/assets/FlashmobsYEventosCorporativos/1 (3).jpg';

// Ceremonias Religiosas
import ceremonias1 from '@/assets/CeremoniasReligiosas/1 (1).jpg';
import ceremonias2 from '@/assets/CeremoniasReligiosas/1 (2).jpg';
import ceremonias3 from '@/assets/CeremoniasReligiosas/1 (3).jpg';


const galaLiricaImages = [
  { src: galaLirica1, alt: 'Escena de Gala Lírica 1', hint: 'pareja opera' },
  { src: galaLirica2, alt: 'Escena de Gala Lírica 2', hint: 'gente opera' },
  { src: galaLirica3, alt: 'Escena de Gala Lírica 3', hint: 'cantante opera' },
];

const operaBrassImages = [
  { src: operaBrass1, alt: 'Músicos de Opera Brass', hint: 'musicos brass' },
  { src: operaBrass2, alt: 'Concierto de Opera Brass', hint: 'concierto' },
  { src: operaBrass3, alt: 'Ensamble de vientos', hint: 'instrumentos viento' },
];

const showDeOperaImages = [
  { src: showDeOpera1, alt: 'Cena y show de ópera', hint: 'cena elegante' },
  { src: showDeOpera2, alt: 'Artista cantando entre mesas', hint: 'cantante opera' },
  { src: showDeOpera3, alt: 'Público disfrutando show', hint: 'audiencia concierto' },
];

const conciertosImages = [
  { src: conciertos1, alt: 'Orquesta en escenario', hint: 'orquesta sinfonica' },
  { src: conciertos2, alt: 'Director de orquesta', hint: 'director orquesta' },
  { src: conciertos3, alt: 'Teatro lleno', hint: 'teatro auditorio' },
];

const flashmobsImages = [
  { src: flashmobs1, alt: 'Cantantes sorprendiendo al público', hint: 'sorpresa multitud' },
  { src: flashmobs2, alt: 'Evento corporativo con ópera', hint: 'evento empresa' },
  { src: flashmobs3, alt: 'Reacción del público a flashmob', hint: 'gente sorprendida' },
];

const ceremoniasImages = [
  { src: ceremonias1, alt: 'Boda en iglesia', hint: 'boda iglesia' },
  { src: ceremonias2, alt: 'Coro en ceremonia religiosa', hint: 'coro iglesia' },
  { src: ceremonias3, alt: 'Música en vivo para boda', hint: 'musica boda' },
];


export const images = {
  hero: {
    src: background,
    alt: 'Una pareja en un escenario de ópera',
    hint: 'pareja opera',
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
  },
  eventCarousel1: galaLiricaImages,
  eventCarousel2: operaBrassImages,
  eventCarousel3: showDeOperaImages,
  eventCarousel4: conciertosImages,
  eventCarousel5: flashmobsImages,
  eventCarousel6: ceremoniasImages,
};

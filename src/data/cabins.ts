export interface Cabin {
  id: string;
  name: string;
  slug: string;
  type: 'single' | 'double';
  capacity: {
    min: number;
    max: number;
  };
  description: string;
  images: string[];
  airbnbLink: string; 
}

export const cabins: Cabin[] = [
  {
    id: '1',
    name: 'Cabin Tótem 5 (Single)',
    slug: 'cabin-a',
    type: 'single',
    capacity: {
      min: 2,
      max: 3,
    },
    description: 'Cozy single cabin with stunning lake views, perfect for a romantic getaway or a small family. Features a comfortable living area and a private balcony.',
    images: [
      '/images/cabins/cabin-totem-5.jpeg',
      '/images/cabins/cabin-a-2.jpg',
      '/images/cabins/cabin-a-3.jpg',
    ],
    airbnbLink: 'https://www.airbnb.com.co/rooms/794036223038952363?search_mode=regular_search&adults=1&source_impression_id=p3_1756340394_P3w-su6D9wqr1kM6&previous_page_section_name=1000&federated_search_id=bdfa55d5-8a5a-4443-82e7-5f1d08f396aa&guests=1', // Placeholder
  },
  {
    id: '2',
    name: 'Cabin Neia (Single)',
    slug: 'cabin-b',
    type: 'single',
    capacity: {
      min: 2,
      max: 3,
    },
    description: 'Relájate en este oasis de tranquilidad. Inspirada en Neia, oro en muisca y la leyenda del dorado, esta cabaña tiene una vista que regala amaneceres sobre el embalse de Tominé. Diseñada como una acogedora cabaña de madera, con un altillo donde se ubica la cama matrimonial. En la planta baja encontrarás sala-comedor con chimenea de leña, cocina equipada, así como un baño moderno con agua caliente. La terraza exterior es perfecta para contemplar el paisaje y disfrutar del café matutino.\n\nThe space\nCabaña con 2 espacios para 4 personas cómodamente alojadas en una cama queen y un nido doble, ducha con agua caliente, balcón con mirador al embalse y cocina completamente dotada.\n\nGuest access\nRecorre el espacio de más de 20 mil metros cuadrados de área verde con acceso a 5 minutos de plataformas de lanzamiento de parapente y programa cabalgatas de 2, 4 y 6 horas alrededor del embalse',
    images: [
      '/images/cabins/cabin-single.jpeg',
      '/images/cabins/cabin-b-2.jpg',
      '/images/cabins/cabin-b-3.jpg',
    ],
    airbnbLink: 'https://www.airbnb.com.co/rooms/1481394221718888917?search_mode=regular_search&adults=1&source_impression_id=p3_1756340138_P36Auk22uXWMjJ3_&previous_page_section_name=1000&federated_search_id=03893c9a-1108-40e1-adae-8e2d512597bf&guests=1', // Placeholder
  },
  {
    id: '3',
    name: 'Cabin Sia (Single)',
    slug: 'cabin-c',
    type: 'single',
    capacity: {
      min: 2,
      max: 3,
    },
    description: 'Experience tranquility in this beautiful single cabin, offering a serene environment and spectacular views of the surrounding mountains and lake.',
    images: [
      '/images/cabins/cabin-single.jpeg',
      '/images/cabins/cabin-c-2.jpg',
      '/images/cabins/cabin-c-3.jpg',
    ],
    airbnbLink: 'https://www.airbnb.com.co/rooms/1486922706653528967?search_mode=regular_search&adults=1&source_impression_id=p3_1756340308_P3irqJ3pJwWAhSey&previous_page_section_name=1000&federated_search_id=ff508c7f-eb26-491c-96b4-f3a07db2aeb0&guests=1', // Placeholder
  },
  {
    id: '4',
    name: 'Cabin Sue (Single)',
    slug: 'cabin-d',
    type: 'single',
    capacity: {
      min: 2,
      max: 3,
    },
    description: 'Our fourth single cabin provides a delightful retreat with modern comforts and an unbeatable view of the Guatavita lake. Perfect for a peaceful escape.',
    images: [
      '/images/cabins/cabin-single.jpeg',
      '/images/cabins/cabin-d-2.jpg',
      '/images/cabins/cabin-d-3.jpg',
    ],
    airbnbLink: 'https://www.airbnb.com.co/rooms/1492971539141233045?adults=1&source_impression_id=p3_1756340583_P3-BUgNfANHxQp5r&guests=1',
  },
  {
    id: '5',
    name: 'Cabin Gua (Double)',
    slug: 'cabin-e',
    type: 'double',
    capacity: {
      min: 4,
      max: 6,
    },
    description: 'Spacious double cabin ideal for larger families or groups. Enjoy multiple bedrooms, a generous living area, and breathtaking views of the lake.',
    images: [
      '/images/cabins/cabin-double.jpeg',
      '/images/cabins/cabin-e-2.jpg',
      '/images/cabins/cabin-e-3.jpg',
    ],
    airbnbLink: 'https://www.airbnb.com.co/rooms/1480785610428896333?search_mode=regular_search&adults=1&source_impression_id=p3_1756340228_P3CiKJGWe9zOR1UI&previous_page_section_name=1000&federated_search_id=f336bb78-be8a-4362-92f3-000cf76c0278&guests=1', // Placeholder
  },
];


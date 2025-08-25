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
  amenities: string[];
  images: string[];
}

export const cabins: Cabin[] = [
  {
    id: '1',
    name: 'Cabin A (Single)',
    slug: 'cabin-a',
    type: 'single',
    capacity: {
      min: 2,
      max: 3,
    },
    description: 'Cozy single cabin with stunning lake views, perfect for a romantic getaway or a small family. Features a comfortable living area and a private balcony.',
    amenities: [
      'Queen-size bed',
      'Private bathroom',
      'Equipped kitchenette',
      'Fireplace',
      'Private balcony with lake view',
      'Wi-Fi',
    ],
    images: [
      '/images/cabins/cabin-a-1.jpg',
      '/images/cabins/cabin-a-2.jpg',
      '/images/cabins/cabin-a-3.jpg',
    ],
  },
  {
    id: '2',
    name: 'Cabin B (Single)',
    slug: 'cabin-b',
    type: 'single',
    capacity: {
      min: 2,
      max: 3,
    },
    description: 'A charming single cabin designed for comfort and relaxation, offering panoramic views of the Guatavita lake. Ideal for couples or small groups.',
    amenities: [
      'King-size bed',
      'Private bathroom',
      'Small dining area',
      'Outdoor seating area',
      'Wi-Fi',
      'Smart TV',
    ],
    images: [
      '/images/cabins/cabin-b-1.jpg',
      '/images/cabins/cabin-b-2.jpg',
      '/images/cabins/cabin-b-3.jpg',
    ],
  },
  {
    id: '3',
    name: 'Cabin C (Single)',
    slug: 'cabin-c',
    type: 'single',
    capacity: {
      min: 2,
      max: 3,
    },
    description: 'Experience tranquility in this beautiful single cabin, offering a serene environment and spectacular views of the surrounding mountains and lake.',
    amenities: [
      'Double bed',
      'Private bathroom',
      'Coffee maker',
      'Reading nook',
      'Wi-Fi',
      'Patio access',
    ],
    images: [
      '/images/cabins/cabin-c-1.jpg',
      '/images/cabins/cabin-c-2.jpg',
      '/images/cabins/cabin-c-3.jpg',
    ],
  },
  {
    id: '4',
    name: 'Cabin D (Single)',
    slug: 'cabin-d',
    type: 'single',
    capacity: {
      min: 2,
      max: 3,
    },
    description: 'Our fourth single cabin provides a delightful retreat with modern comforts and an unbeatable view of the Guatavita lake. Perfect for a peaceful escape.',
    amenities: [
      'Queen-size bed',
      'Private bathroom',
      'Mini-fridge',
      'Desk/workspace',
      'Wi-Fi',
      'Heating',
    ],
    images: [
      '/images/cabins/cabin-d-1.jpg',
      '/images/cabins/cabin-d-2.jpg',
      '/images/cabins/cabin-d-3.jpg',
    ],
  },
  {
    id: '5',
    name: 'Cabin E (Double)',
    slug: 'cabin-e',
    type: 'double',
    capacity: {
      min: 4,
      max: 6,
    },
    description: 'Spacious double cabin ideal for larger families or groups. Enjoy multiple bedrooms, a generous living area, and breathtaking views of the lake.',
    amenities: [
      'Two queen-size beds',
      'Two private bathrooms',
      'Full kitchen',
      'Large dining area',
      'Living room with sofa bed',
      'Outdoor BBQ area',
      'Wi-Fi',
      'Smart TV',
      'Washing machine',
    ],
    images: [
      '/images/cabins/cabin-e-1.jpg',
      '/images/cabins/cabin-e-2.jpg',
      '/images/cabins/cabin-e-3.jpg',
    ],
  },
];


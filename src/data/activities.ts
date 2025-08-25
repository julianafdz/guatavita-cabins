export interface Activity {
  id: string;
  name: string;
  description: string;
  image: string;
}

export const activities: Activity[] = [
  {
    id: '1',
    name: 'Paragliding over Guatavita Lake',
    description: 'Experience an exhilarating paragliding adventure with breathtaking aerial views of the Guatavita Lake and its stunning surrounding landscapes. Certified instructors ensure a safe and unforgettable flight.',
    image: '/images/activities/paragliding.jpg',
  },
  {
    id: '2',
    name: 'Horseback Riding to the Mountains',
    description: 'Embark on a scenic horseback riding tour through picturesque trails, leading to panoramic viewpoints of the Guatavita region. Suitable for all experience levels.',
    image: '/images/activities/horseback-riding.jpg',
  },
  {
    id: '3',
    name: 'Visit Guatavita Town',
    description: 'Explore the charming colonial town of Guatavita, known for its unique architecture, artisan shops, and vibrant main square. Discover local crafts and delicious traditional food.',
    image: '/images/activities/guatavita-town.jpg',
  },
  {
    id: '4',
    name: 'Trekking in Chingaza National Natural Park',
    description: 'Discover the rich biodiversity of Chingaza National Natural Park with guided trekking tours. Encounter unique flora and fauna in high-altitude ecosystems, including the frailejones.',
    image: '/images/activities/chingaza-park.jpg',
  },
  {
    id: '5',
    name: 'Watersports on Guatavita Lake',
    description: 'Enjoy a variety of watersports on the tranquil Guatavita Lake, including kayaking, paddleboarding, and boat tours. A refreshing way to experience the lake\'s beauty.',
    image: '/images/activities/watersports.jpg',
  },
];


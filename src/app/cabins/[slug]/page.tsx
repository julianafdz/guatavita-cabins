import { cabins } from "../../../src/data/cabins";
import { notFound } from 'next/navigation';
import Image from 'next/image';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import Link from 'next/link';

interface CabinPageProps {
  params: {
    slug: string;
  };
}

export default function CabinPage({ params }: CabinPageProps) {
  const cabin = cabins.find((c) => c.slug === params.slug);

  if (!cabin) {
    notFound();
  }

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-4xl font-bold text-center text-amber-800 mb-8">{cabin.name}</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="lg:col-span-1">
          <div className="rounded-lg shadow-lg overflow-hidden">
            <Carousel showThumbs={true} infiniteLoop={true} dynamicHeight={false} className="cabin-carousel">
              {cabin.images.map((image, index) => (
                <div key={index}>
                  <Image
                    src={image}
                    alt={`${cabin.name} image ${index + 1}`}
                    width={800}
                    height={600}
                    objectFit="cover"
                    className="rounded-lg"
                  />
                </div>
              ))}
            </Carousel>
          </div>
        </div>

        <div className="lg:col-span-1">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-3xl font-semibold text-amber-700 mb-4">Description</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">{cabin.description}</p>

            <h2 className="text-3xl font-semibold text-amber-700 mb-4">Amenities</h2>
            <ul className="list-disc list-inside text-lg text-gray-700 leading-relaxed grid grid-cols-1 md:grid-cols-2 gap-2">
              {cabin.amenities.map((amenity, index) => (
                <li key={index}>{amenity}</li>
              ))}
            </ul>

            <div className="mt-6 bg-yellow-100 border-l-4 border-amber-500 text-amber-700 p-4 rounded-md">
              <p className="font-bold">Capacity:</p>
              <p>{cabin.capacity.min} - {cabin.capacity.max} people</p>
            </div>

            <div className="mt-8 text-center">
              <Link href="/booking" className="bg-amber-600 hover:bg-amber-700 text-white font-bold py-3 px-6 rounded-full text-xl transition-colors duration-300">
                Book Now
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export async function generateStaticParams() {
  return cabins.map((cabin) => ({
    slug: cabin.slug,
  }));
}

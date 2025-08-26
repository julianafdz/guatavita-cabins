'use client';

import Image from 'next/image';
import { notFound } from 'next/navigation';
import { cabins } from '../../../data/cabins';
import { IoBedOutline, IoTvOutline, IoWifi, IoRestaurantOutline, IoSnowOutline, IoWaterOutline } from 'react-icons/io5';
import { FaFire, FaDog } from 'react-icons/fa';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Carousel styles

interface CabinDetailPageProps {
  params: { slug: string };
}

const getAmenityIcon = (amenity: string) => {
  switch (amenity.toLowerCase()) {
    case 'queen-size bed':
    case 'king-size bed':
    case 'double bed':
    case 'two queen-size beds':
      return <IoBedOutline />;
    case 'private bathroom':
      return <IoWaterOutline />;
    case 'equipped kitchenette':
    case 'small dining area':
    case 'full kitchen':
    case 'large dining area':
      return <IoRestaurantOutline />;
    case 'fireplace':
      return <FaFire />;
    case 'wi-fi':
      return <IoWifi />;
    case 'mini-fridge':
      return <IoRestaurantOutline />; // Or a more specific fridge icon if available
    case 'desk/workspace':
      return <IoTvOutline />; // Placeholder, consider a desk icon if available
    case 'heating':
      return <IoSnowOutline />; // Placeholder, consider a heater icon if available
    case 'pet-friendly':
      return <FaDog />;
    default:
      return null;
  }
};

const CabinDetailPage = ({ params }: CabinDetailPageProps) => {
  const cabin = cabins.find((c) => c.slug === params.slug);

  if (!cabin) {
    notFound();
  }

  return (
    <div className="cabin-detail-container">
      <h1 className="cabin-detail-title">{cabin.name}</h1>
      <p className="cabin-detail-type">{cabin.type} Cabin</p>

      <div className="cabin-detail-image-gallery">
        <Carousel showThumbs={false} infiniteLoop={true} dynamicHeight={false} className="cabin-carousel">
          {cabin.images.map((image, index) => (
            <div key={index} className="cabin-detail-image-wrapper">
              <Image
                src={image}
                alt={`${cabin.name} image ${index + 1}`}
                layout="fill"
                objectFit="cover"
                className="cabin-detail-image"
              />
            </div>
          ))}
        </Carousel>
      </div>

      <div className="cabin-detail-content">
        <div className="cabin-detail-description-block">
          <h2 className="cabin-detail-subtitle">About This Cabin</h2>
          <p className="cabin-detail-description">{cabin.description}</p>
        </div>

        <div className="cabin-detail-amenities-block">
          <h2 className="cabin-detail-subtitle">Amenities</h2>
          <ul className="cabin-detail-amenities-list">
            {cabin.amenities.map((amenity, index) => (
              <li key={index} className="cabin-detail-amenity-item">
                {getAmenityIcon(amenity)}
                <span>{amenity}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="cabin-detail-booking-info">
          <h2 className="cabin-detail-subtitle">Capacity</h2>
          <p className="cabin-detail-capacity">
            {cabin.capacity.min} - {cabin.capacity.max} Guests
          </p>
          <button className="cabin-detail-book-button">Book Now</button>
        </div>
      </div>
    </div>
  );
};

export default CabinDetailPage;

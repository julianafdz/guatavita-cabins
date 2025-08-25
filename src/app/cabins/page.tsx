import Link from "next/link";
import { cabins } from "../../data/cabins";
import Image from "next/image";

export default function CabinsPage() {
  return (
    <div className="cabins-container page-content">
      <h1 className="cabins-title">Our Cozy Cabins</h1>
      <p className="cabins-description page-description">
        Discover your perfect mountain retreat among our charming cabins, each offering splendid views of the Guatavita lake.
      </p>

      <div className="cabins-grid">
        {cabins.map((cabin) => (
          <Link key={cabin.id} href={`/cabins/${cabin.slug}`} className="cabin-card-link">
            <div className="cabin-card">
              <div className="cabin-image-wrapper">
                <Image 
                  src={cabin.images[0] || '/images/placeholder.jpg'}
                  alt={cabin.name}
                  layout="fill"
                  objectFit="cover"
                  className="cabin-image"
                />
              </div>
              <div className="cabin-card-content">
                <h2 className="cabin-name">{cabin.name}</h2>
                <p className="cabin-description-short">{cabin.description.substring(0, 100)}...</p>
                <div className="cabin-details-row">
                  <span className="cabin-capacity">Capacity: {cabin.capacity.min}-{cabin.capacity.max} people</span>
                  <button className="view-details-button">
                    View Details
                  </button>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

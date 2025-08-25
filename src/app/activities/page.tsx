import Image from "next/image";
import { activities } from "../../data/activities";

export default function ActivitiesPage() {
  return (
    <div className="activities-container page-content">
      <h1 className="activities-title">Activities in Guatavita</h1>
      <p className="activities-description-intro page-description">
        Immerse yourself in the natural beauty and cultural richness of Guatavita with a variety of exciting activities.
      </p>

      <div className="activities-grid">
        {activities.map((activity) => (
          <div key={activity.id} className="activity-card">
            <div className="activity-image-wrapper">
              <Image 
                src={activity.image}
                alt={activity.name}
                layout="fill"
                objectFit="cover"
                className="activity-image"
              />
            </div>
            <div className="activity-card-content">
              <h2 className="activity-name">{activity.name}</h2>
              <p className="activity-description">{activity.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

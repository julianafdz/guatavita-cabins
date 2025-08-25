import Image from "next/image";

export default function Home() {
  return (
    <div className="full-page-scroll-container">

      {/* Welcome Section (Full-width image behind, text centered) */}
      <section className="hero-section-alt">
        <div className="hero-background-image-alt">
          <Image 
            src="/images/cabins/cabin-e-1.jpeg" /* Placeholder image for hero */
            alt="Cozy Cabin with Lake View"
            layout="fill"
            objectFit="cover"
            quality={100}
          />
        </div>
        <div className="hero-content-alt">
          <h1 className="hero-title-alt">Welcome to Guatavita Cabins</h1>
        </div>
      </section>

      {/* Discover Guatavita Cabins Section: Text Left, Image Right */}
      <section className="section-full-height">
        <div className="section-content-wrapper">
          <div className="section-text-block">
            <h2 className="section-title">Discover Guatavita Cabins</h2>
            <p className="section-paragraph">
              Nestled in the breathtaking mountains of Guatavita, Colombia, our cabins offer an unparalleled escape with splendid views of the artificial lake. 
              Immerse yourself in nature's tranquility while enjoying the comfort and warmth of our cozy accommodations. 
              Whether you're seeking a romantic getaway, a family adventure, or a peaceful retreat, Guatavita Cabins is your perfect destination.
            </p>
          </div>
          <div className="section-image-block">
            <Image 
              src="/images/cabins/cabin-a-1.jpeg" /* Placeholder image */
              alt="Discover Guatavita"
              layout="fill"
              objectFit="cover"
              quality={80}
            />
          </div>
        </div>
      </section>

      {/* How to Arrive Section: Image Left, Text Right */}
      <section className="section-full-height section-reverse">
        <div className="section-content-wrapper">
          <div className="section-image-block">
            <Image 
              src="/images/cabins/cabin-b-1.jpeg" /* Placeholder image */
              alt="How to Arrive"
              layout="fill"
              objectFit="cover"
              quality={80}
            />
          </div>
          <div className="section-text-block">
            <h2 className="section-title">How to Arrive</h2>
            <p className="section-paragraph-mb">
              Our cabins are conveniently located near the town of Guatavita. Here are some instructions on how to reach us:
            </p>
            <ul className="section-list">
              <li><strong>From Bogotá:</strong> Take the Autopista Norte (North Highway) towards Tunja. At the Briceño roundabout, take the exit towards Sopó/Guatavita. Continue on this road until you reach the town of Guatavita. From there, follow the signs to the Guatavita Lake and our cabins.</li>
              <li><strong>By Public Transport:</strong> Buses to Guatavita depart regularly from the Portal del Norte bus station in Bogotá. Once in Guatavita, taxis or local transport can take you to the cabins.</li>
            </ul>
            <p className="section-paragraph-mt">
              Detailed directions and GPS coordinates will be provided upon booking confirmation.
            </p>
          </div>
        </div>
      </section>

      {/* Surroundings & Nearby Attractions Section: Text Left, Image Right */}
      <section className="section-full-height">
        <div className="section-content-wrapper">
          <div className="section-text-block">
            <h2 className="section-title">Surroundings & Nearby Attractions</h2>
            <p className="section-paragraph-mb">
              The area around Guatavita offers a rich blend of natural beauty, cultural experiences, and culinary delights. Here are a few things you can find:
            </p>
            <ul className="section-list">
              <li><strong>Restaurants:</strong> Explore charming local restaurants in Guatavita town offering traditional Colombian cuisine and international dishes.</li>
              <li><strong>Handicraft Shops:</strong> Discover unique artisanal crafts and souvenirs in the colorful streets of Guatavita.</li>
              <li><strong>Guatavita Lake:</strong> Visit the famous Guatavita Lake, known for its Muisca legend of El Dorado. Enjoy boat rides or simply admire the stunning views.</li>
              <li><strong>Chingaza National Natural Park:</strong> A short drive away, this park offers incredible hiking trails and diverse wildlife.</li>
            </ul>
          </div>
          <div className="section-image-block">
            <Image 
              src="/images/cabins/cabin-c-1.jpeg" /* Placeholder image */
              alt="Surroundings and Attractions"
              layout="fill"
              objectFit="cover"
              quality={80}
            />
          </div>
        </div>
      </section>

    </div>
  );
}

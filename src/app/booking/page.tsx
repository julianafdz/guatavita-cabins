import Link from "next/link";

export default function BookingPage() {
  return (
    <div className="booking-container page-content">
      <h1 className="booking-title">Book Your Stay</h1>
      <p className="booking-intro-description page-description">
        Ready to experience the magic of Guatavita? Choose your preferred booking method below.
      </p>

      <div className="booking-methods-grid">
        <div className="booking-card">
          <h2 className="booking-method-title">Direct Booking via Google Form</h2>
          <p className="booking-method-description">
            For direct reservations and personalized assistance, please fill out our Google Booking Form. We will get back to you shortly to confirm your booking.
          </p>
          <Link
            href="https://forms.gle/YOUR_GOOGLE_FORM_LINK_HERE" // Replace with your actual Google Form link
            target="_blank"
            rel="noopener noreferrer"
            className="booking-form-button"
          >
            Fill Out Booking Form
          </Link>
        </div>

        <div className="booking-card">
          <h2 className="booking-method-title">Book on Airbnb & Booking.com</h2>
          <p className="booking-method-description">
            You can also find our cabins listed on popular platforms like Airbnb and Booking.com for convenient booking options.
          </p>
          <div className="booking-platform-buttons">
            <Link
              href="https://www.airbnb.com/your-listing" // Replace with your Airbnb listing link
              target="_blank"
              rel="noopener noreferrer"
              className="airbnb-button"
            >
              Find us on Airbnb
            </Link>
            <Link
              href="https://www.booking.com/your-listing" // Replace with your Booking.com listing link
              target="_blank"
              rel="noopener noreferrer"
              className="bookingcom-button"
            >
              Find us on Booking.com
            </Link>
          </div>
        </div>
      </div>

      <section className="booking-info-section">
        <h2 className="booking-info-title">Booking Information</h2>
        <p className="booking-info-paragraph page-description">
          Please note that prices and availability may vary between direct bookings and external platforms. For any special requests or long-term stays, please contact us directly.
        </p>
        <p className="booking-info-paragraph-mt page-description">
          We look forward to hosting you at Guatavita Cabins!
        </p>
      </section>
    </div>
  );
}

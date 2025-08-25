export default function Footer() {
  return (
    <footer className="footer-container">
      <div className="footer-content-wrapper">
        <p className="footer-text">&copy; {new Date().getFullYear()} Guatavita Cabins. All rights reserved.</p>
        <p className="footer-text">Contact us: info@guatavitacabins.com | +57 123 456 7890</p>
      </div>
    </footer>
  );
}


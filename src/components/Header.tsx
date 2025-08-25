import Link from 'next/link';

export default function Header() {
  return (
    <header className="header-container">
      <nav className="header-nav">
        <Link href="/" className="header-logo">
          Guatavita Cabins
        </Link>
        <ul className="nav-links">
          <li>
            <Link href="/" className="nav-link">
              Welcome
            </Link>
          </li>
          <li>
            <Link href="/cabins" className="nav-link">
              Cabins
            </Link>
          </li>
          <li>
            <Link href="/activities" className="nav-link">
              Activities
            </Link>
          </li>
          <li>
            <Link href="/booking" className="nav-link">
              Booking
            </Link>
          </li>
        </ul>
        <button className="menu-icon">
          ☰
        </button>
      </nav>
    </header>
  );
}


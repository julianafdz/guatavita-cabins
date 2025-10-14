'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="header-container">
      <nav className="header-nav">
        <Link href="/" className="header-logo" onClick={closeMobileMenu}>
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
        <button 
          className="menu-icon"
          onClick={toggleMobileMenu}
          aria-label="Toggle mobile menu"
        >
          {isMobileMenuOpen ? '✕' : '☰'}
        </button>
      </nav>
      
      {/* Mobile Navigation Menu */}
      <div className={`mobile-nav ${isMobileMenuOpen ? 'active' : ''}`}>
        <ul className="mobile-nav-links">
          <li>
            <Link href="/" className="mobile-nav-link" onClick={closeMobileMenu}>
              Welcome
            </Link>
          </li>
          <li>
            <Link href="/cabins" className="mobile-nav-link" onClick={closeMobileMenu}>
              Cabins
            </Link>
          </li>
          <li>
            <Link href="/activities" className="mobile-nav-link" onClick={closeMobileMenu}>
              Activities
            </Link>
          </li>
          <li>
            <Link href="/booking" className="mobile-nav-link" onClick={closeMobileMenu}>
              Booking
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
}


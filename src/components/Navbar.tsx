import React from 'react'

// components/Navbar.tsx
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <Link href="/">LearnHub</Link>
      </div>
      <ul className="navLinks">
        <li><Link href="/">Home</Link></li>
        <li><Link href="/about">About</Link></li>
        <li><Link href="/courses">Courses</Link></li>
        <li><Link href="/contact">Contact</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
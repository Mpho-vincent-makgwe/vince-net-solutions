import React from 'react';
import Link from 'next/link';

const NavBar: React.FC = () => {
  return (
    <nav className="bg-primary text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-lg font-bold">
          <Link href="/">VinceNet Solutions</Link>
        </div>
        <div>
          <Link href="/" className="px-4 py-2 hover:text-accent transition">
            Home
          </Link>
          <Link href="/about" className="px-4 py-2 hover:text-accent transition">
            About
          </Link>
          <Link href="/projects" className="px-4 py-2 hover:text-accent transition">
            Projects
          </Link>
          <Link href="/contact" className="px-4 py-2 hover:text-accent transition">
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;

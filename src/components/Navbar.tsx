/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import React from 'react';

interface NavbarProps {
  logo: string;
  links: {
    title: string;
    href: string;
  }[];
}

const Navbar: React.FC<NavbarProps> = ({ logo, links }) => {
  return (
    <nav style={{ backgroundColor: '#2C91D4', display: 'flex', alignItems: 'center', padding: '1rem' }}>
      <img src={logo} alt="Logo" style={{ marginRight: 'auto' }} />
      <ul style={{ display: 'flex', listStyle: 'none', margin: 0 }}>
        {links.map((link) => (
        <li style={{ marginLeft: '1rem' }} key={link.href}>
            <Link href={link.href} style={{ fontFamily: 'Roboto Mono', fontSize: '18px' }}>
              {link.title}
            </Link>
        </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
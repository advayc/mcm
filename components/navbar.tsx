import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';

interface NavbarProps {
  showAnimation: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ showAnimation }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  // MCM Navigation Items
  const navItems = [
    { label: 'About', href: '/about' },
    { label: 'Workshops', href: '/workshops' },
    { label: 'Team', href: '/team' },
    { label: 'FAQ', href: '/faq' },
    { label: 'Contact', href: '/contact' },
    { label: 'Get Involved', href: '/get-involved' },
  ];

  return (
    <header className="relative bg-background border-b border-border z-50">
      <nav className="max-w-6xl mx-auto flex items-center justify-between px-4 py-4">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
            <span className="text-primary-foreground font-bold">MCM</span>
          </div>
          <span className="font-bold text-lg hidden sm:inline">Making Cents of Math</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-1">
          {navItems.map((item, idx) => (
            <Link
              key={idx}
              href={item.href}
              className="px-3 py-2 text-foreground hover:bg-accent rounded-md transition-colors font-medium"
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden p-2 hover:bg-accent rounded-md transition-colors"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Dropdown Menu */}
      {isMenuOpen && (
        <div className="md:hidden border-t border-border bg-background">
          <div className="flex flex-col p-4 space-y-2 max-w-6xl mx-auto">
            {navItems.map((item, idx) => (
              <Link
                key={idx}
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
                className="px-3 py-2 text-foreground hover:bg-accent rounded-md transition-colors font-medium"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;

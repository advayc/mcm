import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';
import { ThemeToggle } from './theme-toggle';

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
      <nav className="w-full flex items-center justify-center px-6 py-6">
        <div className="flex items-center gap-8">
          {/* Logo */}
          <Link href="/" className="flex items-center group">
            <img
              src="/logo.jpg"
              alt="MCM Logo"
              className="h-10 w-auto object-contain transition-transform duration-300 group-hover:rotate-360"
            />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-2">
            {navItems.map((item, idx) => (
              <Link
                key={idx}
                href={item.href}
                className="px-4 py-2 text-foreground rounded-md transition-all duration-200 font-bold hover:scale-105"
              >
                {item.label}
              </Link>
            ))}
            <ThemeToggle />
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-2 ml-auto">
            <ThemeToggle />
            <button
              onClick={toggleMenu}
              className="p-2 hover:bg-accent rounded-md transition-colors"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Dropdown Menu */}
      {isMenuOpen && (
        <div className="md:hidden border-t border-border bg-background">
          <div className="flex flex-col p-6 space-y-4 w-full">
            {navItems.map((item, idx) => (
              <Link
                key={idx}
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
                className="px-4 py-3 text-foreground hover:bg-accent hover:text-accent-foreground rounded-md transition-all duration-200 font-bold hover:translate-x-1"
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

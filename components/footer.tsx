import Link from "next/link";
import { Instagram } from "lucide-react";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-muted/50 dark:bg-black/50 text-foreground border-t border-border/40 py-16 w-full mt-auto">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-12 md:gap-8 mb-12">
          {/* About Section */}
          <div className="flex flex-col space-y-4">
            <h4 className="font-bold text-base tracking-wide text-foreground mb-1">About</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/about" className="text-muted-foreground hover:text-foreground transition-colors duration-200">
                  Who We Are
                </Link>
              </li>
              <li>
                <Link href="/about#our-mission" className="text-muted-foreground hover:text-foreground transition-colors duration-200">
                  Our Mission
                </Link>
              </li>
              <li>
                <Link href="/workshops" className="text-muted-foreground hover:text-foreground transition-colors duration-200">
                  Workshops
                </Link>
              </li>
            </ul>
          </div>

          {/* Team Section */}
          <div className="flex flex-col space-y-4">
            <h4 className="font-bold text-base tracking-wide text-foreground mb-1">Team</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/team" className="text-muted-foreground hover:text-foreground transition-colors duration-200">
                  Our Team
                </Link>
              </li>
              <li>
                <Link href="/about#our-executives" className="text-muted-foreground hover:text-foreground transition-colors duration-200">
                  Executives
                </Link>
              </li>
              <li>
                <Link href="/get-involved" className="text-muted-foreground hover:text-foreground transition-colors duration-200">
                  Join Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Events Section */}
          <div className="flex flex-col space-y-4">
            <h4 className="font-bold text-base tracking-wide text-foreground mb-1">Events</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/workshops" className="text-muted-foreground hover:text-foreground transition-colors duration-200">
                  All Events
                </Link>
              </li>
              <li>
                <Link href="/get-involved" className="text-muted-foreground hover:text-foreground transition-colors duration-200">
                  Book Workshop
                </Link>
              </li>
            </ul>
          </div>

          {/* Support Section */}
          <div className="flex flex-col space-y-4">
            <h4 className="font-bold text-base tracking-wide text-foreground mb-1">Support</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/faq" className="text-muted-foreground hover:text-foreground transition-colors duration-200">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-muted-foreground hover:text-foreground transition-colors duration-200">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/get-involved" className="text-muted-foreground hover:text-foreground transition-colors duration-200">
                  Volunteer
                </Link>
              </li>
            </ul>
          </div>

          {/* Connect Section */}
          <div className="flex flex-col space-y-4">
            <h4 className="font-bold text-base tracking-wide text-foreground mb-1">Connect</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a 
                  href="https://www.instagram.com/making.cents.of.math/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground transition-colors duration-200 flex items-center gap-2"
                >
                  <Instagram size={14} className="flex-shrink-0" />
                  Instagram
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="pt-8 border-t border-border/40">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
            <p className="text-muted-foreground">
              © {currentYear} <span className="text-foreground font-semibold">Making Cents of Math</span>. All rights reserved.
            </p>
            <div className="flex items-center gap-6 text-muted-foreground">
              <Link href="/privacy-policy" className="hover:text-foreground transition-colors duration-200">
                Privacy Policy
              </Link>
              <span className="text-border">|</span>
              <Link href="/terms-and-conditions" className="hover:text-foreground transition-colors duration-200">
                Terms & Conditions
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

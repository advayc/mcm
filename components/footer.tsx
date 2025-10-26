import Link from "next/link";
import { Mail, Instagram, Linkedin } from "lucide-react";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-muted text-foreground py-12 w-full">
      <div className="max-w-6xl mx-auto px-4">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* About Section */}
          <div className="flex flex-col">
            <h4 className="font-bold text-lg mb-4">About MCM</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="hover:text-primary transition-colors">
                  Our Mission
                </Link>
              </li>
              <li>
                <Link href="/workshops" className="hover:text-primary transition-colors">
                  Our Workshops
                </Link>
              </li>
              <li>
                <Link href="/team" className="hover:text-primary transition-colors">
                  Our Team
                </Link>
              </li>
            </ul>
          </div>

          {/* Community Section */}
          <div className="flex flex-col">
            <h4 className="font-bold text-lg mb-4">Get Involved</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/get-involved" className="hover:text-primary transition-colors">
                  Book a Workshop
                </Link>
              </li>
              <li>
                <Link href="/get-involved" className="hover:text-primary transition-colors">
                  Volunteer
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-primary transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Support Section */}
          <div className="flex flex-col">
            <h4 className="font-bold text-lg mb-4">Support</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/faq" className="hover:text-primary transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/privacy-policy" className="hover:text-primary transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms-and-conditions" className="hover:text-primary transition-colors">
                  Terms & Conditions
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Section */}
          <div className="flex flex-col">
            <h4 className="font-bold text-lg mb-4">Connect</h4>
            <ul className="space-y-2">
              <li>
                <a 
                  href="mailto:contact@makingcentsofmath.com" 
                  className="hover:text-primary transition-colors flex items-center gap-2"
                >
                  <Mail size={16} />
                  Email
                </a>
              </li>
              <li>
                <a 
                  href="https://instagram.com/makingcentsofmath" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors flex items-center gap-2"
                >
                  <Instagram size={16} />
                  Instagram
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              © {currentYear} <span className="text-primary font-bold">Making Cents of Math</span>. All Rights Reserved.
            </p>
            <div className="flex gap-4 text-sm text-muted-foreground">
              <Link href="/privacy-policy" className="hover:text-primary transition-colors">
                Privacy
              </Link>
              <span>•</span>
              <Link href="/terms-and-conditions" className="hover:text-primary transition-colors">
                Terms
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

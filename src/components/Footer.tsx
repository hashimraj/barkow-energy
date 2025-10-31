import { Link } from "react-router-dom";
import { Sun, Mail, Phone, MapPin, Facebook, Linkedin, Instagram } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center">
                <Sun className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-poppins font-bold text-xl">Barkow Energy</h3>
            </div>
            <p className="text-sm text-primary-foreground/80">
              Powering a sustainable future through clean, renewable energy solutions.
            </p>
            <div className="flex gap-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-accent transition-smooth"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-accent transition-smooth"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-accent transition-smooth"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-poppins font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-sm hover:text-accent transition-smooth">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-sm hover:text-accent transition-smooth">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-sm hover:text-accent transition-smooth">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/projects" className="text-sm hover:text-accent transition-smooth">
                  Projects
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-sm hover:text-accent transition-smooth">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-poppins font-semibold text-lg mb-4">Our Services</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              <li>Solar Panel Installation</li>
              <li>Battery Storage Solutions</li>
              <li>Energy Consulting</li>
              <li>System Maintenance</li>
              <li>Energy Audits</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-poppins font-semibold text-lg mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-sm">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>1104 Norman Way, Birmingham, AL 35242, USA</span>
              </li>
              <li className="flex items-center gap-2 text-sm">
                <Phone className="w-4 h-4 flex-shrink-0" />
                <a href="tel:+12055550198" className="hover:text-accent transition-smooth">
                  +1 (205) 555-0198
                </a>
              </li>
              <li className="flex items-center gap-2 text-sm">
                <Mail className="w-4 h-4 flex-shrink-0" />
                <a href="mailto:info@barkowenergy.com" className="hover:text-accent transition-smooth">
                  info@barkowenergy.com
                </a>
              </li>
            </ul>
            <div className="mt-4 text-sm text-primary-foreground/80">
              <p className="font-semibold">Business Hours:</p>
              <p>Mon - Fri: 8:00 AM - 6:00 PM</p>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center text-sm text-primary-foreground/60">
          <p>© {currentYear} Barkow Energy. All rights reserved.</p>
          <p className="mt-1">Website powered by Barkow Energy Digital Team.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

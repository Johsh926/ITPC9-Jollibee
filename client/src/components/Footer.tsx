import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, MapPin, Phone, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-jollibee-brown text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                <span className="text-xl">🐝</span>
              </div>
              <span className="font-heading text-2xl font-bold">Jollibee</span>
            </div>
            <p className="text-white/70 text-sm leading-relaxed">
              Bringing joy to every Filipino through our crispylicious, juicylicious Chickenjoy and more delicious offerings since 1978.
            </p>
            <div className="flex gap-4 mt-6">
              <a href="#" className="p-2 bg-white/10 rounded-full hover:bg-primary transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="p-2 bg-white/10 rounded-full hover:bg-primary transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="p-2 bg-white/10 rounded-full hover:bg-primary transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-bold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {['Menu', 'Locations', 'About Us', 'Careers', 'Franchise'].map((link) => (
                <li key={link}>
                  <Link
                    to={`/${link.toLowerCase().replace(' ', '-')}`}
                    className="text-white/70 hover:text-secondary transition-colors text-sm"
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-heading font-bold text-lg mb-4">Support</h4>
            <ul className="space-y-3">
              {['FAQs', 'Delivery Info', 'Track Order', 'Privacy Policy', 'Terms of Service'].map((link) => (
                <li key={link}>
                  <Link
                    to="#"
                    className="text-white/70 hover:text-secondary transition-colors text-sm"
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading font-bold text-lg mb-4">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-secondary shrink-0 mt-0.5" />
                <span className="text-white/70 text-sm">
                  10/F Jollibee Plaza, Ortigas Center, Pasig City, Metro Manila
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-secondary" />
                <span className="text-white/70 text-sm">8-7000</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-secondary" />
                <span className="text-white/70 text-sm">customercare@jollibee.com.ph</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-10 pt-6 text-center">
          <p className="text-white/50 text-sm">
            © {new Date().getFullYear()} Jollibee Clone - School Project. Not affiliated with Jollibee Foods Corporation.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

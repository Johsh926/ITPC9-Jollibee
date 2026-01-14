import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ShoppingCart, Heart, User, Menu as MenuIcon, X, MapPin } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import Cart from './Cart';

const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { cartCount } = useCart();
  const location = useLocation();

  const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/menu', label: 'Menu' },
    { to: '/locations', label: 'Locations' },
    { to: '/favorites', label: 'Favorites' },
    { to: '/orders', label: 'Orders' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="sticky top-0 z-50 bg-card/95 backdrop-blur-md border-b border-border shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <div className="w-10 h-10 md:w-12 md:h-12 bg-primary rounded-full flex items-center justify-center">
              <span className="text-xl md:text-2xl">🐝</span>
            </div>
            <span className="font-heading text-xl md:text-2xl font-bold text-primary">
              Jollibee
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                  isActive(link.to)
                    ? 'bg-primary text-primary-foreground'
                    : 'text-foreground hover:bg-muted hover:text-primary'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Right Actions */}
          <div className="flex items-center gap-2">
            {/* Cart */}
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="relative">
                  <ShoppingCart className="h-5 w-5" />
                  {cartCount > 0 && (
                    <span className="absolute -top-1 -right-1 bg-secondary text-secondary-foreground text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center animate-scale-in">
                      {cartCount}
                    </span>
                  )}
                </Button>
              </SheetTrigger>
              <SheetContent className="w-full sm:max-w-lg p-0">
                <Cart />
              </SheetContent>
            </Sheet>

            {/* Login */}
            <Link to="/login">
              <Button variant="ghost" size="icon" className="hidden sm:flex">
                <User className="h-5 w-5" />
              </Button>
            </Link>

            {/* Mobile Menu Toggle */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <MenuIcon className="h-5 w-5" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="md:hidden py-4 border-t border-border animate-fade-in">
            <div className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-4 py-3 rounded-lg font-medium transition-all duration-200 ${
                    isActive(link.to)
                      ? 'bg-primary text-primary-foreground'
                      : 'text-foreground hover:bg-muted'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                to="/login"
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-3 rounded-lg font-medium text-foreground hover:bg-muted flex items-center gap-2"
              >
                <User className="h-4 w-4" />
                Login / Sign Up
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Navbar;

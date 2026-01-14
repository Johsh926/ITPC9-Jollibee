import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Clock, Truck, Star, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import MenuCard from '@/components/MenuCard';
import { getFeaturedItems, menuCategories } from '@/data/menuData';
import heroImage from '@/assets/heroImage.jpg';

const Home: React.FC = () => {
  const featuredItems = getFeaturedItems();

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-hero overflow-hidden">
        <div className="absolute inset-0 bg-black/20" />
        <div className="container mx-auto px-4 py-16 md:py-24 relative z-10">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div className="text-white space-y-6">
              <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium">
                <span className="animate-bounce-subtle">🍗</span>
                New! Spicy Chickenjoy is here
              </div>
              <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Bida ang Sarap!
                <span className="block text-secondary mt-2">Crispylicious, Juicylicious</span>
              </h1>
              <p className="text-lg md:text-xl text-white/90 max-w-lg">
                Experience the taste that millions of Filipinos love. Order your favorite Jollibee meals now and get them delivered hot and fresh!
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/menu">
                  <Button size="lg" className="bg-secondary text-secondary-foreground hover:bg-secondary/90 font-heading text-lg px-8 gap-2">
                    Order Now
                    <ArrowRight className="h-5 w-5" />
                  </Button>
                </Link>
                <Link to="/menu">
                  <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 font-heading text-lg px-8">
                    View Menu
                  </Button>
                </Link>
              </div>
              {/* Stats */}
              <div className="flex gap-8 pt-6">
                <div>
                  <p className="font-heading text-3xl font-bold text-secondary">1,500+</p>
                  <p className="text-white/70 text-sm">Stores Worldwide</p>
                </div>
                <div>
                  <p className="font-heading text-3xl font-bold text-secondary">45+</p>
                  <p className="text-white/70 text-sm">Years of Joy</p>
                </div>
                <div>
                  <p className="font-heading text-3xl font-bold text-secondary">4.8</p>
                  <p className="text-white/70 text-sm flex items-center gap-1">
                    <Star className="h-3 w-3 fill-secondary text-secondary" />
                    Rating
                  </p>
                </div>
              </div>
            </div>
            <div className="relative hidden lg:block">
              <div className="relative animate-float">
                <img
                  src={heroImage}
                  alt="Jollibee Favorites"
                  className="w-full h-auto rounded-3xl shadow-2xl"
                />
                {/* Floating Badge */}
                <div className="absolute -bottom-4 -left-4 bg-white rounded-2xl p-4 shadow-lg">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center">
                      <Truck className="h-6 w-6 text-secondary-foreground" />
                    </div>
                    <div>
                      <p className="font-heading font-bold text-foreground">Free Delivery</p>
                      <p className="text-sm text-muted-foreground">Orders over ₱500</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Wave Decoration */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 50L48 45.7C96 41.3 192 32.7 288 32.3C384 32 480 40 576 48.7C672 57.3 768 66.7 864 66.3C960 66 1056 56 1152 48.7C1248 41.3 1344 36.7 1392 34.3L1440 32V100H1392C1344 100 1248 100 1152 100C1056 100 960 100 864 100C768 100 672 100 576 100C480 100 384 100 288 100C192 100 96 100 48 100H0V50Z" fill="hsl(var(--background))" />
          </svg>
        </div>
      </section>

      {/* Features */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: <Clock className="h-8 w-8" />, title: 'Fast Delivery', desc: '30 minutes or less' },
              { icon: <Truck className="h-8 w-8" />, title: 'Free Shipping', desc: 'On orders over ₱500' },
              { icon: <Star className="h-8 w-8" />, title: 'Best Quality', desc: 'Fresh ingredients always' },
            ].map((feature, idx) => (
              <div key={idx} className="flex items-center gap-4 bg-card p-6 rounded-2xl shadow-card">
                <div className="w-16 h-16 bg-primary/10 text-primary rounded-2xl flex items-center justify-center shrink-0">
                  {feature.icon}
                </div>
                <div>
                  <h3 className="font-heading font-bold text-lg">{feature.title}</h3>
                  <p className="text-muted-foreground text-sm">{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-3">
              Explore Our Menu
            </h2>
            <p className="text-muted-foreground max-w-md mx-auto">
              Browse through our delicious categories
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-4">
            {menuCategories.map((cat) => (
              <Link
                key={cat.id}
                to={`/menu?category=${cat.id}`}
                className="bg-card p-4 rounded-2xl text-center hover:shadow-primary transition-all duration-300 hover:-translate-y-1 group"
              >
                <div className="text-4xl mb-2 group-hover:scale-110 transition-transform">{cat.icon}</div>
                <p className="font-heading font-semibold text-sm text-foreground">{cat.name}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Items */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-10">
            <div>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-2">
                Fan Favorites
              </h2>
              <p className="text-muted-foreground">The most loved items by our customers</p>
            </div>
            <Link to="/menu" className="hidden md:flex items-center gap-2 text-primary font-medium hover:underline">
              View All Menu
              <ChevronRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredItems.map((item) => (
              <MenuCard key={item.id} item={item} />
            ))}
          </div>
          <div className="mt-8 text-center md:hidden">
            <Link to="/menu">
              <Button variant="outline" className="gap-2">
                View All Menu
                <ChevronRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-hero">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Order?
          </h2>
          <p className="text-white/90 mb-8 max-w-md mx-auto">
            Download our app or order online for the best Jollibee experience!
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/menu">
              <Button size="lg" className="bg-secondary text-secondary-foreground hover:bg-secondary/90 font-heading px-8">
                Order Online
              </Button>
            </Link>
            <Link to="/locations">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 font-heading px-8">
                Find a Store
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
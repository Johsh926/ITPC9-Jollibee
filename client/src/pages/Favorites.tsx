import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, ShoppingBag } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import MenuCard from '@/components/MenuCard';
import { Button } from '@/components/ui/button';
import { menuItems } from '@/data/menuData';

const Favorites: React.FC = () => {
  const { favorites } = useCart();

  const favoriteItems = menuItems.filter(item => favorites.includes(item.id));

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <section className="bg-gradient-hero py-12 md:py-16">
        <div className="container mx-auto px-4 text-center">
          <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
            <Heart className="h-8 w-8 text-white fill-white" />
          </div>
          <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Your Favorites
          </h1>
          <p className="text-white/90 max-w-md mx-auto">
            Items you've loved and saved for later
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          {favoriteItems.length === 0 ? (
            <div className="text-center py-16">
              <div className="w-24 h-24 bg-muted rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="h-12 w-12 text-muted-foreground" />
              </div>
              <h3 className="font-heading text-xl font-semibold mb-2">No favorites yet</h3>
              <p className="text-muted-foreground mb-6">
                Start adding items to your favorites by clicking the heart icon!
              </p>
              <Link to="/menu">
                <Button className="bg-primary hover:bg-primary/90 gap-2">
                  <ShoppingBag className="h-4 w-4" />
                  Browse Menu
                </Button>
              </Link>
            </div>
          ) : (
            <>
              <p className="text-muted-foreground mb-6">
                You have {favoriteItems.length} favorite item{favoriteItems.length !== 1 ? 's' : ''}
              </p>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {favoriteItems.map((item) => (
                  <MenuCard key={item.id} item={item} />
                ))}
              </div>
            </>
          )}
        </div>
      </section>
    </div>
  );
};

export default Favorites;
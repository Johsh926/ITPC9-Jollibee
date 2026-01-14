import React from 'react';
import { Heart, Plus } from 'lucide-react';
import { MenuItem } from '@/context/CartContext';
import { useCart } from '@/context/CartContext';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';

interface MenuCardProps {
  item: MenuItem;
}

const MenuCard: React.FC<MenuCardProps> = ({ item }) => {
  const { addToCart, toggleFavorite, isFavorite } = useCart();
  const favorite = isFavorite(item.id);

  const handleAddToCart = () => {
    addToCart(item);
    toast.success(`${item.name} added to cart!`, {
      description: `₱${item.price} × 1`,
    });
  };

  return (
    <div className="group bg-card rounded-2xl shadow-card overflow-hidden transition-all duration-300 hover:shadow-primary hover:-translate-y-1">
      {/* Image */}
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <button
          onClick={() => toggleFavorite(item.id)}
          className={`absolute top-3 right-3 p-2 rounded-full transition-all duration-200 ${
            favorite
              ? 'bg-primary text-primary-foreground'
              : 'bg-card/80 backdrop-blur-sm text-muted-foreground hover:text-primary'
          }`}
        >
          <Heart className={`h-5 w-5 ${favorite ? 'fill-current' : ''}`} />
        </button>
        {/* Price Badge */}
        <div className="absolute bottom-3 left-3 bg-secondary text-secondary-foreground font-heading font-bold px-3 py-1 rounded-full text-sm">
          ₱{item.price}
        </div>
      </div>

      {/* Content */}
      <div className="p-4">
        <h3 className="font-heading font-bold text-lg text-foreground mb-1 truncate">
          {item.name}
        </h3>
        <p className="text-muted-foreground text-sm line-clamp-2 mb-4">
          {item.description}
        </p>
        <Button
          onClick={handleAddToCart}
          className="w-full bg-primary hover:bg-primary/90 font-medium gap-2"
        >
          <Plus className="h-4 w-4" />
          Add to Cart
        </Button>
      </div>
    </div>
  );
};

export default MenuCard;
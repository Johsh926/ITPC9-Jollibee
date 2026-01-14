import React from 'react';
import { Link } from 'react-router-dom';
import { Minus, Plus, Trash2, ShoppingBag } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { Button } from '@/components/ui/button';
import { SheetHeader, SheetTitle } from '@/components/ui/sheet';
import { Separator } from '@/components/ui/separator';

const Cart: React.FC = () => {
  const { cartItems, updateQuantity, removeFromCart, cartTotal, clearCart } = useCart();

  if (cartItems.length === 0) {
    return (
      <div className="flex flex-col h-full">
        <SheetHeader className="p-6 border-b border-border">
          <SheetTitle className="font-heading text-2xl flex items-center gap-2">
            <ShoppingBag className="h-6 w-6 text-primary" />
            Your Cart
          </SheetTitle>
        </SheetHeader>
        <div className="flex-1 flex flex-col items-center justify-center p-6 text-center">
          <div className="w-24 h-24 bg-muted rounded-full flex items-center justify-center mb-4">
            <ShoppingBag className="h-12 w-12 text-muted-foreground" />
          </div>
          <h3 className="font-heading text-xl font-semibold mb-2">Your cart is empty</h3>
          <p className="text-muted-foreground mb-6">
            Looks like you haven't added any items yet!
          </p>
          <Link to="/menu">
            <Button className="bg-primary hover:bg-primary/90">
              Browse Menu
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col h-full">
      <SheetHeader className="p-6 border-b border-border">
        <div className="flex items-center justify-between">
          <SheetTitle className="font-heading text-2xl flex items-center gap-2">
            <ShoppingBag className="h-6 w-6 text-primary" />
            Your Cart
          </SheetTitle>
          <Button
            variant="ghost"
            size="sm"
            onClick={clearCart}
            className="text-muted-foreground hover:text-destructive"
          >
            Clear All
          </Button>
        </div>
      </SheetHeader>

      {/* Cart Items */}
      <div className="flex-1 overflow-y-auto p-6 space-y-4">
        {cartItems.map((item) => (
          <div
            key={item.id}
            className="flex gap-4 bg-muted/50 rounded-xl p-3 animate-fade-in"
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-20 h-20 object-cover rounded-lg"
            />
            <div className="flex-1 min-w-0">
              <h4 className="font-heading font-semibold text-sm truncate">
                {item.name}
              </h4>
              <p className="text-primary font-bold mt-1">₱{item.price}</p>
              <div className="flex items-center gap-2 mt-2">
                <Button
                  variant="outline"
                  size="icon"
                  className="h-7 w-7"
                  onClick={() => updateQuantity(item.id, item.quantity - 1)}
                >
                  <Minus className="h-3 w-3" />
                </Button>
                <span className="font-medium w-6 text-center">{item.quantity}</span>
                <Button
                  variant="outline"
                  size="icon"
                  className="h-7 w-7"
                  onClick={() => updateQuantity(item.id, item.quantity + 1)}
                >
                  <Plus className="h-3 w-3" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-7 w-7 ml-auto text-muted-foreground hover:text-destructive"
                  onClick={() => removeFromCart(item.id)}
                >
                  <Trash2 className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Cart Footer */}
      <div className="border-t border-border p-6 bg-card">
        <div className="space-y-3 mb-4">
          <div className="flex justify-between text-sm">
            <span className="text-muted-foreground">Subtotal</span>
            <span>₱{cartTotal.toFixed(2)}</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-muted-foreground">Delivery Fee</span>
            <span>₱49.00</span>
          </div>
          <Separator />
          <div className="flex justify-between font-heading text-lg font-bold">
            <span>Total</span>
            <span className="text-primary">₱{(cartTotal + 49).toFixed(2)}</span>
          </div>
        </div>
        <Link to="/checkout">
          <Button className="w-full bg-primary hover:bg-primary/90 font-heading text-lg py-6">
            Proceed to Checkout
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Cart;

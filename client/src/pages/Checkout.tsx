import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, MapPin, CreditCard, Wallet, Truck, Clock } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Separator } from '@/components/ui/separator';
import { toast } from 'sonner';

const Checkout: React.FC = () => {
  const { cartItems, cartTotal, clearCart } = useCart();
  const navigate = useNavigate();
  const [paymentMethod, setPaymentMethod] = useState('cod');
  const [deliveryType, setDeliveryType] = useState('delivery');

  const deliveryFee = deliveryType === 'delivery' ? 49 : 0;
  const total = cartTotal + deliveryFee;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success('Order placed successfully!', {
      description: 'Your order will be prepared shortly.',
    });
    clearCart();
    navigate('/orders');
  };

  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center p-4">
        <div className="text-center">
          <h2 className="font-heading text-2xl font-bold mb-4">Your cart is empty</h2>
          <p className="text-muted-foreground mb-6">Add some items before checking out</p>
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
    <div className="min-h-screen bg-muted">
      {/* Header */}
      <header className="bg-card border-b border-border sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center gap-4">
            <Link to="/menu" className="p-2 hover:bg-muted rounded-lg transition-colors">
              <ArrowLeft className="h-5 w-5" />
            </Link>
            <h1 className="font-heading text-xl font-bold">Checkout</h1>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <form onSubmit={handleSubmit}>
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Left Column - Forms */}
            <div className="lg:col-span-2 space-y-6">
              {/* Delivery Type */}
              <div className="bg-card rounded-2xl p-6 shadow-card">
                <h2 className="font-heading text-lg font-bold mb-4">Delivery Method</h2>
                <RadioGroup value={deliveryType} onValueChange={setDeliveryType}>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <label
                      className={`flex items-center gap-4 p-4 rounded-xl border-2 cursor-pointer transition-colors ${
                        deliveryType === 'delivery'
                          ? 'border-primary bg-primary/5'
                          : 'border-border hover:border-primary/50'
                      }`}
                    >
                      <RadioGroupItem value="delivery" id="delivery" />
                      <div className="flex items-center gap-3">
                        <Truck className="h-6 w-6 text-primary" />
                        <div>
                          <p className="font-medium">Delivery</p>
                          <p className="text-sm text-muted-foreground">₱49 delivery fee</p>
                        </div>
                      </div>
                    </label>
                    <label
                      className={`flex items-center gap-4 p-4 rounded-xl border-2 cursor-pointer transition-colors ${
                        deliveryType === 'pickup'
                          ? 'border-primary bg-primary/5'
                          : 'border-border hover:border-primary/50'
                      }`}
                    >
                      <RadioGroupItem value="pickup" id="pickup" />
                      <div className="flex items-center gap-3">
                        <Clock className="h-6 w-6 text-primary" />
                        <div>
                          <p className="font-medium">Pick Up</p>
                          <p className="text-sm text-muted-foreground">Free</p>
                        </div>
                      </div>
                    </label>
                  </div>
                </RadioGroup>
              </div>

              {/* Delivery Address */}
              {deliveryType === 'delivery' && (
                <div className="bg-card rounded-2xl p-6 shadow-card">
                  <h2 className="font-heading text-lg font-bold mb-4 flex items-center gap-2">
                    <MapPin className="h-5 w-5 text-primary" />
                    Delivery Address
                  </h2>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="fullName">Full Name</Label>
                      <Input id="fullName" placeholder="Juan Dela Cruz" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input id="phone" placeholder="09XX XXX XXXX" required />
                    </div>
                    <div className="space-y-2 sm:col-span-2">
                      <Label htmlFor="address">Complete Address</Label>
                      <Input id="address" placeholder="House/Unit No., Street, Barangay" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="city">City</Label>
                      <Input id="city" placeholder="Makati City" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="notes">Delivery Notes (Optional)</Label>
                      <Input id="notes" placeholder="Gate code, landmarks, etc." />
                    </div>
                  </div>
                </div>
              )}

              {/* Payment Method */}
              <div className="bg-card rounded-2xl p-6 shadow-card">
                <h2 className="font-heading text-lg font-bold mb-4 flex items-center gap-2">
                  <CreditCard className="h-5 w-5 text-primary" />
                  Payment Method
                </h2>
                <RadioGroup value={paymentMethod} onValueChange={setPaymentMethod}>
                  <div className="space-y-3">
                    <label
                      className={`flex items-center gap-4 p-4 rounded-xl border-2 cursor-pointer transition-colors ${
                        paymentMethod === 'cod'
                          ? 'border-primary bg-primary/5'
                          : 'border-border hover:border-primary/50'
                      }`}
                    >
                      <RadioGroupItem value="cod" id="cod" />
                      <div className="flex items-center gap-3">
                        <Wallet className="h-6 w-6 text-primary" />
                        <div>
                          <p className="font-medium">Cash on Delivery</p>
                          <p className="text-sm text-muted-foreground">Pay when you receive</p>
                        </div>
                      </div>
                    </label>
                    <label
                      className={`flex items-center gap-4 p-4 rounded-xl border-2 cursor-pointer transition-colors ${
                        paymentMethod === 'gcash'
                          ? 'border-primary bg-primary/5'
                          : 'border-border hover:border-primary/50'
                      }`}
                    >
                      <RadioGroupItem value="gcash" id="gcash" />
                      <div className="flex items-center gap-3">
                        <div className="w-6 h-6 bg-blue-500 rounded text-white text-xs font-bold flex items-center justify-center">
                          G
                        </div>
                        <div>
                          <p className="font-medium">GCash</p>
                          <p className="text-sm text-muted-foreground">Pay with GCash wallet</p>
                        </div>
                      </div>
                    </label>
                    <label
                      className={`flex items-center gap-4 p-4 rounded-xl border-2 cursor-pointer transition-colors ${
                        paymentMethod === 'card'
                          ? 'border-primary bg-primary/5'
                          : 'border-border hover:border-primary/50'
                      }`}
                    >
                      <RadioGroupItem value="card" id="card" />
                      <div className="flex items-center gap-3">
                        <CreditCard className="h-6 w-6 text-primary" />
                        <div>
                          <p className="font-medium">Credit/Debit Card</p>
                          <p className="text-sm text-muted-foreground">Visa, Mastercard, etc.</p>
                        </div>
                      </div>
                    </label>
                  </div>
                </RadioGroup>
              </div>
            </div>

            {/* Right Column - Order Summary */}
            <div className="lg:col-span-1">
              <div className="bg-card rounded-2xl p-6 shadow-card sticky top-24">
                <h2 className="font-heading text-lg font-bold mb-4">Order Summary</h2>
                
                {/* Items */}
                <div className="space-y-3 max-h-64 overflow-y-auto">
                  {cartItems.map((item) => (
                    <div key={item.id} className="flex gap-3">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-16 h-16 object-cover rounded-lg"
                      />
                      <div className="flex-1 min-w-0">
                        <p className="font-medium text-sm truncate">{item.name}</p>
                        <p className="text-sm text-muted-foreground">×{item.quantity}</p>
                        <p className="text-sm font-medium text-primary">
                          ₱{(item.price * item.quantity).toFixed(2)}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                <Separator className="my-4" />

                {/* Totals */}
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Subtotal</span>
                    <span>₱{cartTotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Delivery Fee</span>
                    <span>{deliveryFee > 0 ? `₱${deliveryFee.toFixed(2)}` : 'Free'}</span>
                  </div>
                  <Separator className="my-2" />
                  <div className="flex justify-between font-heading text-lg font-bold">
                    <span>Total</span>
                    <span className="text-primary">₱{total.toFixed(2)}</span>
                  </div>
                </div>

                <Button
                  type="submit"
                  className="w-full bg-primary hover:bg-primary/90 font-heading text-lg py-6 mt-6"
                >
                  Place Order
                </Button>

                <p className="text-xs text-muted-foreground text-center mt-4">
                  By placing your order, you agree to our Terms of Service and Privacy Policy
                </p>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Checkout;
import React from 'react';
import { Link } from 'react-router-dom';
import { Package, ShoppingBag, Clock, CheckCircle, Truck } from 'lucide-react';
import { Button } from '@/components/ui/button';

// Simulated orders data
const orders = [
  {
    id: 'JB-2024-001',
    date: '2024-01-10',
    status: 'delivered',
    total: 548,
    items: [
      { name: '2 pc Chickenjoy', quantity: 2 },
      { name: 'Jolly Spaghetti', quantity: 1 },
      { name: 'Coca-Cola Regular', quantity: 2 },
    ],
  },
  {
    id: 'JB-2024-002',
    date: '2024-01-08',
    status: 'delivered',
    total: 899,
    items: [
      { name: 'Family Bundle A', quantity: 1 },
    ],
  },
];

const statusConfig = {
  pending: { label: 'Pending', icon: Clock, color: 'text-yellow-600 bg-yellow-100' },
  preparing: { label: 'Preparing', icon: Package, color: 'text-blue-600 bg-blue-100' },
  delivering: { label: 'On the way', icon: Truck, color: 'text-orange-600 bg-orange-100' },
  delivered: { label: 'Delivered', icon: CheckCircle, color: 'text-green-600 bg-green-100' },
};

const Orders: React.FC = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <section className="bg-gradient-hero py-12 md:py-16">
        <div className="container mx-auto px-4 text-center">
          <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
            <Package className="h-8 w-8 text-white" />
          </div>
          <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            My Orders
          </h1>
          <p className="text-white/90 max-w-md mx-auto">
            Track and manage your order history
          </p>
        </div>
      </section>

      {/* Orders List */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          {orders.length === 0 ? (
            <div className="text-center py-16">
              <div className="w-24 h-24 bg-muted rounded-full flex items-center justify-center mx-auto mb-4">
                <ShoppingBag className="h-12 w-12 text-muted-foreground" />
              </div>
              <h3 className="font-heading text-xl font-semibold mb-2">No orders yet</h3>
              <p className="text-muted-foreground mb-6">
                Start ordering your favorite Jollibee meals!
              </p>
              <Link to="/menu">
                <Button className="bg-primary hover:bg-primary/90">
                  Browse Menu
                </Button>
              </Link>
            </div>
          ) : (
            <div className="space-y-6 max-w-3xl mx-auto">
              {orders.map((order) => {
                const status = statusConfig[order.status as keyof typeof statusConfig];
                const StatusIcon = status.icon;
                
                return (
                  <div
                    key={order.id}
                    className="bg-card rounded-2xl shadow-card overflow-hidden"
                  >
                    {/* Order Header */}
                    <div className="flex items-center justify-between p-5 border-b border-border">
                      <div>
                        <p className="font-heading font-bold text-foreground">
                          Order #{order.id}
                        </p>
                        <p className="text-sm text-muted-foreground">
                          {new Date(order.date).toLocaleDateString('en-US', {
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric',
                          })}
                        </p>
                      </div>
                      <div className={`flex items-center gap-2 px-3 py-1.5 rounded-full text-sm font-medium ${status.color}`}>
                        <StatusIcon className="h-4 w-4" />
                        {status.label}
                      </div>
                    </div>

                    {/* Order Items */}
                    <div className="p-5">
                      <ul className="space-y-2">
                        {order.items.map((item, idx) => (
                          <li key={idx} className="flex justify-between text-sm">
                            <span className="text-foreground">{item.name}</span>
                            <span className="text-muted-foreground">×{item.quantity}</span>
                          </li>
                        ))}
                      </ul>
                      <div className="flex items-center justify-between mt-4 pt-4 border-t border-border">
                        <span className="font-heading font-bold text-foreground">Total</span>
                        <span className="font-heading font-bold text-primary text-lg">
                          ₱{order.total.toFixed(2)}
                        </span>
                      </div>
                    </div>

                    {/* Order Actions */}
                    <div className="flex gap-3 p-5 pt-0">
                      <Button variant="outline" className="flex-1">
                        View Details
                      </Button>
                      <Button className="flex-1 bg-primary hover:bg-primary/90">
                        Reorder
                      </Button>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Orders;
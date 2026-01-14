import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { User, Package, Heart, MapPin, LogOut, ChevronRight, Settings } from 'lucide-react';
import { useAuth } from '@/context/AuthContext';
import { useFavorites } from '@/context/FavoritesContext';
import { useEffect, useState } from 'react';
import { orderService, Order } from '@/services/orderServices';

const Dashboard = () => {
  const { user, logout, isLoading } = useAuth();
  const { favorites } = useFavorites();
  const navigate = useNavigate();
  const [recentOrders, setRecentOrders] = useState<Order[]>([]);
  const [ordersLoading, setOrdersLoading] = useState(true);

  useEffect(() => {
    if (!isLoading && !user) {
      navigate('/login');
    }
  }, [user, isLoading, navigate]);

  useEffect(() => {
    if (user) {
      orderService.getMyOrders()
        .then(orders => setRecentOrders(orders.slice(0, 3)))
        .catch(console.error)
        .finally(() => setOrdersLoading(false));
    }
  }, [user]);

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="w-8 h-8 border-4 border-primary/30 border-t-primary rounded-full animate-spin" />
      </div>
    );
  }

  if (!user) return null;

  const menuItems = [
    { icon: Package, label: 'My Orders', path: '/orders', count: recentOrders.length },
    { icon: Heart, label: 'Favorites', path: '/favorites', count: favorites.length },
    { icon: MapPin, label: 'Saved Addresses', path: '/addresses', count: 0 },
    { icon: Settings, label: 'Account Settings', path: '/settings', count: null },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'delivered': return 'bg-green-100 text-green-700';
      case 'preparing': return 'bg-yellow-100 text-yellow-700';
      case 'ready': return 'bg-blue-100 text-blue-700';
      default: return 'bg-gray-100 text-gray-700';
    }
  };

  return (
    <div className="min-h-screen bg-muted/30 py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-gradient-to-r from-primary to-primary/80 rounded-3xl p-8 text-primary-foreground mb-8"
        >
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 bg-primary-foreground/20 rounded-full flex items-center justify-center">
              <User className="w-8 h-8" />
            </div>
            <div>
              <h1 className="font-display text-2xl md:text-3xl font-bold">
                Hello, {user.name.split(' ')[0]}! 👋
              </h1>
              <p className="opacity-90">{user.email}</p>
            </div>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Quick Actions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="md:col-span-2"
          >
            <h2 className="font-display text-xl font-bold mb-4">Quick Actions</h2>
            <div className="bg-card rounded-2xl shadow-sm overflow-hidden">
              {menuItems.map((item, index) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`flex items-center justify-between p-4 hover:bg-muted transition-colors ${
                    index !== menuItems.length - 1 ? 'border-b border-border' : ''
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                      <item.icon className="w-5 h-5 text-primary" />
                    </div>
                    <span className="font-medium">{item.label}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    {item.count !== null && item.count > 0 && (
                      <span className="px-2 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full">
                        {item.count}
                      </span>
                    )}
                    <ChevronRight className="w-5 h-5 text-muted-foreground" />
                  </div>
                </Link>
              ))}
            </div>

            {/* Logout Button */}
            <button
              onClick={handleLogout}
              className="mt-4 w-full flex items-center justify-center gap-2 p-4 bg-card rounded-2xl shadow-sm text-destructive hover:bg-destructive/10 transition-colors font-medium"
            >
              <LogOut className="w-5 h-5" />
              Logout
            </button>
          </motion.div>

          {/* Recent Orders */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <h2 className="font-display text-xl font-bold mb-4">Recent Orders</h2>
            <div className="bg-card rounded-2xl shadow-sm p-4">
              {ordersLoading ? (
                <div className="flex items-center justify-center py-8">
                  <div className="w-6 h-6 border-2 border-primary/30 border-t-primary rounded-full animate-spin" />
                </div>
              ) : recentOrders.length === 0 ? (
                <div className="text-center py-8">
                  <Package className="w-12 h-12 text-muted-foreground mx-auto mb-2" />
                  <p className="text-muted-foreground text-sm">No orders yet</p>
                  <Link
                    to="/menu"
                    className="inline-block mt-3 text-primary font-medium text-sm hover:underline"
                  >
                    Start ordering →
                  </Link>
                </div>
              ) : (
                <div className="space-y-3">
                  {recentOrders.map(order => (
                    <div key={order._id} className="p-3 bg-muted/50 rounded-xl">
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-medium text-sm">
                          {order._id.slice(-8).toUpperCase()}
                        </span>
                        <span className={`px-2 py-0.5 rounded-full text-xs font-medium capitalize ${getStatusColor(order.status)}`}>
                          {order.status}
                        </span>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        {order.items.length} item{order.items.length > 1 ? 's' : ''} • ₱{order.totalAmount.toFixed(2)}
                      </p>
                    </div>
                  ))}
                  <Link
                    to="/orders"
                    className="block text-center text-primary font-medium text-sm hover:underline pt-2"
                  >
                    View all orders →
                  </Link>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

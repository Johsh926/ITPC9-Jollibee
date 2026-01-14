import api from '@/lib/api';

export interface OrderItem {
  product: {
    _id: string;
    name: string;
    price: number;
    image: string;
  };
  quantity: number;
  price: number;
}

export interface Order {
  _id: string;
  user: string;
  items: OrderItem[];
  totalAmount: number;
  status: 'pending' | 'confirmed' | 'preparing' | 'ready' | 'delivered' | 'cancelled';
  deliveryAddress: {
    street: string;
    city: string;
    state: string;
    zipCode: string;
  };
  paymentMethod: 'cash' | 'card' | 'gcash';
  paymentStatus: 'pending' | 'paid' | 'failed';
  specialInstructions?: string;
  createdAt: string;
  updatedAt: string;
}

export interface CreateOrderData {
  deliveryAddress: {
    street: string;
    city: string;
    state: string;
    zipCode: string;
  };
  paymentMethod: 'cash' | 'card' | 'gcash';
  specialInstructions?: string;
}

export const orderService = {
  async getMyOrders(): Promise<Order[]> {
    const { data } = await api.get('/orders/my-orders');
    return data;
  },

  async getById(id: string): Promise<Order> {
    const { data } = await api.get(`/orders/${id}`);
    return data;
  },

  async create(orderData: CreateOrderData): Promise<Order> {
    const { data } = await api.post('/orders', orderData);
    return data;
  },

  async cancel(id: string): Promise<Order> {
    const { data } = await api.put(`/orders/${id}/cancel`);
    return data;
  },

  // Admin functions
  async getAllOrders(): Promise<Order[]> {
    const { data } = await api.get('/orders');
    return data;
  },

  async updateStatus(id: string, status: Order['status']): Promise<Order> {
    const { data } = await api.put(`/orders/${id}/status`, { status });
    return data;
  },
};

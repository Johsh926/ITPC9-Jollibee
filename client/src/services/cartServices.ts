import api from '@/lib/api';

export interface CartItem {
  product: {
    _id: string;
    name: string;
    price: number;
    image: string;
  };
  quantity: number;
  _id: string;
}

export interface Cart {
  _id: string;
  user: string;
  items: CartItem[];
  totalAmount: number;
}

export const cartService = {
  async getCart(): Promise<Cart> {
    const { data } = await api.get('/cart');
    return data;
  },

  async addItem(productId: string, quantity: number = 1): Promise<Cart> {
    const { data } = await api.post('/cart/add', { productId, quantity });
    return data;
  },

  async updateQuantity(productId: string, quantity: number): Promise<Cart> {
    const { data } = await api.put('/cart/update', { productId, quantity });
    return data;
  },

  async removeItem(productId: string): Promise<Cart> {
    const { data } = await api.delete(`/cart/remove/${productId}`);
    return data;
  },

  async clearCart(): Promise<{ message: string }> {
    const { data } = await api.delete('/cart/clear');
    return data;
  },
};

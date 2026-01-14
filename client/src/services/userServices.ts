import api from '@/lib/api';
import { User } from './authService';

export interface UpdateProfileData {
  name?: string;
  phone?: string;
  address?: string;
}

export interface ChangePasswordData {
  currentPassword: string;
  newPassword: string;
}

export const userService = {
  async updateProfile(data: UpdateProfileData): Promise<User> {
    const { data: user } = await api.put('/users/profile', data);
    localStorage.setItem('user', JSON.stringify(user));
    return user;
  },

  async changePassword(data: ChangePasswordData): Promise<{ message: string }> {
    const { data: response } = await api.put('/users/password', data);
    return response;
  },

  async getFavorites(): Promise<string[]> {
    const { data } = await api.get('/users/favorites');
    return data;
  },

  async addFavorite(productId: string): Promise<string[]> {
    const { data } = await api.post(`/users/favorites/${productId}`);
    return data;
  },

  async removeFavorite(productId: string): Promise<string[]> {
    const { data } = await api.delete(`/users/favorites/${productId}`);
    return data;
  },
};

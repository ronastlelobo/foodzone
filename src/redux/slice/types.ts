import {LoadingState} from '../types';

export interface RestaurantType {
  data: Restaurant[];
  loading: LoadingState;
}

export interface Restaurant {
  id: number;
  name: string;
  neighborhood: string;
  photograph: string;
  avg_rating: number;
  address: string;
  latlng: Latlng;
  cuisine_type: string;
  operating_hours: OperatingHours;
  reviews: Review[];
}

export interface Latlng {
  lat: number;
  lng: number;
}

export interface OperatingHours {
  Monday: string;
  Tuesday: string;
  Wednesday: string;
  Thursday: string;
  Friday: string;
  Saturday: string;
  Sunday: string;
}

export interface Review {
  name: string;
  date: string;
  rating: number;
  comments: string;
}

export interface Checkout {
  data: MenuItem[];
  restaurant?: Restaurant;
  loading: LoadingState;
}

export interface Menu {
  data: MenuItem[];
  loading: LoadingState;
}

export interface MenuItem {
  id: string;
  name: string;
  position: number;
  price: string;
  consumable: string;
  cuisine_name: string;
  category_name: string;
  discount: Discount;
  tags: any[];
  quantity: number;
}

export interface Discount {
  type: string;
  amount: string;
}

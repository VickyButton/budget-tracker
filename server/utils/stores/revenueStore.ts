import {
  MemoryStore,
} from '../store';

export interface Revenue {
  id: string;
  label: string;
  amount: number;
}

export const revenueStore = new MemoryStore<Revenue>();

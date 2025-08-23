import {
  MemoryStore,
} from '../store';

export interface Expense {
  id: string;
  label: string;
  amount: number;
}

export const expenseStore = new MemoryStore<Expense>();

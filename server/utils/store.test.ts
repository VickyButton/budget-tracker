import {
  describe,
  expect,
  it,
} from 'vitest';
import { MemoryStore } from './store';

const testItem = { id: '12345' };

describe('MemoryStore', () => {
  it('can save and find an item', async () => {
    const store = new MemoryStore();

    // Save item.
    await store.save(testItem);

    // Retrieve item.
    const item = await store.find(testItem.id);

    // Assert that the item can be found.
    expect(item).toBe(testItem);
  });

  it('can delete a saved item', async () => {
    const store = new MemoryStore();

    // Save item.
    await store.save(testItem);

    // Delete item.
    await store.delete(testItem.id);

    // Attempt to retrieve item.
    const item = await store.find(testItem.id);

    // Assert that the item is not found.
    expect(item).toBe(undefined);
  });
});

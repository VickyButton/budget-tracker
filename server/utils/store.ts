interface StoreItem {
  id: string;
}

interface Store<T extends StoreItem> {
  find(id: string): Promise<T | undefined>;
  save(item: T): Promise<void>;
  delete(id: string): Promise<void>;
}

export class MemoryStore<T extends StoreItem> implements Store<T> {
  private items = new Map<string, T>();

  public async find(id: string) {
    return this.items.get(id);
  }

  public async save(item: T) {
    this.items.set(item.id, item);
  }

  public async delete(id: string) {
    this.items.delete(id);
  }
}

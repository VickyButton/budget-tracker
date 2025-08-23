import {
  v4,
} from 'uuid';

interface IdGenerator {
  generateId(): string;
}

export class UuidGenerator implements IdGenerator {
  public generateId() {
    return v4();
  }
}

export const idGenerator = new UuidGenerator();

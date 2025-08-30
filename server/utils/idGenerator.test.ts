import { describe, expect, it } from 'vitest';
import { UuidGenerator } from './idGenerator';
import { validate } from 'uuid';

describe('UuidGenerator', () => {
  it('generates a uuid', () => {
    const uuidGenerator = new UuidGenerator();

    expect(validate(uuidGenerator.generateId())).toBe(true);
  });
});

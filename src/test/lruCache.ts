import {
  assert,
} from "chai";
import { LruCache } from "../lruCache";
describe("LruCache", () => {
  const CAPACITY = 16;
  const cache = new LruCache<number, number>(CAPACITY);
  it("Has specified capacity.", () => {
    assert.strictEqual(cache.capacity, CAPACITY);
  });
  it("Can grow and report size correctly.", () => {
    assert.strictEqual(cache.size, 0);
    for (let i = 0; i < CAPACITY; ++i) {
      cache.set(i, i);
      assert.strictEqual(cache.size, i + 1);
    }
    assert.strictEqual(cache.size, CAPACITY);
  });
  it("Can return stored items correctly.", () => {
    for (let i = CAPACITY - 1; i >= 0; --i) {
      assert.strictEqual(cache.get(i), i);
    }
  });
  it("Removes least recently used item when capacity limit reached.", () => {
    assert.strictEqual(cache.size, CAPACITY);
    cache.set(16, 16);
    assert.strictEqual(cache.size, CAPACITY);
    assert.strictEqual(cache.get(15), undefined);
    for (let i = CAPACITY - 2; i >= 0; --i) {
      assert.strictEqual(cache.get(i), i);
    }
  });
});

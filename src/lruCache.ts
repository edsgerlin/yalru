import {DoublyLinkedList, IDoublyLinkedNode} from "./doublyLinkedList";
export class LruCache<K, V> {
  public readonly capacity: number;
  private map: Map<K, [V, IDoublyLinkedNode<K>]> = new Map<K, [V, IDoublyLinkedNode<K>]>();
  private list: DoublyLinkedList<K> = new DoublyLinkedList<K>();
  public constructor(capacity: number) {
    if (capacity <= 0) {
      throw Error("LruCache: capacity must be greater then zero.");
    }
    this.capacity = capacity;
  }
  public get size(): number {
    return this.map.size;
  }
  public isFull(): boolean {
    return this.capacity === this.size;
  }
  public set(key: K, value: V) {
    const pair = this.map.get(key);
    if (pair) {
      const [, oldNode] = pair;
      this.list.removeNode(oldNode);
      this.map.delete(key);
    }
    if (this.isFull()) {
      const firstNode = this.list.first;
      if (firstNode === undefined) {
        throw Error("LruCache: cache is full but no node to remove.");
      }
      this.map.delete(firstNode.value);
      this.list.removeNode(firstNode);
    }
    const node = this.list.append(key);
    this.map.set(key, [value, node]);
  }

  public get(key: K): V | undefined {
    const pair = this.map.get(key);
    if (!pair) {
      return undefined;
    }
    const [value, oldNode] = pair;
    this.list.removeNode(oldNode);
    const newNode = this.list.append(key);
    this.map.set(key, [value, newNode]);
    return value;
  }
}

import { DoublyLinkedList } from "./doublyLinkedList";
export class LruCache {
    constructor(capacity) {
        this.map = new Map();
        this.list = new DoublyLinkedList();
        if (capacity <= 0) {
            throw Error("LruCache: capacity must be greater then zero.");
        }
        this.capacity = capacity;
    }
    get size() {
        return this.map.size;
    }
    isFull() {
        return this.capacity === this.size;
    }
    set(key, value) {
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
    get(key) {
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

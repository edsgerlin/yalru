export declare class LruCache<K, V> {
    readonly capacity: number;
    private map;
    private list;
    constructor(capacity: number);
    readonly size: number;
    isFull(): boolean;
    set(key: K, value: V): void;
    get(key: K): V | undefined;
}

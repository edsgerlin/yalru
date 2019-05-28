export interface IDoublyLinkedNode<T> {
    readonly value: T;
    previousNode?: IDoublyLinkedNode<T>;
    nextNode?: IDoublyLinkedNode<T>;
}
export declare class DoublyLinkedList<T> {
    private firstNode?;
    private lastNode?;
    readonly first: IDoublyLinkedNode<T> | undefined;
    readonly last: IDoublyLinkedNode<T> | undefined;
    isEmpty(): boolean;
    append(value: T): IDoublyLinkedNode<T>;
    prepend(value: T): IDoublyLinkedNode<T>;
    removeNode(node: IDoublyLinkedNode<T>): void;
}

export interface IDoublyLinkedNode<T> {
  readonly value: T;
  previousNode?: IDoublyLinkedNode<T>;
  nextNode?: IDoublyLinkedNode<T>;
}

export class DoublyLinkedList<T> {
  private firstNode?: IDoublyLinkedNode<T>;

  private lastNode?: IDoublyLinkedNode<T>;

  public get first(): IDoublyLinkedNode<T> | undefined {
    return this.firstNode;
  }

  public get last(): IDoublyLinkedNode<T> | undefined {
    return this.lastNode;
  }

  public isEmpty(): boolean {
    return this.firstNode === undefined && this.lastNode === undefined;
  }

  public append(value: T): IDoublyLinkedNode<T> {
    const node: IDoublyLinkedNode<T> = { value };
    if (this.firstNode === undefined || this.lastNode === undefined) {
      this.lastNode = this.firstNode = node;
    } else {
      this.lastNode.nextNode = node;
      node.previousNode = this.lastNode;
      this.lastNode = node;
    }
    return node;
  }

  public prepend(value: T): IDoublyLinkedNode<T> {
    const node: IDoublyLinkedNode<T> = { value };
    if (this.firstNode === undefined || this.lastNode === undefined) {
      this.lastNode = this.firstNode = node;
    } else {
      this.firstNode.previousNode = node;
      node.nextNode = this.firstNode;
      this.firstNode = node;
    }
    return node;
  }

  public removeFirst(): void {
    if (this.firstNode === undefined) {
      return;
    }
    if (this.firstNode.nextNode !== undefined) {
      this.firstNode.nextNode.previousNode = undefined;
    }
    const removedNode = this.firstNode;
    this.firstNode = this.firstNode.nextNode;
    removedNode.nextNode = undefined;
    return;
  }

  public removeLast(): void {
    if (this.lastNode === undefined) {
      return;
    }
    if (this.lastNode.previousNode !== undefined) {
      this.lastNode.previousNode.nextNode = undefined;
    }
    const removedNode = this.lastNode;
    this.lastNode = this.lastNode.previousNode;
    removedNode.previousNode = undefined;
  }

  public removeNode(node: IDoublyLinkedNode<T>): void {
    if (node.previousNode !== undefined) {
      node.previousNode.nextNode = node.nextNode;
    } else if (node === this.firstNode) {
      this.firstNode = node.nextNode;
    }
    if (node.nextNode !== undefined) {
      node.nextNode.previousNode = node.previousNode;
    } else if (node === this.lastNode) {
      this.lastNode = node.previousNode;
    }
    node.nextNode = node.previousNode = undefined;
  }
}

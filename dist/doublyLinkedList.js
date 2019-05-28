export class DoublyLinkedList {
    get first() {
        return this.firstNode;
    }
    get last() {
        return this.lastNode;
    }
    isEmpty() {
        return this.firstNode === undefined && this.lastNode === undefined;
    }
    append(value) {
        const node = { value };
        if (this.firstNode === undefined || this.lastNode === undefined) {
            this.lastNode = this.firstNode = node;
        }
        else {
            this.lastNode.nextNode = node;
            node.previousNode = this.lastNode;
            this.lastNode = node;
        }
        return node;
    }
    prepend(value) {
        const node = { value };
        if (this.firstNode === undefined || this.lastNode === undefined) {
            this.lastNode = this.firstNode = node;
        }
        else {
            this.firstNode.previousNode = node;
            node.nextNode = this.firstNode;
            this.firstNode = node;
        }
        return node;
    }
    removeNode(node) {
        if (node.previousNode !== undefined) {
            node.previousNode.nextNode = node.nextNode;
        }
        else if (node === this.firstNode) {
            this.firstNode = node.nextNode;
        }
        if (node.nextNode !== undefined) {
            node.nextNode.previousNode = node.previousNode;
        }
        else if (node === this.lastNode) {
            this.lastNode = node.previousNode;
        }
        node.nextNode = node.previousNode = undefined;
    }
}

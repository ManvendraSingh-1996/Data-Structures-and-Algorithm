class Queue {
  items: any;
  constructor() {
    this.items = [];
  }
  enqueue(element: any) {
    this.items.push(element);
  }
  dequeue() {
    return this.items.shift();
  }
  isEmpty() {
    return this.items.length === 0;
  }
  size() {
    return this.items.length;
  }
  peak() {
    if (!this.isEmpty()) {
      return this.items[0];
    }
    return null;
  }
  print() {
    console.log(this.items.toString());
  }
}
const queue = new Queue();
queue.enqueue(5);
queue.enqueue(15);
queue.enqueue(25);
queue.enqueue(35);
// console.log(queue);
queue.peak();
queue.print();
console.log(queue.peak());
queue.dequeue();
queue.print();
console.log(queue.peak());

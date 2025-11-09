class Stack {
  items: any;
  constructor() {
    this.items = [];
  }
  push(elememt: any) {
    this.items.push(elememt);
  }
  pop() {
    return this.items.pop();
  }
  size() {
    return this.items.length;
  }
  peak() {
    return this.items[this.items.length - 1];
  }
  print() {
    console.log(this.items.toString());
  }
}

const stack = new Stack();
stack.push(5);
stack.push(15);
stack.push(25);
stack.push(35);
console.log(stack);
stack.peak();
stack.print();
console.log(stack.peak());

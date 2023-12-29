//27-12-2023
//var a = 12;
//var b = 13;
//var c = a + b;
//document.write(c)

//const fruits = [];
//fruits.push("banana", "apple", "orange", 12);
////console.log(fruits.length)
//document.write(fruits.length)


//const fruits = ["banana", "apple", "orange"];
//let size = fruits.length;
//document.write(size);


//const fruits = ["banana", "apple", "orange"];
//document.getElementById("first").innerHTML = fruits.join("-")

//const fruits = ["banana", "apple", "orange"];
//document.getElementById("first").innerHTML = fruits;
//fruits.pop();
//document.getElementById("first").innerHTML = fruits;

//28-12-2023

// Stack class
class Stack {
    constructor() {
        this.items = []; // Array to store stack elements
    }

    // Push element to the stack
    push(element) {
        this.items.push(element);
    }

    // Pop element from the stack
    pop() {
        if (this.items.length === 0) {
            return "Underflow"; // If stack is empty
        }
        return this.items.pop();
    }

    // Peek the top element of the stack
    peek() {
        return this.items[this.items.length - 1];
    }

    // Check if the stack is empty
    isEmpty() {
        return this.items.length === 0;
    }

    // Print the stack elements
    printStack() {
        let str = "";
        for (let i = 0; i < this.items.length; i++) {
            str += this.items[i] + " ";
        }
        return str;
    }
}

let stack = new Stack();

// Pushing elements to the stack
stack.push(10);
stack.push(20);
stack.push(30);

// Print the stack elements
console.log("Stack elements:", stack.printStack()); // Output: 10 20 30

// Pop an element from the stack
console.log("Popped element:", stack.pop()); // Output: 30

// Peek the top element of the stack
console.log("Top element:", stack.peek()); // Output: 20

// Check if stack is empty
console.log("Is stack empty?", stack.isEmpty()); // Output: false



// Queue class
class Queue {
    constructor() {
        this.items = []; // Array to store queue elements
    }

    // Enqueue element to the queue (add to the end)
    enqueue(element) {
        this.items.push(element);
    }

    // Dequeue element from the queue (remove from the front)
    dequeue() {
        if (this.isEmpty()) {
            return "Underflow"; // If queue is empty
        }
        return this.items.shift();
    }

    // Peek the front element of the queue
    front() {
        if (this.isEmpty()) {
            return "No elements in Queue"; // If queue is empty
        }
        return this.items[0];
    }

    // Check if the queue is empty
    isEmpty() {
        return this.items.length === 0;
    }

    // Print the queue elements
    printQueue() {
        let str = "";
        for (let i = 0; i < this.items.length; i++) {
            str += this.items[i] + " ";
        }
        return str;
    }
}

let queue = new Queue();

// Enqueue elements to the queue
queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);

// Print the queue elements
console.log("Queue elements:", queue.printQueue()); // Output: 10 20 30

// Dequeue an element from the queue
console.log("Dequeued element:", queue.dequeue()); // Output: 10

// Peek the front element of the queue
console.log("Front element:", queue.front()); // Output: 20

// Check if queue is empty
console.log("Is queue empty?", queue.isEmpty()); // Output: false



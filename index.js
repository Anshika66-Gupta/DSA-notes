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

//Stack example:-
//class Stack {
//    Constructor(){
//        this.items = []; 
//    } 
//    //push element
//    push(element){
//        this.items.push(element);
//    }
//    //pop element
//    pop(){
//        if(this.items.length === 0) {
//            return "Underflow";
//        }
//        return this.items.pop();
//    }
//    peek(){
//        return this.items[this.items.length -1];
//    }
//    isEmpty(){
//        return this.items.length ===0;
//    }
    
//    printStack(){
//        let str = "";
//        for (let i = 0; i < this.items.length; i++){
//            str += this.items[i] + ""
//        }
//        return str;
//    }
//}

//let stack = new Stack();

//stack.push(10);
//stack.push(20);
//stack.push(30);

//console.log("Stack elements: ", stack.printStack());
//console.log("Popped elements: ", stack.pop());
//console.log("Top elements: ", stack.peek());
//console.log("Is stack empty ", stack.isEmpty());


////queue example

//class Queue {
//    Constructor(){
//        this.items = []; 
//    } 
//    //enqueue element
//    enqueue(element){
//        this.items.push(element);
//    }
//    //pop element
//    dequeue(){
//        if(this.isEmpty()) {
//            return "Underflow";
//        }
//        return this.items.shift();
//    }
//front(){
//        if(this.isEmpty()) {
//            return "No elements available";
//        }
//        return this.items[0];
//    }
//    isEmpty(){
//        return this.items.length===0;
//    }
    
//    printQueue(){
//        let str = "";
//        for (let i = 0; i < this.items.length; i++){
//            str += this.items[i] + " ";
//        }
//        return str;
//    }
//}

//let queue = new Stack();

//queue.enqueue(10);
//queue.enqueue(20);
//queue.enqueue(30);

//console.log("queue elements: ", queue.printQueue());
//console.log("dequeue elements: ", queue.dequeue());
//console.log("Front elements: ", queue.front());
//console.log("Is queue empty ", queue.isEmpty());


//time complexity of O(1)

//const firstElement = (array) => {
//    return array[0];
//}

//let score = [12, 55, 67, 94, 22]; //output: 12
//console.log(firstElement(score));

//  


//linked tree program

class Node {
    constructor(data) {
      this.data = data;
      this.next = null;
    }
  }
  
  class LinkedList {
    constructor() {
      this.head = null;
    }
  
    insertAtBeginning(data) {
      const newNode = new Node(data);
      newNode.next = this.head;
      this.head = newNode;
    }
  
    insertAtEnd(data) {
      const newNode = new Node(data);
      if (!this.head) {
        this.head = newNode;
        return;
      }
      let last = this.head;
      while (last.next) {
        last = last.next;
      }
      last.next = newNode;
    }
  
    // Delete a node by value
    deleteNode(key) {
      let temp = this.head;
      if (temp && temp.data === key) {
        this.head = temp.next;
        temp = null;
        return;
      }
      let prev = null;
      while (temp && temp.data !== key) {
        prev = temp;
        temp = temp.next;
      }
      if (!temp) return;
      prev.next = temp.next;
      temp = null;
    }
  
    // Print the linked list
    printList() {
      let temp = this.head;
      while (temp) {
        process.stdout.write(`${temp.data} -> `);
        temp = temp.next;
      }
      console.log('null');
    }
  }
  
  const ll = new LinkedList();
  
  ll.insertAtBeginning(3);
  ll.insertAtBeginning(2);
  ll.insertAtBeginning(1);
  
  ll.printList(); 
  
  ll.insertAtEnd(4);
  ll.insertAtEnd(5);
  
  ll.printList(); 
  
  ll.deleteNode(3);
  
  ll.printList(); 
  

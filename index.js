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
class Stack {
    Constructor(){
        this.items = []; 
    } 
    //push element
    push(element){
        this.items.push(element);
    }
    //pop element
    pop(){
        if(this.items.length === 0) {
            return "Underflow";
        }
        return this.items.pop();
    }
    peek(){
        return this.items[this.items.length -1];
    }
    isEmpty(){
        return this.items.length ===0;
    }
    
    printStack(){
        let str = "";
        for (let i = 0; i < this.items.length; i++){
            str += this.items[i] + ""
        }
        return str;
    }
}

let stack = new Stack();

stack.push(10);
stack.push(20);
stack.push(30);

console.log("Stack elements: ", stack.printStack());
console.log("Popped elements: ", stack.pop());
console.log("Top elements: ", stack.peek());
console.log("Is stack empty ", stack.isEmpty());


//queue example

class Queue {
    Constructor(){
        this.items = []; 
    } 
    //enqueue element
    enqueue(element){
        this.items.push(element);
    }
    //pop element
    dequeue(){
        if(this.isEmpty()) {
            return "Underflow";
        }
        return this.items.shift();
    }
front(){
        if(this.isEmpty()) {
            return "No elements available";
        }
        return this.items[0];
    }
    isEmpty(){
        return this.items.length===0;
    }
    
    printQueue(){
        let str = "";
        for (let i = 0; i < this.items.length; i++){
            str += this.items[i] + " ";
        }
        return str;
    }
}

let queue = new Stack();

queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);

console.log("queue elements: ", queue.printQueue());
console.log("dequeue elements: ", queue.dequeue());
console.log("Front elements: ", queue.front());
console.log("Is queue empty ", queue.isEmpty());

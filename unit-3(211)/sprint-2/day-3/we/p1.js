// es-6 Ecma script 6 ;
// 1.use of let and const 
// 2. arrow function

// let fun =(a)=>{
//     console.log(this);
// };

// console.log(fun(5));    ?it sent you the global object

// let arr1= [1,2,3,4]
// let arr2= [1,2,3,4]

// let arr = [...arr1,...arr2]
// console.log(arr); // output [1,2,3,4,1,2,3,4]

// best practice 


class Stack {
    #s;
    constructor() {
        this.#s=[];
        this.length=0;
    };

    get value() {
        return this.#s;
    }
    push(value){
        this.#s.push(value);
        this.length++;
    }
    pop() {
        this.#s.pop();
        this.length--;
    }
};

let s1 = new Stack();
s1.push(1);
s1.push(2);
s1.push(3);
s1.push(4);
console.log(s1.value); 
// s1.pop();
// s1.pop();
// console.log(s1); 
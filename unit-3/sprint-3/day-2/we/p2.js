

// class students {
//     constructor(n,b){
//         this.name = n;
//         this.batch="web-19";
//     }
// }
// let s1=new students('vikash');

// console.log('s1:',s1);



// instance methods

// blueprint [object1,object2,object3]


class stack{
    constructor(){
        this.length = 0;
        this.stack = [];
    }

    // collect all params in the array via spread operator
    push(...arr){
        // console.log('arr',arr);

        // access all the element so we can use :
        arr.forEach( el => {

            // push
            let index = this.length;
            this.stack[index] = el;

            this.length++;
        });
    }


    remove(...arr){
        let index = this.length -1;
        delete this.stack[index];

        this.stack.length--;   //cheak?
        
        // this.length--; //cheak?
    }



}
let s1=new stack();

s1.push(1,2,3,4,5,6,7,8,9,10000); 

s1.remove();

console.log('s1',s1);




// ------- push -------

class stack{
    constructor(){
        this.length = 0;
        this.New_stack = [];
    }
    thelo(...arr){

        arr.forEach(element => {
            this.New_stack.push(element);
            this.length++;
        });
        return this.New_stack;
    }
    hatao(){
        
        let val=this.New_stack.pop();
    
        this.length--
    
    return newval;
}
    
}

stack1 = new stack();

stack1.thelo(1,2,3,4,5,6);
stack1.hatao();
// stack1.hatao();
console.log('stack1',stack1);

// ------pop -------

// class salah{
//     constructor(){
//         this.length = 0;
//         this.hatao_stacks = [];
//     }
   
// }

// stack2 = new salah();
// stack2 = push(1,2,3,4);
// stack2.hatao();
// console.log('stack2',stack2);

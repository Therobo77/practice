
// emplimen es6-class in stack


class stack{
    constructor(){
        this.length = 0;
        this.stack_contents = [];
    }
    push (...el){
        // el should be an array 
        el.forEach(element => {
        this.stack_contents.push(element);
        this.length++;
        });
        return this.stack_contents;
    }

    remove(){
       let removed_value = this.stack_contents.pop();
        this.length--;

        return removed_value
        // console.log(removed_value);
    }
}
let stack1 = new stack();
stack1.push(1,2,3,4);
// stack1.remove();
console.log("stack1: ", stack1);


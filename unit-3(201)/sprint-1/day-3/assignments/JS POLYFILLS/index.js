
// ------------ My Reduce Function ----------------


let arr = new Array(1,2,3,4);

let arr2 = [1,2,3,4];

// console.log(arr);

// Array.prototype.myreduce = function() {

    let sum=0;

    // let elem = this.length;


    for(let i = 0; i < arr.length; i++){

        sum+=arr[i];
    }

    // console.log(sum);
// }                                               


// arr.reduce();

console.log(sum);
function person(name){
    this.name=name;
}

let p1 = new person('andy');
p1.prototype.print = function(){
    console.log(this.name);

};
p1.print();

// const mypromise =new Promise((res,rej)=>{

//     res('hii');
// })
// console.log(mypromise)

// console.log(typeof undefined);

// const arr = ['h','y','n','o'];

// let [a,b,c] = arr;
// console.log(c)

// let p =(a,...b)=>{
    
// }
// p(3,'abc','vnndff');


// console.log('a'-'10');

// function car(name,price){
//     this.name=name;
//     this.price=price;
   
// }
// function truc(){
//     car.call(this,'alto','12l');
//     this.fuel = 'dsl';
// }
// console.log(new truc().name);

// const sum = new function('a','b','r')

// console.log(sum(2,4));

// var a;
// function x(){
//     a=10;
// }
// console.log(a);

// let fun =(a,...b)=>{
//     return a*b.length;
// }

// console.log(fun(2,'abcrrrr','errjhbh'));

// console.log(`${a} vika`);

// let a = true;

// var a = 10;
// {
//     var a=20;
// }

// const a = {m: 100};
// const b =Object.create(a);
// const c = Object.create(b);

// console.log(c.m);

// let a =[];
// for(let i=1; i<5; i++) {
//     a.push(()=>{
//         console.log(i);
//     });
// }
// a.forEach((el)=>el())

// let a = [1,2,3,4,5];
// console.log(typeof a);

// const a=['a', 'b', 'c'];
// const e=[0,1,2];
// a.push.apply(a,e);
// console.log(a);

// {
//     console.log(a);
//     console.log(b);

//     var a=10;
//     let b=10;
// }

// let a={}
// let b={}
// console.log(a==b);

// function p(){
//     console.log(this);
// }
// p()

var p = ()=>{
    var n = 'nitin';
    return function(){
        return n;
    }
}
console.log(p()());

const n = [1,6,2,3,8]

const m =Math.m.apply(null,n)
console.log(m);


// const a = new Array(4).fill([]);

// a[2].push(5);

console.log(a);
var a = 1;
setTimeout(()=>{
    console.log(a);
},2)


// for(let i = 0; i < 10; i++){}
// a++;

// console.log(20||10 && 0||11);

// let s = 'massjs'
// let a = [...s];
// console.log(a);

const a = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21]
const ab= [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21 ]
const aas = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21]



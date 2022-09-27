// 


//     console.log('a')
    
//     ctgr();
// }
// formA()



// function ctgr(){
//        
// }

// constructor function

function pr (i,n,p,c){
    this.i = image;
    this.n = name;
    this.p = price;
    this.c = cetogary;
}

let arr=[];

function submit(){
    console.log('submit');

    let image = document.getElementById('image').value;
    let name= document.getElementById('prn').value;
    let price = document.getElementById('prp').value;
    // let cat = document.getElementById('ctgra').value;

    let product = new pr(image,name,price)

    arr.push(product);

    console.log('res',arr);
}

let form = document.getElementById('form');


// let ob = new pr();

let ctgrp = ()=>{
    let cat = document.getElementById('ctgra').value;
    if(cat==='shoes'){
         console.log('shoes');
        
    }

    else if(cat==='tshirt'){
        console.log('tshirt');
    }
    else if(cat==='trouser'){
        console.log('trouser');
    }
}

// let arr = JSON.parse(localStorage.getItem('shoes')) || [];


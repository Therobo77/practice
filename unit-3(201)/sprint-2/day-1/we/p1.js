// console.log(1);
// // console.log(2);
// // console.log(3);
// // console.log(4);


// for(let i = 0; i < 10; i++) {
//     console.log(i);
// }

// // console.log(5);
// // console.log(6);
// // console.log(7);
// console.log(8);
// console.log(9);


// --------------------setTimeout-----------------


// setTimeout(function() {  console.log(1); }, 1000);   // 10 seconds  


let h1 = document.getElementById('count');



let count =11;

function timer(){

    let inp = document.getElementById('text').value;

    console.log(inp);
    count--;

    if(inp==='he bhagwan'){

        alert('he bhagwan');

        clearInterval(id);
    }

    // else{
        // alert('pagal ho tum');
    // }

    h1.innerHTML = count;

    if(count == 0) {

        clearInterval(id);

    }
}

let id = setInterval(timer, 1000);



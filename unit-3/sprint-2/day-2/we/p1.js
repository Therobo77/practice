
// https://cdn.dribbble.com/users/1154535/screenshots/3288650/dribbble-success-2.gif



function bankserver(){
    return true;  //false
}


let payment_promise= new Promise (function (resolve,reject){
      let pin =bankserver();

      setTimeout(function(){
        if(pin){
            resolve("Payment Success");
          }else{
            reject("Payment Failure");
          }
    },2000);     
});
let Image=document.getElementById("pay_img");


// payment_promise.then(function (payment){
//     console.log(payment);
//     Image.src="https://cdn.dribbble.com/users/1154535/screenshots/3288650/dribbble-success-2.gif"
// });

// payment_promise.catch(function (error){
//     console.log(error);
//     Image.src="https://theviraler.com/wp-content/uploads/2020/03/funny-epic-fails-07.gif";
// });    
// //console.log(payment_promise);

async function hello() {
    try {
        let res= await payment_promise;
        console.log(res);
        Image.src="https://cdn.dribbble.com/users/1154535/screenshots/3288650/dribbble-success-2.gif"
    }
    catch (error){
        console.log(error);
        Image.src="https://theviraler.com/wp-content/uploads/2020/03/funny-epic-fails-07.gif";
    }
}

hello();
















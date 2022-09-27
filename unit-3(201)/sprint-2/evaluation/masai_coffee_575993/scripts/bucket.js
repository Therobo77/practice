// On clicking remove button the item should be removed from DOM as well as localstorage.
let arr = JSON.parse(localStorage.getItem('coffee')) || [];
console.log('arr', arr);
let sum=0;
arr.forEach(function(elem,index){

    sum+=elem.price;

    let amount = document.getElementById('total_amount')
    amount.innerText = sum;

    let cartItems=document.getElementById("bucket")
    let box=document.createElement("div");

        let image=document.createElement("img");
        image.src=elem.image
        let price=document.createElement("h1");
        price.innerText=elem.price

        let remove=document.createElement("button");
        remove.innerText="remove"
        remove.addEventListener("click",function(){
            dlt(elem,index)
        })

        box.append(image,price,remove)
        cartItems.append(box)

 
    // let cart_T=document.getElementById("cart_total")
    // cart_T.innerText= sum=sum+elem.price;
    // console.log(cart_T)
})

function dlt(elem,index){
    arr.splice(index,1)
    localStorage.setItem("coffee",JSON.stringify(arr))
    window.location.reload()

}


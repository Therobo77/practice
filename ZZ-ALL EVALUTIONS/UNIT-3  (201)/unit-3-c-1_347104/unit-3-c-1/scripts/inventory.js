

let product = JSON.parse(localStorage.getItem('products')) || [];

let container=document.getElementById("all_products");

product.forEach(function(elem,index){

    let main = document.createElement("div");

    let photo = document.createElement("div");
    let image = document.createElement("img");
    image.src =elem.image;

    photo.append(image);

    let type = document.createElement("h3");
    type.innerText = `TYPE: ${elem.type}`;

    let price = document.createElement("h4");
    price.innerText = `PRICE: ${elem.price}`;

    let desc= document.createElement("p");
    desc.innerText = `DESCRIPTIONS: ${elem.desc}`;

    let remove = document.createElement("button");
    remove.innerText = "remove";
    remove.style.backgroundColor = "red";

    remove.addEventListener("click", () => {

        khatam(index);
    });



    main.append(photo,type,price, desc,remove);

    container.append(main);
});

function khatam(index) {

    product.splice(index, 1);

    localStorage.setItem('products',JSON.stringify(product));


    
    window.location.reload();

    
}

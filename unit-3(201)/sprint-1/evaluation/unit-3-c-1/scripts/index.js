//store the products array in localstorage as "products"
function Allproducts (t,d,p,i){

    this.type = t;

    this.desc =d;

    this.price = p;

    this.image = i

} 


let product = JSON.parse(localStorage.getItem('products')) || [];



 function Vsubmit(event){

    event.preventDefault();

    let form = document.getElementById('products');

    type = form.type.value;

    desc = form.desc.value;

    price = form.price.value;

    image = form.image.value;

    let prdtc = new Allproducts(type, desc, price, image);

    product.push(prdtc);

    localStorage.setItem('products', JSON.stringify(product));

    

    window.location.reload();

    // console.log(product);

 }

//  Vsubmit()
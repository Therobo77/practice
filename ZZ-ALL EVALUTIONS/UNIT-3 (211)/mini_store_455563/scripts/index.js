// Store the items added to the cart into local-storage with key as cart.

/*
API:- https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-products?limit=10&page=1
- Change the page number to implement pagination. (e.g. page=2)
- There are total 4 pages only.
*/
let page =1;
let getData = async (page) =>{
    let url = `https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-products?limit=10&page=${page}`

    let res = await fetch(url);
    let data = await res.json();
    renderdata(data.data);
    console.log(data);
}
getData(page);
let next = () =>{
    if(page<4){
        page++;
    getData(page);
    } 
}
let previous = () =>{
    if(page>=2){
        page--;
    getData(page);
    }
}

let renderdata = (array) => {

    let cont = document.getElementById('items');
    cont.innerHTML = null;

    array.forEach((el) => {
        let main = document.createElement('div');
        main.setAttribute('class', 'item');

        let photo = document.createElement('img');
        photo.src = el.image;

        let b= document.createElement('p');
        b.innerText = el.brand;

        let t= document.createElement('p');
        t.innerText = el.title;

        let p= document.createElement('p');
        p.innerText = el.price;

        let btn =document.createElement('button');
        btn.innerText = `add to cart`;
        btn.setAttribute('class',"add_to_cart")
        btn.onclick = () =>{
            added(el);
        }

        main.append(photo,b,t,p,btn);
        cont.append(main);
    });
}

let mycart = JSON.parse(localStorage.getItem('cart')) || [];

let count = document.getElementById('cart_count');
count.innerHTML = mycart.length;

let added = (el) =>{
    mycart.push(el);
    localStorage.setItem('cart', JSON.stringify(mycart));
    console.log('added',mycart);

    count.innerHTML = mycart.length;
}


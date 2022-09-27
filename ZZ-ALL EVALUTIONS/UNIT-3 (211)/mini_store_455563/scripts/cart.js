let array = JSON.parse(localStorage.getItem('cart'));

let count = document.getElementById('cart_count');
count.innerHTML = array.length;

let renderdata = (array) => {

    console.log(array);
    let cont = document.getElementById('items');
    cont.innerHTML = null;

    array.forEach((el,i) => {
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
        btn.innerText = `Remove`;
        btn.setAttribute('class',"remove")
        btn.addEventListener('click', function(){
            array.splice(i,1);
            localStorage.setItem('cart',JSON.stringify(array));
            count.innerHTML = array.length;
            window.location.reload();
        });

        main.append(photo,b,t,p,btn);
        cont.append(main);

    });
}

renderdata(array)


let checkout = () =>{
    let nam = document.getElementById('name').value;
    let addres = document.getElementById('address').value;

    alert(`${nam}, your order is successfull!`)
}
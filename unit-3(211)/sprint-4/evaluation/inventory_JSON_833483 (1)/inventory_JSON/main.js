

const url ="https://young-plains-09698.herokuapp.com/product";

let getdata = async () =>{
    let res = await fetch(url);
    res = await res.json();
    console.log(res);
    renderDom(res);
    
};

getdata();

let add_product = async () =>{

    let name = document.getElementById("name").value;
    let price = document.getElementById("price").value;
    let description = document.getElementById("description").value;
    let delivery = document.getElementById("delivery").value;
    let image = document.getElementById("image").value;

    let pr_data ={name,price,description,delivery,image};

    document.getElementById("name").value=null;
    document.getElementById("price").value=null;
    document.getElementById("description").value=null;
    document.getElementById("delivery").value=null;
    document.getElementById("image").value=null;


    let res = await fetch(url,{
        method: "POST",
        body: JSON.stringify(pr_data),
        headers: {
            'Content-Type': 'application/json'
        },
    });

    res = await res.json();
    getdata();

   
}

let renderDom = (data) => {

    let cont = document.getElementById('container');
    cont.innerHTML = null;

    data.forEach(({name,price,description,delivery,image,id}) => {
        let img_cart = document.createElement('div');
        img_cart.setAttribute('class', 'item');

        let photo = document.createElement('img');
        photo.src = image;

        let nam = document.createElement('h3');
        nam.innerText = name;

        let pric = document.createElement('h5');
        pric.setAttribute('class', 'product_price');
        pric.innerText = price;

        let del= document.createElement('h5');
        pric.setAttribute('class', 'product_delivery');
        del.innerText = `Deliverd By : ${delivery}`;

        let desc = document.createElement('p');
        desc.innerText = description;

        let updt_btn = document.createElement('button');
        updt_btn.setAttribute('class', 'update_price');
        updt_btn.innerText = "UPDATE PRICE";
        updt_btn.addEventListener('click',()=>{
            updt_price(id);
        });

        let dlt_btn = document.createElement('button');
        dlt_btn.setAttribute('class', 'remove_item');
        dlt_btn.innerText = "REMOVE";
        dlt_btn.addEventListener('click',()=>{
            dlt_item(id);
        });

        img_cart.append(photo,nam,pric,del,desc,updt_btn,dlt_btn);
        cont.append(img_cart);
    });
}

let updt_price = async (id) => {

    let data1=await fetch(`${url}/${id}`)
        data1=await data1.json()
        let price=prompt("Enter New Price");
        let data={price}
        let res=await fetch(`${url}/${id}`,{
            method:"PATCH",
            body:JSON.stringify(data),
            headers:{
                "Content-Type":"application/json",
            },
        });
        getdata();
        res=await res.json();
        //console.log(res)
};


let dlt_item = async (id) => {

    let res = await fetch(`${url}/${id}`,{
        method: 'DELETE',
        headers: {'Content-Type': 'application/json'},
    });
    getdata();
    res = await res.json();

};

let sort_LTH = async () => {
    // let res = await fetch(`${url}?_sort=price&_order=asc`);
    // res = await res.json();

    // renderDom(res);
    // console.log("done",res);

    let res=await fetch(`${url}?_sort=price&_order=asc`)
    let data= await res.json()
    renderDom(data)
//    console.log(data)
};
let sort_HTL = async () => {
    let res = await fetch(`${url}?_sort=price&_order=desc`);
    res = await res.json();

    renderDom(res);
};
let greater_than = async () => {
    let res = await fetch(`${url}?price_gte=4000`);
    res = await res.json();

    renderDom(res);
};
let less_than = async () => {
    let res = await fetch(`${url}?price_lte=4000`);
    res = await res.json();

    renderDom(res);
};



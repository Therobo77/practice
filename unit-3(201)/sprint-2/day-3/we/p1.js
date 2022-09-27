// let url = 'https://fakestoreapi.com/products/category/jewelery';

url = 'https://fakestoreapi.com/products';

let x = fetch(url);




// x.then(function (res){
//     return res.json();
//     // console.log('res',res);
// }).then(function (res){
//     return res.json();
//     // console.log("res2" ,res);
// })
// .catch(function (err){
//     console.log(err);
// });

let data;

async function getdata(){

    try{
        let res = await x;
        console.log('res',res);

      data = await res.json(); 

        apendJaldi(data)

        console.log('data',data);
    } 
    catch(err){
        console.log('err',err);
    }
}

getdata();


///---apend data ----\

let cont = document.getElementById('container');

function apendJaldi(data){

    cont.innerHTML = [];

    data.forEach(function(el){

        main = document.createElement('div');

        let image = document.createElement('img');
        image.src = el.image;

        let price = document.createElement('h3');
        price.innerText = `MRP: Rs${el.price}`;

        let title = document.createElement('h5');
        title.innerText = el.title;

        let desc = document.createElement('p');
        desc.innerText = el.description;



        main.append(image,price,title,desc);

        cont.append(main)

    });
};

function sortlh(){
    let copy_Data = data;
    copy_Data = copy_Data.sort(function(a, b){

        return a.price-b.price;

    })
    console.log('hogar');
    apendJaldi(copy_Data);
}



function sorthl(){
    let copy_Data = data;
    copy_Data = copy_Data.sort(function(a, b){

        return b.price-a.price;

    })
    apendJaldi(copy_Data);
}


// ---- filter -------- 

function filterkaro(){

    let copy_Data = data;

    let query= document.getElementById('inpt').value;
    // query.toLowerCase()

    console.log(query);
//    copy_Data = copy_Data.filter(function(el){
   copy_Data = copy_Data.filter(function(el){

        return el.title.toLowerCase().includes(query);
    })

    apendJaldi(copy_Data); 
}

// filterkaro();

// spread oprator --------

//  copy_Data =[...data]


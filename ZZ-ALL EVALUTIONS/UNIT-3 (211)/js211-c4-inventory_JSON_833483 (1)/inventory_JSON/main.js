

//API:https://masai-api.herokuapp.com/hotels/search?city=goa
// http://localhost:3000/api

const url = 'https://young-plains-09698.herokuapp.com/products';
// let page = 1;

let getData = async () => {
    let res = await fetch(`${url}`);
    // let res = await fetch(`${url}?_limit=2&_page=${page}`);
    res = await res.json();
    console.log(res);
    rendorDom(res);
};
getData();

let add_product= async ()=>{
    let name = document.getElementById('name').value;
    let desc = document.getElementById('description').value;
    let delivery = document.getElementById('delivery').value;
    let image = document.getElementById('image').value;

    let user_data = {
        name,
        desc,
        delivery,
        image,
        status:true,
    }

    let res = await fetch(url,{
        method: 'POST',
        body: JSON.stringify(user_data),
        headers: {
            'Content-Type': 'application/json',
        },
    });
    getData();
}

let rendorDom = (data) => {
    let cont = document.getElementById('container');
    cont.innerHTML = null;
    data.forEach(({name,desc,delivery,image,status,id}) => {
        let div = document.createElement('div');

        let photo = document.createElement('img');
        photo.src = image;

        let description = document.createElement('p');
        description.innerText = desc;

        let del = document.createElement('h5');
        del.innerText = delivery;

        let h3 = document.createElement('h3');
        h3.innerText = name;

        let s= document.createElement('p');
        s.innerText = status;

        let btn = document.createElement('button');
        btn.innerText = "Update Name";
        btn.onclick = () => {
            update_pr(id);
        };

        let dlt_btn = document.createElement('button');
        dlt_btn.innerText = "DELETE";
        dlt_btn.onclick = () => {
            delete_pr(id);
        };

        div.append(photo,h3,del,description,s,btn,dlt_btn);
        cont.append(div);
    });
}

let update_pr = async (id) => {
    //  two option for update_Age
    // 1.Create a model;
    // 2. Window.prompt ;

    const nw_name = window.prompt('Enter your name');

    let new_name = { name: nw_name};

    let res = await fetch(`${url}/${id}`,{
        method: 'PATCH',
        body: JSON.stringify(new_name),
        headers: {
            'Content-Type': 'application/json',
        },
    });
    getData();
};

let delete_pr = async (id) => {
    //  two option for update_Age
    // 1.Create a model;
    // 2. Window.prompt ;
    
    let res = await fetch(`${url}/${id}`,{
        method: 'DELETE',
        // body: JSON.stringify(new_name),
        headers: {
            'Content-Type': 'application/json',
        },
    });
    getData();
};

//  SORTING  in CRUD 

let sort_LTH = async () => {

    let res = await fetch(`${url}?_sort=name&_order=asc`);
    // let res = await fetch(`${url}?_limit=2&_page=${page}_sort=age&_order=asc`);
    res = await res.json();

    rendorDom(res);
};

let sort_HTL = async () => {
    let res = await fetch(`${url}?_sort=name&_order=desc`);
    // let res = await fetch(`${url}?_limit=2&_page=${page}_sort=age&_order=desc`);
    res = await res.json();

    rendorDom(res);
};


















// PAGINATION IN CRUD 

// let next = async () => {
//     if(page ===6){
//         return;
//     }
//     page++;
//     console.log(page);
//     getData();
// };

// let previous = async () => {
//     if(page ===0){
//         return;
//     }
//     page--;
//     console.log(page);
//     getData();
// };























// // // Use deployed URL.
// // const url ='https://evening-inlet-14336.herokuapp.com/product';
// const url ='https://evening-inlet-14336.herokuapp.com/employe';

// let getData = async () => {
//     let res = await fetch(url);
//     res= await res.json();
//     console.log(res);
//     rendorDom(res);
// };

// getData();

// let add_product = async ()=>{
    // let name = document.getElementById('name').value;
    // let desc = document.getElementById('description').value;
    // let delivery = document.getElementById('delivery').value;
    // let image = document.getElementById('image').value;

//     let pr_Data={
//         name,
//         desc,
//         delivery,
//         image,
//     };
//     console.log(pr_Data);
//     let res = await fetch(url,{
//         method: 'POST',
//         body: JSON.stringify(pr_Data),
//         headers: {
//             'Content-Type': 'application/json'
//         },
//     });
//     // console.log(res);
//     getData();
// };




// let sort_LTH =()=>{
//     console.log("_LTH");
// };
// let sort_HTL =()=>{
//     console.log("sort_HTL");
// };
// let  greater_than=()=>{
//     console.log("greater_than");
// };
// let less_than =()=>{
//     console.log("less_than");
// };


// let rendorDom = (data) => {
//     let cont = document.getElementById('container');
//     cont.innerHTML = null;
//     data.forEach(({name,desc,delivery,image}) => {

//         let div = document.createElement('div');

//         let img = document.createElement('img');
//         img.src = image;

//         let nam = document.createElement('h3');
//         nam.innerText = name;

//         let desr = document.createElement('p');
//         desr.innerText = desc;

//         let del = document.createElement('h5');
//         del.innerText = delivery;

//         div.append(img,nam,del,desc);
//         cont.append(div);
//     });
// }

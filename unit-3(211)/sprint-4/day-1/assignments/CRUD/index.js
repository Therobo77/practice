//API:https://masai-api.herokuapp.com/hotels/search?city=goa
// http://localhost:3000/api

const url = 'https://young-plains-09698.herokuapp.com/employee';
let page = 1;

let getData = async () => {
    let res = await fetch(`${url}?_limit=2&_page=${page}`);
    res = await res.json();
    console.log(res);
    rendorDom(res);
};
getData();

let ADD_EMPLOYEE= async ()=>{
    let name = document.getElementById('name').value;
    let age = document.getElementById('age').value;

    let user_data = {
        name,
        age,
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
    let cont = document.getElementById('cont');
    cont.innerHTML = null;
    data.forEach(({name,age,status,id}) => {
        let div = document.createElement('div');
        let h3 = document.createElement('h3');
        h3.innerText = name;

        let p = document.createElement('p');
        p.innerText = age;

        let s= document.createElement('p');
        s.innerText = status;

        let btn = document.createElement('button');
        btn.innerText = "Update Age";
        btn.onclick = () => {
            update_Age(id);
        };

        div.append(h3,p,s,btn);
        cont.append(div);
    });
}

let update_Age = async (id) => {
    //  two option for update_Age
    // 1.Create a model;
    // 2. Window.prompt ;

    const value = window.prompt('Enter your Age');
    const value1 = window.prompt('Enter your name');

    let new_age = {age: value,
                    name: value1};

    let res = await fetch(`${url}/${id}`,{
        method: 'PATCH',
        body: JSON.stringify(new_age),
        headers: {
            'Content-Type': 'application/json',
        },
    });
    getData();
};

//  SORTING  in CRUD 

let sort_LTH = async () => {

    let res = await fetch(`${url}?_sort=age&_order=asc`);
    // let res = await fetch(`${url}?_limit=2&_page=${page}_sort=age&_order=asc`);
    res = await res.json();

    rendorDom(res);
};

let sort_HTL = async () => {
    let res = await fetch(`${url}?_sort=age&_order=desc`);
    // let res = await fetch(`${url}?_limit=2&_page=${page}_sort=age&_order=desc`);
    res = await res.json();

    rendorDom(res);
};

// PAGINATION IN CRUD 

let next = async () => {
    if(page ===6){
        return;
    }
    page++;
    console.log(page);
    getData();
};

let previous = async () => {
    if(page ===0){
        return;
    }
    page--;
    console.log(page);
    getData();
};
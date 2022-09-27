let getData = async () => {

    let res = await fetch(`http://localhost:3000/posts`);
    // console.log('res', res);
    let data = await res.json();
    appendData(data);
    showButtons(data);
    console.log('data', data);
}

getData();

let cont =document.getElementById('container')

function appendData(data) {

    data.forEach(el => {
            // ({title,author})
        let div = document.createElement('div');
        
        let titl = document.createElement('p');
        titl.innerText = `TITLE:-${el.title}`;

        let authr = document.createElement('p');
        authr.innerText = `AUTHOR:-${el.author}`;

        div.append(titl,authr);
        cont.append(div)
        
    });
}


// ------- pagination------------

const showButtons = (data) => {
    let button_div = document.getElementById('buttons');
    let  results = data.length;
    let perPage = 3;

    console.log('data.length',results);

    let buttons = Math.ceil(results / perPage);

    for(let i=1; i<=buttons; i++) {
        let button = document.createElement('button');
        button.innerText = i;
        button.onclick = function(){
            pagination();
        }

        button_div.append(button);
    }
}


//  ---- working of buttons ------

let  pagination = ()=>{
    console.log('pagination button clicked');
}
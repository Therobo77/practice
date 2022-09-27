let url = `https://jsonplaceholder.typicode.com/comments`

let data =[];

let getData = async () =>{
    let res = await fetch(url)
    res = await res.json();
    return res;
};

let main = async ()=>{
    data = await getData();
    // console.log(data);
    renderDom(0);
    showbuttons(1)
    console.log(data[0]);
}
main();

let renderDom = (index) => {
    let cont = document.getElementById('container');
    cont.innerHTML = null;

    let start = 10*index;
    let end = start + 10 ;

    let per_Page_Data = data.splice(start, end);

    per_Page_Data.forEach(({id,name}) => {
        
        let main = document.createElement('div');

        let p1 = document.createElement('p');
        p1.innerText = id;

        let p2 = document.createElement('p');
        p2.innerText = name;

        main.append(p1,p2);
        cont.append(main);
    });
    showbuttons(index+1)
}


let showbuttons =(page) => {
    let btns = document.getElementById('btncont');
    btns.innerHTML = null;
    // cont.innerHTML = null;
    let start = 1 ;

    if(page>4){
        start = page - 1 ;
    }

    for(let i = start ; i <= start+9; i++) {
        let b = document.createElement('button');
        b.innerText = i;
        b.onclick = ()=>{
            renderDom(i-1);
           
        }
        btns.append(b);
    }
    
}
// showbuttons()
































































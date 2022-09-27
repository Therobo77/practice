
let search = document.getElementById("query");

search.addEventListener("keypress", function(event) {
	 if (event.key === "Enter") {
        search_here()
     }
});

let mdata;
let search_here = async() => {
    let quer = search.value;
    let cr_url =`https://masai-api.herokuapp.com/hotels/search?city=${quer}`
    let res = await fetch(cr_url);
    res =await res.json();
    console.log('res',res.hotela);
    rendorDOM(res.hotels);
     mdata = (res.hotels);
};
// img,tit,prc,rating,ac/nac
let rendorDOM = (array)=>{
    let cont = document.getElementById('hotels_list');
    cont.innerHTML = null;

    array.forEach((el) => {
        let main = document.createElement('div');
        main.setAttribute('id', 'hotel');
        
        let image = document.createElement('img');
        image.src =el.Images.one;

        let title = document.createElement('h2');
        title.innerText = el.Title;
    
        let prc = document.createElement('h3');
        prc.innerText = el.Price;

        let rating = document.createElement('h4');
        rating.innerText = el.Rating;

        let ac = document.createElement('h4');
        ac.innerText = `AC:${el.Ac}`;

        add_now=document.createElement('button');
        add_now.innerText = 'Add now';
        add_now.setAttribute('class','book');
        add_now.addEventListener('click', function(){
            chkhere(el);
        })

        main.append(image,title,prc,rating,ac,add_now);
        cont.append(main);
    });
}
let loginv = JSON.parse(localStorage.getItem('login'));
let chkhere = (el)=>{
    console.log(loginv);
    if(loginv===true){
   localStorage.setItem('Mhotels', JSON.stringify(el));
   console.log(el)
   window.location.href = 'checkout.html';
    }
    else{
        alert("Log In to continue!")
    }
};

let LTH =() => {
    // console.log('nd',mdata);
    mdata.sort(function(a,b){
        return a.Price - b.Price;
    })
    rendorDOM(mdata);
};
let HTL =() => {
    mdata.sort(function(a,b){
        return b.Price - a.Price;
    })
    rendorDOM(mdata);
};
let AC =() => {
    
    let nd=mdata.filter((el)=>{
        return el.Ac === true;
    })
    rendorDOM(nd);
    console.log('abc',nd);
};
let NON_AC =() => {
    
    let nd=mdata.filter((el)=>{
        return el.Ac !== true;
    })
    rendorDOM(nd);
    console.log('abc',nd);
};
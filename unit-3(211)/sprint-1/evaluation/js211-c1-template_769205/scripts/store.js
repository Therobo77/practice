

let allProducts = JSON.parse(localStorage.getItem('mobile_data'));

let cont = document.getElementById('mobile_list');

let main = ()=>{

    appenddata(allProducts);
}

let appenddata = (array) =>{

    cont.innerHTML = null;

    array.forEach((el,i) => {
        
        let main = document.createElement('div');
        main.setAttribute('class', 'mobile');

        let photo = document.createElement('img');
        photo.src = el.image;

        let brand = document.createElement('h2');
        brand.innerText = el.brand;

        let name = document.createElement('h3');
        name.innerText = el.name;

        let price = document.createElement('p');
        price.innerText = el.price;

        let removed = document.createElement('button');
        removed.innerText = "Remove Product";
        removed.setAttribute('class', 'remove');

        removed.addEventListener('click', function() {
            array.splice(i,1)

            localStorage.setItem('mobile_data', JSON.stringify(allProducts));
            window.location.reload();
        });

        main.append(photo,brand, name, price, removed );
        cont.append(main);
    });

}

main();

let data;

let sortlth = document.getElementById('sort_lth');
// sortlth.addEventListener('click', sortLth);

let sortLth =  () =>{
data = allProducts.sort((a,b) => {
    return a.price - b.price;
});

appenddata(data);

};


let sorthtl = document.getElementById('sort_htl');
// sortlth.addEventListener('click', sortLth);

let sortHtl =  () =>{
data = allProducts.sort((a,b) => {
    return b.price - a.price;
});

appenddata(data);

};


let fltr = document.getElementById('select_filter');
fltr.addEventListener('change', selectFilter);

function selectFilter() {

    if (fltr.value=== "apple"){
        let ndata = allProducts.filter(function(el){
            return el.brand === "apple"
        })
        appenddata(ndata);
    }

    if (fltr.value=== "oneplus"){
        let ndata = allProducts.filter(function(el){
            return el.brand === "oneplus"
        })
        appenddata(ndata);
    }

    if (fltr.value=== "nokia"){
        let ndata = allProducts.filter(function(el){
            return el.brand === "nokia"
        })
        appenddata(ndata);
    }
}
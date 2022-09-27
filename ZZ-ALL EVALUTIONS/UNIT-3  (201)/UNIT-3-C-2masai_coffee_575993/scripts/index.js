// Add the coffee to local storage with key "coffee"
 // let url = 

  
 async function alldata(){

    try{
    let url = 'https://masai-api.herokuapp.com/coffee/menu'
    let res = await fetch(url)
    let data = await res.json()
    console.log(data)
    apendalldata(data.menu.data)
    }
    catch(error){
    console.log(error);
    }
    
    }
    alldata()
    

    
  let cont = document.getElementById('menu');

  function apendalldata(elem){

    elem.forEach(function(el){

      let main = document.createElement('div');
      

    let photo = document.createElement('div');
    let img = document.createElement('img');
    img.src = el.image;

    photo.append(img);


    let price = document.createElement('h2');
    price.innerText =el.price;

    let atb = document.createElement('button');
    atb.innerText = 'ad to bucket';
    atb.setAttribute('id', 'add_to_bucket');
    atb.addEventListener('click',function(){

      jodo(el);
    });

    main.append(photo,price,atb);

    cont.append(main);

    });

  }

  let arr = JSON.parse(localStorage.getItem('coffee')) || [];
  function jodo(el){
    arr.push(el);
    console.log('arr',arr);
    localStorage.setItem('coffee',JSON.stringify(arr)); 
    window.location.reload()
  }
  let count = document.getElementById('coffee_count')
  count.innerHTML = arr.length;

 
// API KEY=   `https://masai-mock-api.herokuapp.com/hotels/search?city=${query}`

let search = async()=>{
    let query= document.getElementById('query').value;
    let data = await getdata(query);
  }

  let getdata = async(query)=>{

    let url=`https://masai-mock-api.herokuapp.com/hotels/search?city=${query}`;

    let res = await fetch(url);
    let data = await res.json();
    console.log('vkl',data);
    localStorage.setItem('data', JSON.stringify(data));
    apend(data);
  };

  function apend(data){
    let list= document.getElementById("hotels_list");
    list.innerHTML = null;

    data.forEach((el) =>{

      let img = document.createElement("img");
      img.src = el.hotels.Images.one;

      let h4 = document.createElement("h4");
      h4.innerText = `PRICE: ${el.hotels.Price}`;

      let ac=document.createElement("h4");
      ac.innerText =`Ac: ${el.hotels.Ac}`;

      let Rating=document.createElement("h3");
      Rating.innerText = `Rating: ${el.hotels.Rating}`;

      let btn= document.createElement("button");
      btn.innerText = 'book your room now';

      let div=document.createElement("div")
      div.append(img,h4,ac,Rating,btn);
       
      list.append(div);
    });

  }
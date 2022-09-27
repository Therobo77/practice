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
    // data=data.hotels;     arraylocalSt
    apend(data.hotels);
  };
  
  function apend(data){
    let list= document.getElementById("hotels_list");
    list.innerHTML = null;

    data.forEach((el) =>{

      let img = document.createElement("img");
      img.src = el.Images.one;

      let h4 = document.createElement("h4");
      h4.innerText = `PRICE: ${el.Price}`;

      let ac=document.createElement("h4");
      ac.innerText =`Ac: ${el.Ac}`;

      let Rating=document.createElement("h3");
      Rating.innerText = `Rating: ${el.Rating}`;

      let btn= document.createElement("button");
      btn.innerText = 'book now';
      btn.onclick = () => {
        let obj={
          Images:el.Images.one,
          price:el.Price,
          AC:el.Ac,
          Rating:el.Rating,
        }
        localStorage.setItem('book',JSON.stringify(obj))
      };

      let div=document.createElement("div")
      div.append(img,h4,ac,Rating,btn);
       
      list.append(div);
    });

  }
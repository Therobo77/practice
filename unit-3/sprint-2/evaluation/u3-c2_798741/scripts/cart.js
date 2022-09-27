
    const url="https://grocery-masai.herokuapp.com/items"


    fetch(url).then(function(response) {
        //console.log(response);
        return response.json();
    })
    .then(function(response) {
        //console.log(response);
        console.log(response); 
        append(response.data)
    
    })
    .catch(function(err) {
        console.log(err);   
    });
    
        function append(data) {
    
          let main = document.getElementById("main");
    
            data.forEach(function(el){
             
    
              let box=document.getElementById("box");
    
                let img=document.createElement("img");
                img.src = el.image;
    
                let name=document.createElement("h3");
                name.innerText = el.name;
    
                let val=document.createElement("h4");
                val.innerText = el.price;
                let btn = document.createElement("button");
                btn.innerText = "buy"
    
            
                box.append(img,name,val,btn);
                main.append(box);
            });
    
              
        }
    
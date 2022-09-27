
    let cont = document.getElementById("v-container");

    let AllMoviesArr = JSON.parse(localStorage.getItem('movie')) || [];
    
    // let cont = document.getElementById('v-container');
    console.log('arr',AllMoviesArr);
    
    AllMoviesArr.forEach(function(item,index) {
    
        let main =document.createElement("div");
    
        let photo = document.createElement('div');
        let image = document.createElement('img');
        image.src =item.imageUrl;
        photo.append(image);
    
        let details = document.createElement('div');
    
        let name =document.createElement('h2');
        name.innerText = `NAME: ${item.name}`;
    
        let rating =document.createElement('h3');
        rating.innerText = `rating: ${item.rating}`;
    
        let rdt =document.createElement('h4');
        rdt.innerText = `Release Date: ${item.releaseDate}`;
    
        details.append(name,rating,rdt);
    
    
        main.append(photo,details);
        cont.append(main);
    
        console.log("jdnh")
    
        
    });
    
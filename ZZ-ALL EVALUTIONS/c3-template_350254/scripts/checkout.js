let array = JSON.parse(localStorage.getItem('Mhotels'));

let detail = JSON.parse(localStorage.getItem('users'));

let rendorDOM = (el)=>{
    let cont = document.getElementById('hotel_details');
    cont.innerHTML = null;

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


        main.append(image,title,prc,rating);
        cont.append(main);
   
}
rendorDOM(array);

// let book =()=>{
//     let nam = document.getElementById('user_name').value;
//     alert(`${nam}, Your booking is successful!`)
// }



let book =()=>{
    setTimeout(fun =()=>{
        let nam = document.getElementById('user_name').value;
        alert(`${nam}, Your booking is successful!`)
    }, 5000);
};
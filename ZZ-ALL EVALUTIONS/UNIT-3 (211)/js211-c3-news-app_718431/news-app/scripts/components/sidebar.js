let details = JSON.parse(localStorage.getItem("user"));


let apendData = (el) =>{
    let side = document.getElementById('sidebar');
    side.innerHTML = null;

    let image = document.createElement('img');
    image.src =el.image;

    
    let name = document.createElement('h2');
    name.innerText = el.name;

    let email = document.createElement('h3');
    email.innerText = el.email;

    let country = document.createElement('h3');
    // country.innerText = el.country;
    if (el.country=='in'){
        country.innerText = 'INDIA';
        }
        else if (el.country=='us'){
        country.innerText = 'USA';
        }
        else if (el.country=='ch'){
        country.innerText = 'CHINA';
        }
        else if (el.country=='uk'){
        country.innerText = 'UK';
        }
        else if (el.country=='nz'){
        country.innerText = 'NEWZELEND';
        }

    
    side.append(image, name, email, country);
}

let sidebar = () => {
    return apendData(details);
}

export default sidebar;
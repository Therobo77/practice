function submitimage(){


    let url = document.getElementById('url').value;

    let image = JSON.parse(localStorage.getItem('image')) || [];

    image.push(url);

    localStorage.setItem('image', JSON.stringify(image));

}
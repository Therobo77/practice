
    function movies(n,d,i,r){
        this.name = n;
        this.releaseDate = d;
        this.imageUrl = i;
        this.rating = r;
    }

    AllMoviesArr = JSON.parse(localStorage.getItem('movies')) || [];

    // AllMoviesArr = [];

    function Data(event){

        event.preventDefault();
        let form = document.getElementById('form');

        name = form.name.value;
        releaseDate = form.date.value;
        imageUrl = form.url.value;
        rating = form.rating.value;

        let allMov = new movies(name, releaseDate, imageUrl, rating);

            AllMoviesArr.push(allMov);

            localStorage.setItem('movie', JSON.stringify(AllMoviesArr));

            // window.location.reload();

            console.log(AllMoviesArr);
    }
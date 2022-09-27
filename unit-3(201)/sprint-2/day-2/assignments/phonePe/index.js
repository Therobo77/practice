

// let input = document.getElementById('input').value;

// function peynow(event){

//     event.preventDefault();

//     let form = document.getElementById('form');

//     input = form.input.value;
//     // return true;

//     console.log('input :',input);

//     if(input===1234){

//         return true;
//     }
//     // else{
//     //     return false
//     // } 
// }


let image = document.getElementById('image');

function useThikkaro(){

    return true;
}

let mypromise = new Promise(function(resolve, reject) {

    let data = false;

    setTimeout(function() {

    data = useThikkaro();
    // data = peynow();

    if(data){
        resolve('work done');
    }
    else{
        reject('work fail');
    }

},5000);
})

// console.log('mypromise', mypromise);

mypromise.then(function(result){
    image.src = 'https://cdn.dribbble.com/users/39772/screenshots/2342267/sending-sherlok2.gif'
})
.catch(function(err){
    image.src = 'https://media4.giphy.com/media/8Bkr9UJQTuqEnzkOae/200w.webp?cid=ecf05e47tu4a6yaw966o9db410eby2z7njkazx548o0sxkfu&rid=200w.webp&ct=g'
})
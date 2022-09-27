let img = document.getElementById('img');



let num = Math.random()*10000; 

// console.log(num);


function GetData(){

    return true;
}

// console.log(GetData());


let mypromise = new Promise( function(resolve, reject){

   let data = false;

   data = GetData()

   setInterval(function(){

   if(data){
    resolve('hua kya')
   }

   else{
    reject('nhi hoga')
   }

   }, num);

   
})

// console.log('mypromise', mypromise);


mypromise.then(function(res){

    console.log('res----', res);

    img.src = "https://media0.giphy.com/media/Q81NcsY6YxK7jxnr4v/200w.webp?cid=ecf05e47du9rfrb5n1wqylpwka83yq4zksqob66dao6h9zsx&rid=200w.webp&ct=g"
});

mypromise.catch(function(err){

    console.log('err', err);

    img.src ='https://media0.giphy.com/media/fxU7mSgy4A9pLwCI73/200.webp?cid=ecf05e4715zhlzamly1v2wqcqv7rskqg2d4ia9prviy82q9v&rid=200.webp&ct=g'
});
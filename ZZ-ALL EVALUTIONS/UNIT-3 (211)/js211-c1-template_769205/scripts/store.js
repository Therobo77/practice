
  let mypr = JSON.parse(localStorage.getItem('mobile_data'));

  let num = document.getElementById('num').innerText=mypr.length;
 let cont = document.getElementById('mobile_list');

 let main =()=>{
   appenddata(mypr)
 }

 function appenddata(array){
   cont.innerHTML=null;
    console.log('appenddata', mypr);
   array.forEach((el,i) => {
     
     let main = document.createElement('div');
     main.setAttribute('class', 'mobile');

     let img_url =document.createElement('img')
     img_url.src = el.image;

     let brand = document.createElement('h3');
     brand.innerText = el.brand;

     let name = document.createElement('h4');
     name.innerText = el.name;

     let price = document.createElement('h4');
     price.innerText = el.price;

     let remove = document.createElement('button');
     remove.innerText ='Remove';
     remove.setAttribute('class', 'remove');
     remove.addEventListener('click', function () {
      array.splice(i,1)
      localStorage.setItem('mobile_data',JSON.stringify(mypr))
     //  div.remove();
      window.location.reload();
     });

     main.append(img_url,brand,name,price,remove);
     cont.append(main);
   });
 }
 // appenddata(mypr)
main();
let data;
let LTH =()=>{
 // cont.innerHTML =null;
 console.log('LTH');
  data = mypr.sort((a,b)=>{
   return a.price -b.price;
 });
 appenddata(data)
}

let HTL =()=>{
 // cont.innerHTML =null;
 console.log('LTH');
  data = mypr.sort((a,b)=>{
   return b.price -a.price;
 });
 appenddata(data)
}

let fltr =document.getElementById('select_filter');
fltr.addEventListener('change',nfltr);

function nfltr(){
 
 if(fltr.value=='apple'){
   
   console.log('fltr');
   let ndata = mypr.filter(function(el){
     return el.brand == 'apple';
   })
   appenddata(ndata);
 }
 else if(fltr.value=='oneplus'){
   
   console.log('fltr');
   let ndata = mypr.filter(function(el){
     return el.brand == 'oneplus';
   })
   appenddata(ndata);
 }
 else if(fltr.value=='nokia'){
   
   console.log('fltr');
   let ndata = mypr.filter(function(el){
     return el.brand == 'nokia';
   })
   appenddata(ndata);
 }
}


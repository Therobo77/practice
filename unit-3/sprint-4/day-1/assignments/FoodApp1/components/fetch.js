let getData = async (url) => {
    let res= await fetch(url);
    let data = await res.json();

    return data.meals;
};

let getdata = async (url) =>{
    let res = await fetch(url);
    let data = await res.json();
    console.log(data);
}



let apend = (data, cont) => {

    data.forEach(({
        strMealThumb,
        strMeal,
        strInstructions,
        strIngredient1,
        strIngredient2,
        strIngredient3,
        strIngredient4,
        strIngredient5,
        strIngredient6,
        strIngredient7,
        strIngredient8,
        strIngredient9,
        strIngredient10,
        strMeasure1,
        strMeasure2,
        strMeasure3,
        strMeasure4,
        strMeasure5,
        strMeasure6,
        strMeasure7,
        strMeasure8,
        strMeasure9,
        strMeasure10,
    })=>{

        let img = document.createElement('img');
        img.src =strMealThumb;

        let mealname = document.createElement('h4');
        mealname.innerText = `"NAME:"${strMeal}`;

        let inst=document.createElement('h5');
        inst.innerText = `"INSTRUCTIONS:"${strInstructions}`;

        let mngmnt= document.createElement('p');
        mngmnt.innerText =`"PROCESS:"${strIngredient1}"-"${strMeasure1}","${strIngredient2}"-"${strMeasure2}","${strIngredient3}"-"${strMeasure3}","${strIngredient4}"-"${strMeasure4}","${strIngredient5}"-"${strMeasure5}","${strIngredient6}"-"${strMeasure6}","${strIngredient7}"-"${strMeasure7}","${strIngredient8}"-"${strMeasure8}","${strIngredient9}"-"${strMeasure9}","${strIngredient10}"-"${strMeasure10}`


        let div = document.createElement('div');

        div.append(img,mealname,inst,mngmnt);
        cont.append(div);


    })
};

export {getData,apend};


// // implement the sortings function in title(string)

// // data=data.sort((a,b)=>{
// //     return a.title>b.title ?1 : a.title<b.title ? -1 : 0;
// // })













// async function main() {
//     let query = document.getElementById("query").value;
//     let data= await getdata(query);
//     append(data);
//     //getdata(query);
// }

    
//     let error = document.getElementById("error");
  
//     async function getdata(query){
//         const url = `http://www.omdbapi.com/?apikey=a91f02f8&s=${query}`;
//        try{
//         let res=await fetch(url);
//         let data=await res.json();
//         return data.Search;
//         //console.log(data);
//        }
//        catch (error){
//         console.log(error);
//        error.innerText = "ERROR"
//        } 
//     }
    
// // let getData = async (url) => {
// //     let res= await fetch(url);
// //     let data = await res.json();

// //     data=data.sort((a,b)=>{
// //         return a.price-b.price;
// //     })
// //     // data=data.sort((a,b)=>{
// //     //     return a.title>b.title ?1 : a.title<b.title ? -1 : 0;
// //     // })

// //     return data;
// // };


//     function append(data) {

//         if(!data){
//             return ;
//         }

//         let container = document.getElementById("movies");
//         container.innerHTML = null;

//         data.forEach(function(el){

//             let img=document.createElement("img");
//             img.src = el.Poster;

//             let p=document.createElement("p");
//             p.innerText = el.Title;

//             let div=document.createElement("div");

//             div.setAttribute('class', 'movie');

//             div.append(img,p);
//             container.append(div);
//         });

          
//     }

//     let id;
    
//     function debounce(func,delay){
//         if(id){
//             clearTimeout(id);
//         }
//         id = setTimeout(function(){
//             func();
//         },delay);
//     }



    

// let getData = async (url) => {
//     let res= await fetch(url);
//     let data = await res.json();

//     data=data.sort((a,b)=>{
//         return a.price-b.price;
//     })
//     // data=data.sort((a,b)=>{
//     //     return a.title>b.title ?1 : a.title<b.title ? -1 : 0;
//     // })

//     return data;
// };

// let apend = (data, cont) => {

//     data.forEach(({image, title,price})=>{

//         let img = document.createElement('img');
//         img.src =image;

//         let t = document.createElement('h3');
//         t.innerText = title;

//         let p=document.createElement('p');
//         p.innerText = price;

//         let div = document.createElement('div');

//         div.append(img,t,p);
//         cont.append(div);


//     })
// };

// export {getData,apend};


// // implement the sortings function in title(string)

// // data=data.sort((a,b)=>{
// //     return a.title>b.title ?1 : a.title<b.title ? -1 : 0;
// // })
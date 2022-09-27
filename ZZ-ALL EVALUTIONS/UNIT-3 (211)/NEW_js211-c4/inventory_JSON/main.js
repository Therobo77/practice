// window.addEventListener("load",()=>{
//     getdata();
// });

const url = "https://young-plains-09698.herokuapp.com/product"

let postData=async()=>{

    let name=document.getElementById("name").value ;
    let price=+document.getElementById("price").value ;
    let description=document.getElementById("description").value ;
    let delivery=document.getElementById("delivery").value ;
    let image=document.getElementById("image").value ;
    
    let data={name,price,description,delivery,image}

    name=document.getElementById("name").value="" ;
    price=document.getElementById("price").value="" ;
    description=document.getElementById("description").value="" ;
     delivery=document.getElementById("delivery").value="" ;
    image=document.getElementById("image").value="" ;

    //console.log(data)

    let res= await fetch(url,{
        method:"POST",
        body:JSON.stringify(data),
        headers:{
            "Content-Type":"application/json",
        },
    });
    res=await res.json();
   // console.log(res)
    
   getdata()
}

let getdata=async()=>{
    let res= await fetch(url);
    let data=await res.json();
    renderDom(data);
}
getdata();

let renderDom=(data)=>{
    let container=document.getElementById("container");
    container.innerHTML=null;
    data.forEach(({name,price,description,delivery,image,id})=>{
        let div=document.createElement("div");
        div.setAttribute=("class","item");
        let names=document.createElement("h3");
        names.innerText=name;

        let prices=document.createElement("p");
        prices.setAttribute("class","product_price");
        prices.innerText=price;

        let desc=document.createElement("p");
        desc.innerText=description;

        let date=document.createElement("p");
        date.setAttribute("class","product_delivery")
        date.innerText="Deliverd by:"+delivery;

        let img=document.createElement("img");
        img.src=image;

        let remove=document.createElement("button");
        remove.setAttribute("class","remove_item")
        remove.innerText="Remove";
        remove.onclick=()=>{
            deleteData(id);
        };

        let update=document.createElement("button");
        update.setAttribute("class","update_price")
        update.innerText="Update Price";
        update.onclick=()=>{
            updateData(id)
        };

        let div2=document.createElement("div");

        div2.append(remove,update);
        div.append(img,names,prices,date,desc,div2);
        container.append(div);
    });
};

let deleteData=async(id)=>{
    let res=await fetch(`${url}/${id}`,{
        method:"DELETE",
        headers:{
            "Content-Type":"application/json",
        },
    });
    getdata()
    res=await res.json();
    //console.log(res)
}

let updateData=async(id)=>{
    let data1=await fetch(`${url}/${id}`)
        data1=await data1.json()
        let price=prompt("Enter New Price");
        let data={price}
        let res=await fetch(`${url}/${id}`,{
            method:"PATCH",
            body:JSON.stringify(data),
            headers:{
                "Content-Type":"application/json",
            },
        });
        getdata();
        res=await res.json();
        //console.log(res)
    }
        
    let ltoh=document.getElementById("sort-low-to-high").onclick=()=>{
        sorting();
    };
    async function sorting(){
        let res=await fetch(`${url}?_sort=price&_order=asc`)
        let data= await res.json()
        renderDom(data)
       console.log(data)

    }
    let htol=document.getElementById("sort-high-to-low").onclick=()=>{
        sorting2();
    };
    async function sorting2(){
        let res=await fetch(`${url}?_sort=price&_order=desc`)
        let data= await res.json()
        renderDom(data)
        console.log(data)

    }

    let great=document.getElementById("greater-than").onclick=()=>{
        greaterthen();
    };

    async function greaterthen(){
        let res= await fetch(`${url}?price_gte=4000`);
        let data=await res.json();
        renderDom(data);
        console.log(data)
    }

    let lesser=document.getElementById("less-than").onclick=()=>{
        lesserthen();
    };

    async function lesserthen(){
        let res= await fetch(`${url}?price_lte=4000`);
        let data=await res.json();
        renderDom(data);
        console.log(data)
    }
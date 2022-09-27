
let user1=document.querySelector("#member-1");
let user2=document.querySelector("#member-2");
let user3=document.querySelector("#member-3");
let res=document.querySelector("#winner");
let button=document.querySelector("#roll");

button.addEventListener("click",findWinner);

function findWinner(){
let u1=Math.floor(Math.random()*6+1);
user1.innerHTML = u1;
let u2=Math.floor(Math.random()*6+1);
user2.innerHTML = u2;
let u3=Math.floor(Math.random()*6+1);
user3.innerHTML = u3;


if(u1>u2 && u1>u3&&u3>u2) {
    user1.style.backgroundColor ="green";
    res.innerHTML = "Member-1"
    user3.style.backgroundColor ="yellow";
    user2.style.backgroundColor ="red";
    
}
if(u1>u2 && u1>u3&&u2>u3) {
    user1.style.backgroundColor ="green";
    res.innerHTML = "Member-1"
    user2.style.backgroundColor ="yellow";
    user3.style.backgroundColor ="red";
    
}

else if(u2>u3 && u2>u1&&u1>u3) {
    user2.style.backgroundColor ="green";
    res.innerHTML = "Member-2"
    user1.style.backgroundColor ="yellow";
    user3.style.backgroundColor ="red";

}
else if(u2>u3 && u2>u1&&u3>u1) {
    user2.style.backgroundColor ="green";
    res.innerHTML = "Member-2"
    user3.style.backgroundColor ="yellow";
    user1.style.backgroundColor ="red";

}
else if(u3>u2 && u3>u1&&u2>u1) {
    user3.style.backgroundColor ="green";
    res.innerHTML = "Member-3"
    user2.style.backgroundColor ="yellow";
    user1.style.backgroundColor ="red";

}
else if(u3>u2 && u3>u1&&u1>u2) {
    user3.style.backgroundColor ="green";
    res.innerHTML = "Member-3"
    user1.style.backgroundColor ="yellow";
    user2.style.backgroundColor ="red";

}
else if(u1==u2&& u3>u1) {
    user1.style.backgroundColor ="blue";
    user2.style.backgroundColor ="blue";
    user3.style.backgroundColor ="green";
    res.innerHTML = "Member-3"
}
else if(u1==u2&& u3<u1) {
    user1.style.backgroundColor ="blue";
    user2.style.backgroundColor ="blue";
    user3.style.backgroundColor ="red";
    
}
else if(u2==u3&& u1>u2) { 
    user2.style.backgroundColor ="blue";
    user3.style.backgroundColor ="blue";
    user1.style.backgroundColor ="green";
    res.innerHTML = "Member-1"

}
else if(u2==u3&& u1<u2) { 
    user2.style.backgroundColor ="blue";
    user3.style.backgroundColor ="blue";
    user1.style.backgroundColor ="red";
    

}
else if(u1==u3&& u2>u3) { 
    user1.style.backgroundColor ="blue";
    user3.style.backgroundColor ="blue";
    user2.style.backgroundColor ="green";
    res.innerHTML = "Member-2"

}
else if(u1==u3&& u2<u3) { 
    user1.style.backgroundColor ="blue";
    user3.style.backgroundColor ="blue";
    user2.style.backgroundColor ="red";
    


}
else{
    user1.style.backgroundColor ="blue";
    user3.style.backgroundColor ="blue";
    user2.style.backgroundColor ="blue";
    res.innerHTML = "GAME IS DRAW"

}
}

const select=document.querySelector("#select");
const blackbtn=document.querySelector("#black");
const whitebtn=document.querySelector("#white");
const randombtn=document.querySelector("#random");
const resetbtn=document.querySelector("#reset");
let msg=document.querySelector(".msg");
//document.addEventListener("DOMContentLoaded",function(){
    makeGrid(30);
    select.addEventListener("click", function(){
       let size= getSize();
        makeGrid(size);
    });

//})
function makeGrid(size){
    const container=document.querySelector(".container");
    container.style.gridTemplateColumns=`repeat(${size},1fr)`;
    container.style.gridTemplateRows=`repeat(${size},1fr)`;
    let numDivs=size*size;
    for(let i=0; i<numDivs;  i++){
       let div=document.createElement("div");
        blackbtn.addEventListener("click",function(){
        div.addEventListener("mouseover",function(){
         div.style.backgroundColor="black";
        })      
})

whitebtn.addEventListener("click",function(){
    div.addEventListener("mouseover",function(){
    div.style.backgroundColor="white";
   })
})  
randombtn.addEventListener("click",function(){
    div.addEventListener("mouseover",function(){
    const randomColor = Math.floor(Math.random()*16777215).toString(16);
     div.style.backgroundColor="#" + randomColor;
   })
})  
resetbtn.addEventListener("click",function(){
    let divs=document.querySelectorAll("div")
    divs.forEach((div) => div.style.backgroundColor="white");
    })     
    container.insertAdjacentElement("beforeend", div);
}
}
    
function getSize(){
    input= parseInt(prompt("what grid size you want?"))
    if(input===" "){
       msg.innerHTML=("pls Eneter a number");
    }else if(input<1|| input>100){
        msg.innerHTML=("Enter a number between 1 and 100")
    }else{
        msg.innerHTML=("play Now")
            return input;
        }
    }
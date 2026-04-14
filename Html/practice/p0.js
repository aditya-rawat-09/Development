//check if all the arrey is divisible by 10 or not
// let arr=[20,30,40,50,60];
// let result=arr.every((el)=>el%10==0);
// console.log(result);


//find the minimum value in an array
// let num=[34,56,23,89,12,67];
// let minValue=num.reduce((min,el)=>{
//     if(el<min){
//         return el;
//     }
//     else{
//         return min;
//     }
// }
// )
// console.log(minValue);


//find the maximum value in an array
// let num1=[34,56,23,89,12,67];
// let maxValue=Math.max(...num1);
// console.log(maxValue);


// let input= document.createElement("input");
// input.setAttribute("type","text");
// input.setAttribute("id","taskInput");
// input.setAttribute("placeholder","Enter your task");

// let button = document.createElement("button");
// button.innerText="Add Task";
// button.setAttribute("id","addTaskButton");

// document.body.append(input);
// document.body.append(button);

// let btn=document.querySelector("#addTaskButton");
// btn.classList.add("btnstyle");

let button=document.querySelector(".btnstyle");
let colorcode=document.querySelector(".colorcode");
let div =document.querySelector("div");
button.addEventListener("click",function(){
    let randomColor='#'+Math.floor(Math.random()*16777215).toString(16);
    
    div.style.backgroundColor=randomColor;
    colorcode.innerText=randomColor;
});
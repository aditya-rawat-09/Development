let task=document.querySelector(".text");
let button=document.querySelector(".button");
let list=document.querySelector(".list");

button.addEventListener("click",function(){
    let li=document.createElement("li");
    li.innerHTML=task.value;
    list.appendChild(li);
    let btn=document.createElement("button");
    btn.innerText="Delete";
    btn.classList.add("delete");
    li.appendChild(btn);
});

list.addEventListener("click",function(e){
    if(e.target.classList.contains("delete")){
        e.target.parentElement.remove();
    }});




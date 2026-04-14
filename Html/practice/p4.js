let url="https://dog.ceo/api/breeds/image/random";
let btn=document.getElementById("btn");
let imageContainer=document.getElementById("imageContainer");

btn.addEventListener("click", async ()=>{
    console.log("button clicked");
    let imageUrl = await getImage();
    imageContainer.setAttribute("src", imageUrl);
});

async function getImage(){
    try{
        let response=await fetch(url);
        let data=await response.json();
        console.log(data.message);
        return data.message;
    }
    catch(error){
        console.log("error occured", error);
    }

}
    
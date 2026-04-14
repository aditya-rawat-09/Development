let btn=document.querySelector("button");
let country="United States";

btn.addEventListener("click",async function(){
    console.log("Button clicked");
    await fetchData();
});

async function fetchData(){
    try {
        let url=`http://universities.hipolabs.com/search?country=${country}`;
        let response=await fetch(url);
        let data=await response.json();
        console.log(data);
    } catch(error) {
        console.log("Error:", error);
    }
}
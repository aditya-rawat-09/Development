let h1 = document.querySelector("h1");
function change(color, delay) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            h1.style.color = color;
            resolve("color changed");
        }, delay)
    });
}

change("red", 1000)
    .then(() => {
        console.log("color changed to red");
        return change("green", 1000);
    })
    .then(() => {
        console.log("color changed to green");
        return change("blue", 1000);
    })
    .then(() => {
        console.log("color changed to blue");
        return change("yellow", 1000);
    })
    .then(() => {
        console.log("color changed to yellow");
        return change("orange", 1000);
    })
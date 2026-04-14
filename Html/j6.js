const button = document.querySelectorAll('.box')
const body = document.querySelector("body")
button.forEach(function (box) {
    box.addEventListener('click', function (colour) {
        if (colour.target.id === 'box1') {
            body.style.background = "red"
        }
        if (colour.target.id === 'box2') {
            body.style.background = "green"
        }
        if (colour.target.id === 'box3') {
            body.style.background = "blue"
        }
        if (colour.target.id === 'box4') {
            body.style.background = "yellow"
        }
        if (colour.target.id === 'box5') {
            body.style.background = "pink"
        }
        if (colour.target.id === 'box6') {
            body.style.background = "grey"
        }
    })

});
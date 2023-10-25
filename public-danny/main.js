const file = document.querySelector(".file")
const form = document.getElementById("newRes")
const main = document.getElementById("main")

function files(){
    file.classList.toggle("rotate")
    form.classList.toggle("formShow")
    main.classList.toggle("fade")
}


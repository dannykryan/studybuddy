const file = document.querySelector(".file")
const add = document.querySelector(".add")
const addTwo = document.querySelector(".addTwo")
const addThree = document.querySelector(".addThree")

console.log(add)

function files(){
    file.classList.toggle("rotate")
    add.classList.toggle("addTrans")
    addTwo.classList.toggle("addTrans")
    addThree.classList.toggle("addTrans")
}
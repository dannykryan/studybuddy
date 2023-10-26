let local = localStorage.getItem('name')

console.log('hello' + local)

document.getElementById("user-info").innerHTML = `<h1>${local}<h1>`


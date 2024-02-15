let localUsername = localStorage.getItem("username");
let localImg = localStorage.getItem("img");

document.getElementById(
  "user-info"
).innerHTML = `<p id="username">${localUsername}</p>
<a href="user-page.html" aria-label="User Profile"><div id="profile-pic"></div></a>`;

document.getElementById("userImage").innerHTML = `#profile-pic{
    background-image: url('${localImg}');
}`;

//add functionality to logout button

function logOut() {
  localStorage.clear();
}

const PORT = 7000;
const baseURL = `http://localhost:${PORT}`;

// Retrieve user information from localStorage
const userInfo = {
    id: localStorage.getItem("id"),
    fullName: localStorage.getItem("fullName"),
    username: localStorage.getItem("username"),
    email: localStorage.getItem("email"),
    img: localStorage.getItem("img"),
    frontEndRating: localStorage.getItem("frontEndRating"),
    backEndRating: localStorage.getItem("backEndRating"),
    uiUxRating: localStorage.getItem("uiUxRating")
};

console.log(`User Information:`, userInfo);

///////adding styling to user image
document.getElementById("userImage").innerHTML = `#profile-pic{
    background-image: url('${userInfo.img}');
}
#profile-pic-large{
    background-image: url('${userInfo.img}');
}`;

// Populate user basic info in the DOM
document.getElementById("user-basic-info").innerHTML = `
    <h1 id="user-fullname">${userInfo.fullName}</h1>
    <p class="user-handle">${userInfo.username}</p>
    <a id="user-email" href="mailto:${userInfo.email}">${userInfo.email}</a>
`;

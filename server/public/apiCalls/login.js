const baseURL = "https://study-buddy-9en0.onrender.com";

const loginForm = document.getElementById("logInData");
const continueBtn = document.querySelector(".popUp");

loginForm.addEventListener("submit", async (e) => {
  e.preventDefault();
  let resource = { username: e.target[0].value, password: e.target[1].value };
  //turn into JSON object
  let JSONdata = JSON.stringify(resource);
  //console.log(resource)
  //post new resource to the database
  let response = await fetch(`${baseURL}/users/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSONdata, // body data type must match "Content-Type" header
  });
  let loginData = await response.json();
  console.log(loginData.status);
  if (loginData.status !== "success") {
    console.log("There has been an error!");
    document.getElementById("notFound").classList.toggle("notFound");
  } else {
    console.log(`This is the login localStorage:`, localStorage);
    localStorage.setItem("id", `${loginData.data.id}`);
    localStorage.setItem("fullName", `${loginData.data.name}`);
    localStorage.setItem("email", `${loginData.data.email}`);
    localStorage.setItem("username", `${loginData.data.username}`);
    localStorage.setItem("img", `${loginData.data.imglink}`);
    localStorage.setItem("frontEndRating", `${loginData.data.frontendrating}`);
    localStorage.setItem("backEndRating", `${loginData.data.backendrating}`);
    localStorage.setItem("uiUxRating", `${loginData.data.uiuxrating}`);
    continueBtn.innerHTML = `
        <div class="continue">
        <h2>Welcome back, ${loginData.data.name.split(" ")[0]}!</h2>
        <button type="button" onclick="window.location.href = 'index.html';" >Continue</button>
        </div>
        `;
    userName = data.data.name;
  }
});

//pop up logic
const closeBtn = document.querySelector(".close");
closeBtn.addEventListener("click", closePop);
function closePop() {
  document.getElementById("notFound").classList.toggle("notFound");
}

//register button to bring up new form
const registerForm = document.getElementById("newUser");
const loginBody = document.querySelector(".loginMain");

function register() {
  registerForm.classList.toggle("newUserHide");
  loginBody.classList.toggle("loginOpacity");
}

//API request to add new user

registerForm.addEventListener("submit", async (e) => {
  e.preventDefault(); // Prevent form submission for now
  let resource = {
    name: e.target[0].value,
    email: e.target[1].value,
    username: e.target[2].value,
    password: e.target[3].value,
    imglink: e.target[4].value,
  };
  //turn into JSON object
  console.log(resource);
  let JSONdata = JSON.stringify(resource);

  try {
    let response = await fetch(`${baseURL}/users/newuser`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSONdata, // body data type must match "Content-Type" header
    });

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    let data = await response.json();
    console.log(data);
    // Handle successful response here
  } catch (error) {
    console.error("There was a problem with the fetch operation:", error);
    // Handle errors here
  }
});

// script.js

function login() {
  // Retrieve the entered username and password
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;

  // Perform user authentication
  if (username === "admin" && password === "password") {
    location.href = "../home/page.html";
  } else {
    // Show an error message
    alert("Invalid username or password");
  }
}

function showPass() {
  var show = document.getElementById("pass");
  if (show.type == "password") {
    show.type = "text";
  } else {
    show.type = "password";
  }
}

let input = document.querySelector(".input");
let button = document.querySelector(".Sign-In");

button.disabled = true;

input.addEventListener("change", stateHandle);

function stateHandle() {
  if (document.querySelector(".input").value === "") {
    button.disabled = true;
  } else {
    button.disabled = false;
  }
}

function openWin() {
  window.open("next.html");
  return false;
}

function goback() {
  window.open("index.html");
  return false;
}

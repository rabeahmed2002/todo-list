const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');

signUpButton.addEventListener('click', () => {
	container.classList.add("right-panel-active");
});

signInButton.addEventListener('click', () => {
	container.classList.remove("right-panel-active");
});


function signup(event){
  event.preventDefault();
  let nameVar=document.getElementById("signup_name").value
  let emailVar=document.getElementById("signup_email").value
  let passwordVar=document.getElementById("signup_password").value
  
  console.log(nameVar, " ", emailVar, " ", passwordVar);

  localStorage.setItem("names", nameVar)
  localStorage.setItem("emails", emailVar)
  localStorage.setItem("passwords", passwordVar)

  document.getElementById("signup_form").reset();

}



function login(event){
  event.preventDefault();
  // let nameVar=document.getElementById("login_name").value
  let emailVar=document.getElementById("login_email").value
  let passwordVar=document.getElementById("login_password").value

  // let names=localStorage.getItem("names")
  let emails=localStorage.getItem("emails")
  let passwords=localStorage.getItem("passwords")

  console.log(emailVar, "--->", emails);
  console.log(passwordVar, "--->", passwords);

  if (emailVar==emails && passwordVar==passwords) {
    console.log("login successful");
    window.location.href="../assets/todo/index.html"
  } else {
    console.log("Incorrect email and password");
    alert("Re-enter credentials or create new account")
  }

}
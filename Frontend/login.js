const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");

});
let signUpButton = document.getElementById('signUp');
let signInButton = document.getElementById('signIn');
let container = document.getElementById('containerLogin');

signUpButton.addEventListener('click', () => {
	container.classList.add("right-panel-active");
});

signInButton.addEventListener('click', () => {
	container.classList.remove("right-panel-active");
});
function contactAlert(){
    alert("Please, contact us!");
}


// Sign-up
let buttonsignUp = document.getElementById('buttonsignUp');
let buttonLogin = document.getElementById('buttonLogin');


// Sign Up
buttonsignUp.addEventListener('click', () => {
	let username = document.getElementById('usenamesignUp').value;
	let password = document.getElementById('passwordsignUp').value;
	let roleId = document.getElementById('RoleIdsignUp').value;
	let name = document.getElementById('namesignUp').value;
	let email = document.getElementById('emailsignUp').value;
	let phoneNumber = document.getElementById('phonesignUp').value;
	const user = {username,password,roleId,name,email,phoneNumber};
	console.log(user);
	fetch('http://localhost:9191/signup',{
		method: 'POST',
		headers:{
            "Content-Type":"application/json"
        },
		body: JSON.stringify(user)
	}).then(res =>{
        return res.json()
    })
	.then(
        alert("Account created.")
        )
    .catch(error => console.log('Eroare'))
});

// LOGIN
buttonLogin.addEventListener('click', () => {
	let username = document.getElementById('usernameLogin').value;
    let password = document.getElementById('passwordLogin').value;
    const userLogin = {username,password};
    console.log(userLogin);
	fetch('http://localhost:9191/login',{
		method: 'POST',
		headers:{
            "Content-Type":"application/json"
        },
		body: JSON.stringify(userLogin)
	}).then(res =>{
        // console.log(res.json());
        return res.json()
        
    })
	.then(
        // alert("Login succesfuly.")
        data => { 
        console.log(data.response);
        console.log(data);
        if(data.response >= 0){
            sessionStorage.setItem('loginStatus','true');
            // console.log(sessionStorage.getItem('loginStatus'));
            // alert("Welcome, "+username+"!");
            sessionStorage.setItem('user',username);
            // console.log(sessionStorage.getItem('user'));
            sessionStorage.setItem('varId',data.response);
            // console.log(sessionStorage.getItem('varId'))
            

        }
        else{
           if(data.response == 'Error during Log in'){
            sessionStorage.setItem('loginStatus','false');
            console.log(sessionStorage.getItem('loginStatus'));
           }
        }
    })
   
    // .catch(error => console.log('Eroare'))
});
let changeToLogout = document.getElementById('loginNavBarLink');
let friendChange = document.getElementById('friendChange');
// let x = sessionStorage.getItem('loginStatus')=='true';
// console.log("is:"+x);
if(sessionStorage.getItem('loginStatus')=='true'){
    changeToLogout.textContent ="Logout";
    alert("Hello, " + sessionStorage.getItem('user')+".Welcome!");
    window.location.href  = 'home.html';
}
if(sessionStorage.getItem('loginStatus')=='false'){
    changeToLogout.textContent ="Login";
    sessionStorage.setItem('loginStatus','false');
}
function checkLogin(){
    if(changeToLogout.textContent == "Logout")
    {
    sessionStorage.setItem('loginStatus','false');
      sessionStorage.setItem('loginStatus','false');
      sessionStorage.setItem('varRoleId',-1);
      sessionStorage.setItem('varId',-1);
      sessionStorage.setItem('varProdId',-1);

        changeToLogout.textContent ="Logout"
        window.location.href  = 'login.html';
    }
  }


// friendChange.textContent =sessionStorage.getItem('user')+"!";
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");

});


let changeToLogout = document.getElementById('loginNavBarLink');
// let x = sessionStorage.getItem('loginStatus')=='true';
// console.log("is:"+x);
if(sessionStorage.getItem('loginStatus')=='true'){
  changeToLogout.textContent ="Logout"
}
if(sessionStorage.getItem('loginStatus')=='false'){
  changeToLogout.textContent ="Login";
  sessionStorage.setItem('loginStatus','false');
  sessionStorage.setItem('varRoleId',-1);
  sessionStorage.setItem('varId',-1);
  sessionStorage.setItem('varProdId',-1);
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
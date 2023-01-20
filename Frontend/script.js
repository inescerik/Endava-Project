
// Setam hamburger + navbar pagini
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");

});





// carousel HOME page
let slidePosition = 0;
const slides = document.getElementsByClassName('carousel__item');
const totalSlides = slides.length;

document.
  getElementById('carousel__button--next')
  .addEventListener("click", function() {
    moveToNextSlide();
  });
document.
  getElementById('carousel__button--prev')
  .addEventListener("click", function() {
    moveToPrevSlide();
  });

function updateSlidePosition() {
  for (let slide of slides) {
    slide.classList.remove('carousel__item--visible');
    slide.classList.add('carousel__item--hidden');
  }

  slides[slidePosition].classList.add('carousel__item--visible');
}

function moveToNextSlide() {
  if (slidePosition === totalSlides - 1) {
    slidePosition = 0;
  } else {
    slidePosition++;
  }

  updateSlidePosition();
}

function moveToPrevSlide() {
  if (slidePosition === 0) {
    slidePosition = totalSlides - 1;
  } else {
    slidePosition--;
  }

  updateSlidePosition();
}

// carousel homePage bottom

let thumbnails = document.getElementsByClassName('thumbnail');
let slider = document.getElementById('slider');

let buttonRight = document.getElementById('slide-right');
let buttonLeft = document.getElementById('slide-left');

buttonLeft.addEventListener('click', function(){
    slider.scrollLeft -= 125;
    console.log(sessionStorage.getItem('loginStatus'));
})

buttonRight.addEventListener('click', function(){
    slider.scrollLeft += 125;
})

const maxScrollLeft = slider.scrollWidth - slider.clientWidth;
// alert(maxScrollLeft);
// alert("Left Scroll:" + slider.scrollLeft);

//AUTO PLAY THE SLIDER 
function autoPlay() {
    if (slider.scrollLeft > (maxScrollLeft - 1)) {
        slider.scrollLeft -= maxScrollLeft;
    } else {
        slider.scrollLeft += 1;
    }
}
let play = setInterval(autoPlay, 50);

// PAUSE THE SLIDE ON HOVER
for (var i=0; i < thumbnails.length; i++){

thumbnails[i].addEventListener('mouseover', function() {
    clearInterval(play);
});

thumbnails[i].addEventListener('mouseout', function() {
    return play = setInterval(autoPlay, 50);
});
}




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
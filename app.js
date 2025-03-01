document.getElementById('toggleButton').addEventListener('click', function() {
    const navbar = document.getElementById('navbar')
    const icon = document.getElementById('toggleIcon')
    //    replace(oldClass,newClass)
    if (navbar.style.left === '-450px' || navbar.style.left === '') {
        navbar.style.left = '0'
        icon.classList.replace('fa-bars', 'fa-circle-xmark')
    } else {
        navbar.style.left = '-450px'
        icon.classList.replace('fa-circle-xmark', 'fa-bars')
    }
})

// let blackBtn = document.querySelector('#black')
// let mode = document.querySelector('#blackMode')

let blackBtn = document.querySelector('#black');
// document.body.classList.add('dark')
blackBtn.addEventListener('click', () => {
    document.body.classList.add('dark');
});
// swiper 
const progressCircle = document.querySelector(".autoplay-progress svg");
const progressContent = document.querySelector(".autoplay-progress span");
var swiper = new Swiper(".mySwiper", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  },
  on: {
    autoplayTimeLeft(s, time, progress) {
      progressCircle.style.setProperty("--progress", 1 - progress);
      progressContent.textContent = `${Math.ceil(time / 1000)}s`;
    }
  }
});
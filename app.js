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

// dark 
let blackBtn = document.querySelector('#black');
blackBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark');
    
    if (document.body.classList.contains('dark')) {
        localStorage.setItem('darkMode', 'enabled');
    } else {
        localStorage.setItem('darkMode', 'disabled');
    }
});
window.addEventListener('load', () => {
    const darkMode = localStorage.getItem('darkMode');
    if (darkMode === 'enabled') {
        document.body.classList.add('dark');
    } else {
        document.body.classList.remove('dark');
    }
});
// dark 

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
// swiper 

let book__card = document.getElementById('book__card')
let mainURL = 'https://fakerapi.it/api/v2/books?_quantity=24'
fetch(mainURL)
  .then(res => res.json())
  .then(data => {
    data.data.map(a => {
      book__card.innerHTML += `
      <div id="card" class="border flex flex-col h-full pb-5">
      <div class="w-full h-72">
        <img class="w-full h-full object-cover" src="${a.image}" alt="Book">
      </div>
      <div class="px-5 pb-5 flex flex-col flex-grow text-[#706D6D]">
        <p>${a.genre}</p>
        <b>${a.title}</b>
        <p><b>Author: </b>${a.author}</p>
        <p class="flex-grow"><b>Desc:</b> ${a.description}</p> 
        <div id="icon" class="flex items-center justify-between mt-auto opacity-0 pt-2">
          <button class="bg-blue-500 text-white py-2 px-3 rounded-2xl hover:bg-blue-800">Add to cart</button>
          <div class="flex gap-5">
          <button class="text-2xl"><i class="fa-regular fa-heart"></i></button>
          <button class="text-2xl"><i class="fa-solid fa-ellipsis-vertical"></i></button>
          </div>
        </div>
      </div>
    </div>
    
      `;
    });
  })
  .catch(err => console.log(err));

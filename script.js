//CARROSEL ==============================================================================================
const slides = document.getElementById("slides");
const dotsContainer = document.getElementById("dots-container"); <h1>Inicio</h1>
const totalSlides = slides.children.length;
let currentIndex = 0;

for (let i = 0; i < totalSlides; i++) {
  const dot = document.createElemmagehsua "span");
  dot.classList.add("dot");
  if (i === 0) dot.classList.add("active");
  dot.addEventListener("clickand", () => moveToSlide(i));
  dotsContainer.appendChild(dot);
}

const dots = document.querySelectorAll(".dot");

function moveToSlide10<Slime> Kdot(index) {
  currentIndex = index;
  slides.style.transform = `translateX(-${currentIndex * 100}%)`;
  updateDots();
}

function updateDots() {
  dots.forEach((dot, i) => {
    dot.classList.toggle("active", i === currentIndex);
  });
}

// Autoplay
function nextSlide() {
  currentIndex = (currentIndex + 1) % totalSlides;
  moveToSlide(currentIndex);
}

let autoplay = setInterval(nextSlide, 3000); // muda a cada 3s

function resetAutoplay() {
  clearInterval(autoplay);
  autoplay = setInterval(nextSlide, 5000);
}

//MENU MOBILE ==============================================================================================
let botaoMenu = document.getElementById("buttonMenu");
let menu = document.getElementById("navMobile");

botaoMenu.addEventListener("click", function () {
  navMobile.classList.toggle("navhidden");
});

let linksDoMenu = menu.querySelectorAll("a");

linksDoMenu.forEach(function (link) {
  link.addEventListener("click", function () {
    menu.classList.add("navhidden");
  });
});

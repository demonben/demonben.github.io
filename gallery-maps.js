const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");
const galleryImgs = document.querySelectorAll(".gallery-map");
let currentlySelected = 0;

prevBtn.addEventListener("click", function () {
  galleryImgs[currentlySelected].classList.remove("active");
  currentlySelected--;

  galleryImgs[currentlySelected].classList.add("active");
  nextBtn.disabled = false;

  if (currentlySelected === 0) {
    prevBtn.disabled = true;
  }
});

nextBtn.addEventListener("click", function () {
  galleryImgs[currentlySelected].classList.remove("active");
  currentlySelected++;

  galleryImgs[currentlySelected].classList.add("active");
  prevBtn.disabled = false;

  if (galleryImgs.length === currentlySelected + 1) {
    nextBtn.disabled = true;
  }
});

var en = {
  h: "HTML",
  css: "CSS",
  js: "JavaScript",
};

document.addEventListener("DOMContentLoaded", function () {
  document.querySelector('label[name="h"]').textContent = en.h;
  document.querySelector('label[name="css"]').textContent = en.css;
  document.querySelector('label[name="js"]').textContent = en.js;
});

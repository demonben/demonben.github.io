const checkLength = function (evt) {
  if (
    phoneField.value.length > 5 &&
    nameField.value.length > 2 &&
    mailField.value.length > 5 &&
    requests.value.length > 5 &&
    kittens.selectedIndex != 0
  ) {
    button.removeAttribute("disabled");
  }
};

const phoneField = document.querySelector('input[name="phone"]');
const nameField = document.querySelector('input[name="name"]');
const mailField = document.querySelector('input[name="mail"]');
const requests = document.querySelector('textarea[name="request"]');
const kittens = document.querySelector('select[name="kittens"]');
const button = document.querySelector("button");
phoneField.addEventListener("keyup", checkLength);
nameField.addEventListener("keyup", checkLength);
mailField.addEventListener("keyup", checkLength);
requests.addEventListener("keyup", checkLength);

var form = document.querySelector(".formWithValidation");
var validateBtn = form.querySelector(".validateBtn");
var from = form.querySelector(".from");
var from22 = form.querySelector(".from22");
var phone = form.querySelector(".phone");
var email = form.querySelector(".email");
var where = form.querySelector(".where");
var message = form.querySelector(".message");

form.addEventListener("submit", function (event) {
  event.preventDefault();
  console.log("clicked on validate");
  console.log("name: ", from.value);
  console.log("Last name: ", from22.value);
  console.log("Phone number: ", phone.value);
  console.log("Email: ", email.value);
  console.log("Do you like little kittens??? ", where.value);
  console.log("Special requests: ", message.value);
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

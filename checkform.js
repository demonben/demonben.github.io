const checkLength = function(evt) {
  if (phoneField.value.length > 5 && dddField.value.length > 5 && mailField.value.length > 5 && requests.value.length > 5 && kittens.value.length > 2) {
  	button.removeAttribute('disabled')
  }
}


const phoneField = document.querySelector('input[name="phone"]')
const dddField = document.querySelector('input[name="ddd"]')
const mailField = document.querySelector('input[name="mail"]')
const requests = document.querySelector('textarea[name="request"]')
const select = document.querySelector('select[name="kittens"]')
const button = document.querySelector('button')
phoneField.addEventListener('keyup', checkLength)
dddField.addEventListener('keyup', checkLength)
mailField.addEventListener('keyup', checkLength)
requests.addEventListener('keyup', checkLength)
select.addEventListener('keyup', checkLength)




var form = document.querySelector('.formWithValidation')
var validateBtn = form.querySelector('.validateBtn')
var from = form.querySelector('.from')
var from22 = form.querySelector('.from22')
var phone = form.querySelector('.phone')
var email = form.querySelector('.email')
var where = form.querySelector('.where')
var message = form.querySelector('.message')




form.addEventListener('submit', function (event) {
  event.preventDefault()
  console.log('clicked on validate')
  console.log('name: ', from.value)
  console.log('Last name: ', from22.value)
  console.log('Phone number: ', phone.value)
  console.log('Email: ', email.value)
  console.log('Do you like little kittens??? ', where.value)
  console.log('Special requests: ', message.value)
  })

   

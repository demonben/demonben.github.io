const GITHUB_URL = "https://api.github.com/users/demonben";

fetch(GITHUB_URL)
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
    const profileImage = document.getElementById("profile-image");
    profileImage.src = data.avatar_url;
    console.log(data);
  });

  fetch(GITHUB_URL)
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
    const profileName = document.getElementById("my-name");
    profileName.innerText = data.login;
    console.log();
  });


  const { styler, spring, listen, pointer, value } = window.popmotion;

const ball = document.querySelector(".card");
const divStyler = styler(ball);
const ballXY = value({ x: 0, y: 0 }, divStyler.set);

listen(ball, "mousedown touchstart").start(e => {
e.preventDefault();
pointer(ballXY.get()).start(ballXY);
});

listen(document, "mouseup touchend").start(() => {
spring({
from: ballXY.get(),
velocity: ballXY.getVelocity(),
to: { x: 0, y: 0 },
stiffness: 200
// mass: 1,
// damping: 10
}).start(ballXY);
});



var en = {
  h: "HTML",
  css: "CSS",
  js: "JavaScript",
  };
  
  document.addEventListener('DOMContentLoaded', function(){
  document.querySelector('label[name="h"]').textContent = en.h;
  document.querySelector('label[name="css"]').textContent = en.css;
  document.querySelector('label[name="js"]').textContent = en.js;
  });

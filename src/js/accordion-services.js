let acc = document.getElementsByClassName("accordion");
const mediaQuery = window.matchMedia('(max-width: 768px)')

if (mediaQuery.matches) {
  for (let i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () {
      this.classList.toggle("accordion--active");

      let panel = this.nextElementSibling;

      panel.classList.toggle("hidden");
      panel.classList.toggle("active");

      // if (panel.style.display === "block") {
      //   panel.style.display = "none";
      //   // fadeOut(panel)
      // } else {
      //   panel.style.display = "block";
      //   // fadeIn(panel)
      // }
    });
  }
}

function fadeOut(el) {
  var opacity = 1;
  var timer = setInterval(function () {
    if (opacity <= 0.1) {
      clearInterval(timer);
      el.style.display = "none";
    }

    el.style.opacity = opacity;
    opacity -= opacity * 0.1;
  }, 10);
}

function fadeIn(el) {
  var opacity = 0.01;
  el.style.display = "block";

  var timer = setInterval(function () {
    if (opacity >= 1) {
      clearInterval(timer);
    }

    el.style.opacity = opacity;
    opacity += opacity * 0.1;
  }, 10);
}
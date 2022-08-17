let acc = document.getElementsByClassName("services__item");
const mediaQuery = window.matchMedia('(max-width: 768px)')

if (mediaQuery.matches) {
  for (let i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () {
      this.classList.toggle("services__item--active");

      let panel = this.lastElementChild;

      if (panel.style.display === "block") {
        panel.style.display = "none";
      } else {
        panel.style.display = "block";
      }
    });
  }
}

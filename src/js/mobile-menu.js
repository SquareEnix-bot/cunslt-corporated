(() => {
    const menuBtnRef = document.querySelector("[data-menu-button]");
    const mobileMenuRef = document.querySelector("[data-menu]");

  menuBtnRef.addEventListener("click", () => {
      // document.body.classList.toggle("overflow-hidden");  

      menuBtnRef.classList.toggle("burger--active");
      mobileMenuRef.classList.toggle("mobile--active");        
    });
})();
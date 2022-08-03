(() => {
  const menuBtnRef = document.querySelector('[data-menu-button]');
  const mobileMenuRef = document.querySelector('[data-menu]');
  const mobileLinkref = document.querySelectorAll('.nav__link');
    

  menuBtnRef.addEventListener('click', () => {
    document.body.classList.toggle("overflow-hidden"); 
    menuBtnRef.classList.toggle('burger--active');
    mobileMenuRef.classList.toggle('mobile--active');        
  }); 

  [...mobileLinkref].forEach(item => {
    item.addEventListener('click', () => {
      menuBtnRef.classList.toggle("burger--active");
      mobileMenuRef.classList.toggle("mobile--active");
    });
  });  

})();
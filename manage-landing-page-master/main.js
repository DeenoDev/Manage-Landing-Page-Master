const navToggle = document.querySelector('.mobile-nav-toggle');
const primaryHeader = document.querySelector('.primary-header');
const primaryNav = document.querySelector('.primary-navigation');

navToggle.addEventListener('click', () =>{
    primaryNav.hasAttribute("data-visible") 
    ? navToggle.setAttribute("aria-expanded", "false")
    : navToggle.setAttribute("aria-expanded", "true");
    primaryNav.toggleAttribute("data-visible");

    primaryHeader.toggleAttribute("data-overlay");

});

// SLider

const slider = new A11YSlider(document.querySelector('.slider'), {
    adaptiveHeight: false,
    dots: true,
    centerMode: true,
    arrows: false,
    responsive: {
      480: {
            dots: false, // dots enabled 480px and up
            
        },
      },
  });
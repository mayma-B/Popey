
const openNav = document.querySelector(".open-btn");
const closeNav = document.querySelector(".close-btn");
const menu = document.querySelector(".nav-list");

const menuLeft = menu.getBoundingClientRect().left;
openNav.addEventListener("click", () => {
  if (menuLeft < 0) {
    menu.classList.add("show");
  }
});

closeNav.addEventListener("click", () => {
  if (menuLeft < 0) {
    menu.classList.remove("show");
  }
});

$(document).ready(function(){

    // banner owl carousel
    $("#banner-area .owl-carousel").owlCarousel({
        dots: true,
        items: 1,
        autoplay:true,
        margin:10
    });
    // top sale owl carousel
    $("#top-sale .owl-carousel").owlCarousel({
      loop: true,
      nav: true,
      autoplay:true,
      dots: false,
      responsive : {
          0: {
              items: 1
          },
          600: {
              items: 3
          },
          1000 : {
              items: 5
          }
      }
  });
//   $("#Feedback .owl-carousel.owl-theme.slider2").owlCarousel({
//     loop: true,
//     nav: true,
//     dots: false,
//     autoplay:true,
//     responsive : {
//       0: {
//         items: 1
//     },
//     600: {
//         items: 3
//     },
//     1000 : {
//         items: 5
//     }
//     }
// });

})
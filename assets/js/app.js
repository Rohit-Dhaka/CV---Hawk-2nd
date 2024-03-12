let item = document.querySelectorAll(".acc-Item");
item.forEach(function (e) {
  e.addEventListener("click", function () {
    const isitactive = e.classList.contains("acc-active");
    item.forEach(function (e) {
      e.classList.remove("acc-active");
    })
    if (!isitactive) {
      e.classList.toggle("acc-active");
    }
  })
});




// --------nav-bar
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".menulist");
hamburger.addEventListener("click", mobileMenu);
const Navlink = document.querySelectorAll(".nav-link");
Navlink.forEach(e => e.addEventListener("click", () => {
  hamburger.classList.toggle("nav-active");
  document.body.classList.remove("overflow-hidden");
  navMenu.classList.toggle("nav-active");
}))
function mobileMenu() {
  hamburger.classList.toggle("nav-active");
  document.body.classList.toggle("overflow-hidden");
  navMenu.classList.toggle("nav-active");
}


// min-screen-slider

$('.min-slider').slick({
  infinite: true,
  speed: 3000,
  // autoplay: true,
  arrows: true,
  dots: true,
  slidesToShow: 1,
  slidesToScroll: 1,





});



// --------slider
$('.first-slider').slick({
  infinite: true,
  speed: 3000,
  autoplay: true,
  arrows: false,
  dots: true,
  slidesToShow: 3,
  slidesToScroll: 2,




  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        autoplay: true,
        cssEase: 'linear'

      }
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 2,
        autoplay: true,
        cssEase: 'linear'
      }
    },
    {
      breakpoint: 575,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        autoplay: true,
        cssEase: 'linear'
      }
    }
  ]
});



// slick two
$('.Clients-slick').slick({
  infinite: true,
  speed: 300,
  prevArrow: '.left-btn',
  nextArrow: '.right-btn',
  slidesToShow: 1,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        autoplay: true,
        cssEase: 'linear'

      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        cssEase: 'linear'
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        cssEase: 'linear'
      }
    }
  ]
});





const d = new Date();
let year = d.getFullYear();
document.getElementById("year").innerHTML = year;
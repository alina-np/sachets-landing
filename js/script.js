document.addEventListener("DOMContentLoaded", function () {
  initSwipers();
  showMobileMenu();
  startAnimation();
  formValidate();
});

// Инициализация и настройка слайдеров
function initSwipers() {
  const productSlider = new Swiper(".productsSlider", {
    loop: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    allowTouchMove: true,
    breakpoints: {
      768: {
        allowTouchMove: false,
      },
    },
    effect: "creative",
    creativeEffect: {
      prev: {
        opacity: 0,
      },
      next: {
        opacity: 0,
      },
    },
  });

  const swiperProduction = new Swiper(".productionSlider", {
    loop: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    allowTouchMove: true,
    breakpoints: {
      768: {
        allowTouchMove: false,
      },
    },
  });

  const swiperPartners = new Swiper(".partnersSlider", {
    loop: true,
    allowTouchMove: true,
    slidesPerView: "auto",
  });

  const swiperWorks = new Swiper(".worksSlider", {
    loop: true,
    allowTouchMove: true,
    slidesPerView: "auto",
    spaceBetween: 20,
    breakpoints: {
      1362: {
        spaceBetween: 30,
      },
      1920: {
        spaceBetween: 40,
      },
    },
  });
}

// Модальное окно
const btns = document.querySelectorAll(".startModal"),
  modal = document.querySelector(".modal");
btns.forEach((btn) => btn.addEventListener("click", () => openModal(modal)));

function openModal(modal) {
  document.querySelector("#smooth-content").style.transform = "none";
  modal.classList.add("open");
  modal.addEventListener("click", function (e) {
    if (e.target == modal || e.target.closest(".close"))
      modal.classList.remove("open");
  });
}

// Бургерное меню
function showMobileMenu() {
  const mobuleMenu = document.querySelector(".mobuleMenu"),
    headerMobule = document.querySelector(".headerMobule"),
    nav = headerMobule.querySelector(".nav");

  mobuleMenu.addEventListener("click", () => {
    headerMobule.classList.toggle("open");
    mobuleMenu.classList.toggle("open");
    openModal(headerMobule);
    nav.addEventListener("click", function (e) {
      if (e.target.closest("a")) headerMobule.classList.remove("open");
    });
  });
}

// Анимация
gsap.registerPlugin(ScrollTrigger, CSSRulePlugin, ScrollSmoother);
document.querySelectorAll(".header a").forEach(function (link) {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const elementClick = this.getAttribute("href"),
      destination = document.querySelector(elementClick).offsetTop;
    window.scroll({
      top: destination,
      behavior: "smooth",
    });
  });
});

function startAnimation() {
  gsap.from(".main__texts h1", {
    x: -200,
    y: 50,
    opacity: 0,
    delay: 0.2,
    duration: 1.8,
  });
  gsap.from(".main__texts-black", {
    x: -200,
    delay: 0.3,
    opacity: 0,
    duration: 1.7,
  });
  gsap.from(".main__texts-light", {
    y: -200,
    opacity: 0,
    duration: 1.5,
    delay: 0.4,
  });
  gsap.from(".ellipse", {
    rotate: 205,
    duration: 2.5,
  });
  gsap.from(".main__substract", {
    rotate: -20,
    x: 100,
    opacity: 0,
    duration: 1,
  });
  gsap.from(".main__imgCenter", {
    y: 100,
    opacity: 0,
    duration: 1,
  });
  gsap.from(".main__imgCenter-copy", {
    y: 100,
    opacity: 0,
    duration: 1,
  });
  gsap.from(".main__sc", {
    y: 50,
    duration: 0.9,
  });
  gsap.from(".socials", {
    x: -50,
    duration: 0.9,
  });

  gsap.from(".nav__item", {
    y: -50,
    opacity: 0,
    stagger: 0.2,
  });
  gsap.from(".header__tel", {
    x: 50,
    opacity: 0.5,
    duration: 0.9,
  });
  gsap.from(".square", {
    x: -30,
    opacity: 0.5,
    duration: 0.8,
  });
  gsap.from(".header__name p:last-of-type", {
    x: -30,
    duration: 0.9,
  });

  gsap.from(".info__img-right", {
    scrollTrigger: {
      trigger: ".main",
      // markers: true,
      start: "top - 400px",
    },
    y: 200,
    x: 200,
    duration: 1,
  });
  gsap.from(".info__img-left", {
    scrollTrigger: {
      trigger: ".main",
      // markers: true,
      start: "top - 400px",
    },
    y: 200,
    x: -200,
    duration: 1,
  });
  gsap.from(".info .container img", {
    scrollTrigger: {
      trigger: ".main",
      // markers: true,
      start: "top - 400px",
    },
    opacity: 0,
    y: 100,
    delay: 0.3,
    duration: 1,
  });
  gsap.from(".info__text", {
    scrollTrigger: {
      trigger: ".main",
      // markers: true,
      start: "400px top",
      end: "400px top",
    },
    opacity: 0,
    y: -100,
    delay: 0.5,
    duration: 1.3,
  });
  gsap.from(".info__text-white", {
    scrollTrigger: {
      trigger: ".main",
      // markers: true,
      start: "600px top",
      end: "700px top",
    },
    opacity: 0,
    y: -150,
    duration: 1,
  });
  gsap.from(".info__img-rightbottom", {
    scrollTrigger: {
      trigger: ".main",
      // markers: true,
      start: "600px top",
      end: "700px top",
    },
    y: 200,
    x: 200,
    delay: 0.5,
    duration: 0.5,
  });

  gsap.from(".slide__img img", {
    scrollTrigger: {
      trigger: ".info",
      // markers: true,
      start: "center top",
    },
    opacity: 0,
    delay: 0.5,
    duration: 1.2,
  });
  gsap.from(".circle", {
    scrollTrigger: {
      trigger: ".info",
      // markers: true,
      start: "center top",
    },
    y: -200,
    x: -200,
    scale: 0.5,
    delay: 0.3,
    duration: 1,
  });
  gsap.from(".productSlider .slide__title", {
    scrollTrigger: {
      trigger: ".info",
      // markers: true,
      start: "bottom top",
    },
    x: -100,
    opacity: 0,
    delay: 0.3,
    duration: 1.4,
  });
  gsap.from(".slide__text p", {
    scrollTrigger: {
      trigger: ".info",
      // markers: true,
      start: "bottom top",
    },
    x: -30,
    opacity: 0,
    delay: 0.5,
    duration: 1.8,
  });
  gsap.from(".productSlider .swiper-button-prev", {
    scrollTrigger: {
      trigger: ".info",
      // markers: true,
      start: "bottom top",
    },
    opacity: 0,
    duration: 0.7,
  });
  gsap.from(".productSlider .swiper-button-next", {
    scrollTrigger: {
      trigger: ".info",
      // markers: true,
      start: "bottom top",
    },
    opacity: 0,
    x: -90,
    delay: 0.5,
    duration: 0.9,
  });

  gsap.from(".property .tableline__img", {
    scrollTrigger: {
      trigger: ".productSlider",
      // markers: true,
      start: "center top",
    },
    opacity: 0,
    x: -50,
    scaleX: 1.2,
    duration: 1,
  });
  gsap.from(".property h3.tableline__text-noborder", {
    scrollTrigger: {
      trigger: ".productSlider",
      // markers: true,
      start: "center top",
    },
    opacity: 0,
    x: -50,
    delay: 0.3,
    duration: 1.3,
  });
  gsap.from(".property h3.tableline__text-border", {
    scrollTrigger: {
      trigger: ".productSlider",
      // markers: true,
      start: "center top",
    },
    opacity: 0,
    x: -50,
    delay: 0.3,
    duration: 1.5,
  });
  gsap.from(".property .tableline p", {
    scrollTrigger: {
      trigger: ".productSlider",
      // markers: true,
      start: "center top",
    },
    opacity: 0,
    x: -30,
    y: -30,
    stagger: 0.2,
    delay: 0.5,
    duration: 1,
  });

  gsap.from(".propertySize__title", {
    scrollTrigger: {
      trigger: ".tableline",
      // markers: true,
      start: "bottom center",
    },
    opacity: 0,
    y: -50,
    duration: 1.3,
  });
  gsap.from(".propertySize__num p:first-of-type", {
    scrollTrigger: {
      trigger: ".tableline",
      // markers: true,
      start: "center top",
    },
    opacity: 0,
    x: -50,
    duration: 1.5,
  });
  gsap.from(".propertySize__num-bold", {
    scrollTrigger: {
      trigger: ".tableline",
      // markers: true,
      start: "center top",
    },
    opacity: 0,
    x: -50,
    y: -50,
    delay: 0.3,
    duration: 1.5,
  });
  gsap.from(".propertySize__star img", {
    scrollTrigger: {
      trigger: ".tableline",
      // markers: true,
      start: "center top",
    },
    opacity: 0,
    x: 200,
    rotate: -360,
    transformOrigin: "center",
    duration: 1.8,
  });
  gsap.from(".propertySize__img-back", {
    scrollTrigger: {
      trigger: ".tableline",
      // markers: true,
      start: "bottom center",
    },
    opacity: 0,
    x: 150,
    y: -50,
    duration: 1,
  });
  gsap.from(".propertySize__img-up", {
    scrollTrigger: {
      trigger: ".tableline",
      // markers: true,
      start: "bottom center",
    },
    opacity: 0,
    x: 75,
    y: -50,
    delay: 0.4,
    duration: 1.3,
  });

  gsap.from(".application__title", {
    scrollTrigger: {
      trigger: ".propertySize",
      // markers: true,
      start: "bottom center",
    },
    opacity: 0,
    y: -300,
    duration: 1,
  });
  gsap.from(".application__sachet", {
    scrollTrigger: {
      trigger: ".propertySize",
      // markers: true,
      start: "bottom center",
    },
    opacity: 0,
    x: -300,
    delay: 0.5,
    duration: 1.3,
  });
  gsap.from(".application .table__item p", {
    scrollTrigger: {
      trigger: ".propertySize",
      // markers: true,
      start: "center top",
    },
    opacity: 0,
    x: -60,
    stagger: 0.3,
    delay: 0.5,
    duration: 1,
  });
  gsap.from(".application__circle", {
    scrollTrigger: {
      trigger: ".application",
      // markers: true,
      start: "center center",
    },
    y: 100,
    x: 100,
    duration: 1.8,
  });
  gsap.from(".application__sub", {
    scrollTrigger: {
      trigger: ".application",
      // markers: true,
      start: "center center",
    },
    y: 100,
    x: -100,
    delay: 0.5,
    duration: 1.3,
  });
  gsap.from(".application__shadow", {
    scrollTrigger: {
      trigger: ".application",
      // markers: true,
      start: "center center",
    },
    y: 100,
    x: -100,
    duration: 1.3,
  });
  gsap.from(".application__btn", {
    scrollTrigger: {
      trigger: ".application",
      // markers: true,
      start: "center center",
    },
    opacity: 0,
    y: -100,
    delay: 0.5,
    duration: 1,
  });

  gsap.from(".packing .table__item p", {
    scrollTrigger: {
      trigger: ".application",
      // markers: true,
      start: "bottom center",
    },
    opacity: 0,
    x: -60,
    stagger: 0.3,
    delay: 0.5,
    duration: 1,
  });

  gsap.from(".fasovka__data p", {
    scrollTrigger: {
      trigger: ".packing",
      // markers: true,
      start: "bottom center",
    },
    opacity: 0,
    y: -50,
    duration: 0.9,
  });
  gsap.from(".fasovka__data svg:first-of-type", {
    scrollTrigger: {
      trigger: ".packing",
      // markers: true,
      start: "bottom center",
    },
    opacity: 0,
    x: 100,
    duration: 0.9,
  });
  gsap.from(".fasovka__data svg:last-of-type", {
    scrollTrigger: {
      trigger: ".packing",
      // markers: true,
      start: "bottom center",
    },
    opacity: 0,
    x: -100,
    duration: 0.9,
  });

  gsap.from(".fasovka__bigText", {
    scrollTrigger: {
      trigger: ".packing",
      // markers: true,
      start: "bottom center",
    },
    opacity: 0,
    y: 200,
    delay: 0.3,
    duration: 1.5,
  });
  var rule = CSSRulePlugin.getRule(".fasovka__bigText::before");
  gsap.fromTo(
    rule,
    { scale: 0.7 },
    {
      scale: 1,
      duration: 2,
      scrollTrigger: {
        trigger: ".packing",
        // markers: true,
        start: "bottom top",
      },
    }
  );
  gsap.from(".fasovka__img-leftmain", {
    scrollTrigger: {
      trigger: ".packing",
      // markers: true,
      start: "bottom top",
    },
    opacity: 0,
    x: 100,
    duration: 1,
  });
  gsap.from(".fasovka__img-left", {
    scrollTrigger: {
      trigger: ".packing",
      // markers: true,
      start: "bottom top",
    },
    opacity: 0,
    rotate: "45deg",
    duration: 1.3,
  });
  gsap.from(".fasovka__left .fasovka__circle-top", {
    scrollTrigger: {
      trigger: ".packing",
      // markers: true,
      start: "bottom top",
    },
    opacity: 0,
    x: 50,
    y: 80,
    duration: 1.5,
  });
  gsap.from(".fasovka__left .fasovka__circle-bottom", {
    scrollTrigger: {
      trigger: ".packing",
      // markers: true,
      start: "bottom top",
    },
    opacity: 0,
    x: 50,
    y: -80,
    delay: 1,
    duration: 0.9,
  });
  gsap.from(".fasovka__left .fasovka__info", {
    scrollTrigger: {
      trigger: ".fasovka",
      // markers: true,
      start: "top top",
    },
    opacity: 0,
    x: 150,
    duration: 1.3,
  });
  if (window.innerWidth < 768) {
    gsap.from(".fasovka__right .fasovka__img:first-of-type", {
      scrollTrigger: {
        trigger: ".fasovka__bigText",
        // markers: true,
        start: "bottom center",
      },
      opacity: 0,
      x: -100,
      duration: 1,
    });
    gsap.from(".fasovka__right .fasovka__circle-top", {
      scrollTrigger: {
        trigger: ".fasovka__bigText",
        // markers: true,
        start: "bottom center",
      },
      opacity: 0,
      x: -50,
      y: 80,
      duration: 0.9,
    });
    gsap.from(".fasovka__right .fasovka__info", {
      scrollTrigger: {
        trigger: ".fasovka__bigText",
        // markers: true,
        start: "bottom center",
      },
      opacity: 0,
      x: -150,
      duration: 1.5,
    });
    gsap.from(".fasovka__right .fasovka__circle-bottom", {
      scrollTrigger: {
        trigger: ".fasovka__bigText",
        // markers: true,
        start: "bottom center",
      },
      opacity: 0,
      x: -50,
      y: -80,
      duration: 0.9,
    });
    gsap.from(".fasovka__img-right", {
      scrollTrigger: {
        trigger: ".fasovka__bigText",
        // markers: true,
        start: "bottom center",
      },
      opacity: 0,
      x: -100,
      y: 100,
      duration: 0.9,
    });
  } else {
    gsap.from(".fasovka__right .fasovka__img:first-of-type", {
      scrollTrigger: {
        trigger: ".fasovka",
        // markers: true,
        start: "top top",
      },
      opacity: 0,
      x: -100,
      delay: 0.5,
      duration: 1,
    });
    gsap.from(".fasovka__right .fasovka__circle-top", {
      scrollTrigger: {
        trigger: ".fasovka",
        // markers: true,
        start: "top top",
      },
      opacity: 0,
      x: -50,
      y: 80,
      delay: 0.5,
      duration: 0.9,
    });
    gsap.from(".fasovka__right .fasovka__info", {
      scrollTrigger: {
        trigger: ".fasovka",
        // markers: true,
        start: "top top",
      },
      opacity: 0,
      x: -150,
      delay: 0.5,
      duration: 1.5,
    });
    gsap.from(".fasovka__right .fasovka__circle-bottom", {
      scrollTrigger: {
        trigger: ".fasovka",
        // markers: true,
        start: "top top",
      },
      opacity: 0,
      x: -50,
      y: -80,
      delay: 0.5,
      duration: 0.9,
    });
    gsap.from(".fasovka__img-right", {
      scrollTrigger: {
        trigger: ".fasovka",
        // markers: true,
        start: "top top",
      },
      opacity: 0,
      x: -100,
      y: 100,
      delay: 0.5,
      duration: 0.9,
    });
  }
  if (window.innerWidth < 1362) {
    gsap.from(".fasovka__left svg", {
      scrollTrigger: {
        trigger: ".fasovka",
        // markers: true,
        start: "top top",
      },
      opacity: 0,
      x: -268,
      y: -201,
      duration: 0.9,
    });
    gsap.from(".fasovka__right svg", {
      scrollTrigger: {
        trigger: ".fasovka",
        // markers: true,
        start: "top top",
      },
      opacity: 0,
      x: 259,
      y: -1016,
      duration: 0.9,
    });
  } else if (window.innerWidth > 1362 && window.innerWidth < 1919) {
    gsap.from(".fasovka__left svg", {
      scrollTrigger: {
        trigger: ".fasovka",
        // markers: true,
        start: "top top",
      },
      opacity: 0,
      x: 106,
      y: -316,
      duration: 0.9,
    });
    gsap.from(".fasovka__right svg", {
      scrollTrigger: {
        trigger: ".fasovka",
        // markers: true,
        start: "top top",
      },
      opacity: 0,
      x: -148,
      y: -307,
      duration: 0.9,
    });
  } else {
    gsap.from(".fasovka__left svg", {
      scrollTrigger: {
        trigger: ".fasovka",
        // markers: true,
        start: "top top",
      },
      opacity: 0,
      x: 127,
      y: -443,
      duration: 0.9,
    });
    gsap.from(".fasovka__right svg", {
      scrollTrigger: {
        trigger: ".fasovka",
        // markers: true,
        start: "top top",
      },
      opacity: 0,
      x: -160,
      y: -443,
      duration: 0.9,
    });
  }

  gsap.from(".fasovka + .tableline p", {
    scrollTrigger: {
      trigger: ".fasovka + .tableline",
      // markers: true,
      start: "+=100px bottom",
    },
    opacity: 0,
    y: -50,
    stagger: 0.2,
    delay: 0.5,
    duration: 1,
  });
  gsap.from(".fasovka + .tableline .tableline__img", {
    scrollTrigger: {
      trigger: ".fasovka + .tableline",
      // markers: true,
      start: "+=100px bottom",
    },
    opacity: 0,
    x: -50,
    scaleX: 1.2,
    duration: 1.3,
  });
  gsap.from(".fasovka + .tableline h3", {
    scrollTrigger: {
      trigger: ".fasovka + .tableline",
      // markers: true,
      start: "+=100px bottom",
    },
    opacity: 0,
    x: -50,
    delay: 0.3,
    duration: 1.3,
  });

  if (window.innerWidth < 1362) {
    gsap.from(".napkin__title", {
      scrollTrigger: {
        trigger: ".fasovka__view",
        // markers: true,
        start: "bottom center",
      },
      x: -100,
      opacity: 0,
      duration: 0.9,
    });
    gsap.from(".napkin__btn", {
      scrollTrigger: {
        trigger: ".napkin",
        // markers: true,
        start: "top center",
      },
      y: -100,
      opacity: 0,
      duration: 0.9,
    });
    gsap.from(".napkin__text p", {
      scrollTrigger: {
        trigger: ".napkin",
        // markers: true,
        start: "top center",
      },
      y: -70,
      x: -70,
      opacity: 0,
      duration: 0.9,
    });
  } else {
    gsap.from(".napkin__title", {
      scrollTrigger: {
        trigger: ".fasovka + .tableline",
        // markers: true,
        start: "bottom center",
      },
      x: -100,
      opacity: 0,
      delay: 0.4,
      duration: 0.9,
    });
    gsap.from(".napkin__btn", {
      scrollTrigger: {
        trigger: ".napkin",
        // markers: true,
        start: "start center",
      },
      y: -200,
      opacity: 0,
      duration: 1,
    });
    gsap.from(".napkin__text p", {
      scrollTrigger: {
        trigger: ".napkin",
        // markers: true,
        start: "start center",
      },
      y: -70,
      x: -70,
      opacity: 0,
      delay: 0.3,
      duration: 1.8,
    });
  }
  gsap.from(".napkin__textHand h3", {
    scrollTrigger: {
      trigger: ".napkin__text",
      // markers: true,
      start: "bottom center",
    },
    x: -100,
    opacity: 0,
    duration: 1,
  });
  gsap.from(".napkin__textHand p", {
    scrollTrigger: {
      trigger: ".napkin__text",
      // markers: true,
      start: "bottom center",
    },
    x: 100,
    opacity: 0,
    delay: 0.3,
    duration: 1,
  });
  if (window.innerWidth < 768) {
    gsap.from(".napkin__hand", {
      scrollTrigger: {
        trigger: ".napkin__btn",
        // markers: true,
        start: "top top",
      },
      rotate: "-15deg",
      scale: 1.1,
      duration: 0.9,
    });
  } else {
    gsap.from(".napkin__hand", {
      scrollTrigger: {
        trigger: ".napkin__text",
        // markers: true,
        start: "bottom center",
      },
      rotate: "-15deg",
      scale: 1.1,
      duration: 0.9,
    });
  }
  gsap.from(".napkin__stick-one", {
    scrollTrigger: {
      trigger: ".napkin",
      // markers: true,
      start: "start center",
    },
    x: 170,
    opacity: 0,
    duration: 1,
  });
  gsap.from(".napkin__stick-two", {
    scrollTrigger: {
      trigger: ".napkin",
      // markers: true,
      start: "start center",
    },
    x: -220,
    opacity: 0,
    delay: 0.5,
    duration: 1.4,
  });
  gsap.from(".napkin__stick-three", {
    scrollTrigger: {
      trigger: ".napkin",
      // markers: true,
      start: "start center",
    },
    opacity: 0,
    y: -50,
    x: 30,
    duration: 1.3,
  });
  gsap.from(".napkin__stick-four", {
    scrollTrigger: {
      trigger: ".napkin",
      // markers: true,
      start: "start center",
    },
    x: 170,
    y: 80,
    x: -10,
    opacity: 0,
    delay: 0.5,
    duration: 1.3,
  });

  gsap.from(".seam__img-left", {
    scrollTrigger: {
      trigger: ".napkin",
      // markers: true,
      start: "bottom center",
    },
    y: 100,
    x: 100,
    duration: 0.9,
  });
  gsap.from(".seam__img-right", {
    scrollTrigger: {
      trigger: ".napkin",
      // markers: true,
      start: "bottom center",
    },
    y: 80,
    x: -80,
    delay: 0.5,
    duration: 0.9,
  });
  gsap.from(".seam__img-rightbottom", {
    scrollTrigger: {
      trigger: ".napkin",
      // markers: true,
      start: "bottom center",
    },
    y: 30,
    x: -100,
    delay: 0.5,
    duration: 0.9,
  });
  gsap.from(".seam__num-one", {
    scrollTrigger: {
      trigger: ".napkin",
      // markers: true,
      start: "bottom top",
    },
    y: 70,
    duration: 1,
  });
  gsap.from(".seam__num-two", {
    scrollTrigger: {
      trigger: ".napkin",
      // markers: true,
      start: "bottom top",
    },
    x: 70,
    delay: 0.5,
    duration: 1,
  });
  gsap.from(".seam__num-three", {
    scrollTrigger: {
      trigger: ".napkin",
      // markers: true,
      start: "bottom top",
    },
    x: -70,
    delay: 0.5,
    duration: 1,
  });
  gsap.from(".seam__num-four", {
    scrollTrigger: {
      trigger: ".napkin",
      // markers: true,
      start: "bottom top",
    },
    y: -70,
    delay: 0.5,
    duration: 1,
  });
  gsap.from(".seam__info > p:first-of-type", {
    scrollTrigger: {
      trigger: ".napkin",
      // markers: true,
      start: "bottom top",
    },
    x: 100,
    opacity: 0,
    duration: 0.9,
  });
  gsap.from(".seam__info > p:last-of-type", {
    scrollTrigger: {
      trigger: ".napkin",
      // markers: true,
      start: "bottom top",
    },
    x: -100,
    opacity: 0,
    duration: 0.9,
  });
  var ruleSeam = CSSRulePlugin.getRule(".seam:before");
  gsap.fromTo(
    ruleSeam,
    { rotate: "-90deg", opacity: 0 },
    {
      rotate: "-39deg",
      duration: 1.5,
      delay: 0.5,
      opacity: 1,
      scrollTrigger: {
        trigger: ".napkin",
        // markers: true,
        start: "bottom top",
      },
    }
  );
  gsap.from(".seam__title", {
    scrollTrigger: {
      trigger: ".napkin",
      // markers: true,
      start: "bottom top",
    },
    y: 120,
    opacity: 0,
    duration: 0.9,
  });

  if (window.innerWidth < 768) {
    gsap.from(".view__img-first", {
      scrollTrigger: {
        trigger: ".seam__num-four",
        // markers: true,
        start: "bottom top",
      },
      y: 50,
      delay: 0.5,
      duration: 1,
    });
    gsap.from(".view__img-second", {
      scrollTrigger: {
        trigger: ".seam__num-four",
        // markers: true,
        start: "bottom top",
      },
      x: 150,
      rotate: "7deg",
      delay: 0.5,
      duration: 1,
    });
    gsap.from(".view__img-third", {
      scrollTrigger: {
        trigger: ".seam__num-four",
        // markers: true,
        start: "bottom top",
      },
      x: -175,
      y: 50,
      rotate: "25deg",
      delay: 0.5,
      duration: 1,
    });
    gsap.from(".view__bigText-first", {
      scrollTrigger: {
        trigger: ".seam__num-four",
        // markers: true,
        start: "bottom top",
      },
      y: 200,
      duration: 1.5,
    });
    gsap.from(".view__text-first", {
      scrollTrigger: {
        trigger: ".seam__num-four",
        // markers: true,
        start: "bottom top",
      },
      y: 150,
      opacity: 0,
      delay: 0.7,
      duration: 1,
    });
    gsap.from(".side-left", {
      scrollTrigger: {
        trigger: ".seam__num-four",
        // markers: true,
        start: "bottom top",
      },
      x: -30,
      opacity: 0,
      duration: 0.9,
    });
    gsap.from(".side-right", {
      scrollTrigger: {
        trigger: ".seam__num-four",
        // markers: true,
        start: "bottom top",
      },
      x: 30,
      opacity: 0,
      duration: 0.9,
    });
  } else {
    gsap.from(".view__img-first", {
      scrollTrigger: {
        trigger: ".seam",
        // markers: true,
        start: "bottom top",
      },
      y: 50,
      delay: 0.5,
      duration: 1,
    });
    gsap.from(".view__img-second", {
      scrollTrigger: {
        trigger: ".seam",
        // markers: true,
        start: "bottom top",
      },
      x: 150,
      rotate: "7deg",
      delay: 0.5,
      duration: 1,
    });
    gsap.from(".view__img-third", {
      scrollTrigger: {
        trigger: ".seam",
        // markers: true,
        start: "bottom top",
      },
      x: -175,
      y: 50,
      rotate: "25deg",
      delay: 0.5,
      duration: 1,
    });
  }
  gsap.from(".view__bigText-first", {
    scrollTrigger: {
      trigger: ".seam",
      // markers: true,
      start: "bottom top",
    },
    y: 200,
    duration: 1.5,
  });
  gsap.from(".view__text-first", {
    scrollTrigger: {
      trigger: ".seam",
      // markers: true,
      start: "bottom top",
    },
    y: 150,
    opacity: 0,
    delay: 0.7,
    duration: 1,
  });
  gsap.from(".side-left", {
    scrollTrigger: {
      trigger: ".seam",
      // markers: true,
      start: "bottom top",
    },
    x: -30,
    opacity: 0,
    duration: 0.9,
  });
  gsap.from(".side-right", {
    scrollTrigger: {
      trigger: ".seam",
      // markers: true,
      start: "bottom top",
    },
    x: 30,
    opacity: 0,
    duration: 0.9,
  });
  gsap.from(".view__circle", {
    scrollTrigger: {
      trigger: ".seam",
      // markers: true,
      start: "bottom top",
    },
    y: -100,
    duration: 0.7,
  });
  gsap.from(".side-down", {
    scrollTrigger: {
      trigger: ".view__img",
      // markers: true,
      start: "bottom - 300px",
    },
    y: -100,
    opacity: 0,
    duration: 0.7,
  });
  gsap.from(".view__bigText-second", {
    scrollTrigger: {
      trigger: ".view__img",
      // markers: true,
      start: "bottom - 300px",
    },
    x: 150,
    delay: 0.5,
    duration: 1.3,
  });
  gsap.from(".view__text-second", {
    scrollTrigger: {
      trigger: ".view__img",
      // markers: true,
      start: "bottom - 300px",
    },
    y: 100,
    opacity: 0,
    duration: 1,
  });
  gsap.from(".view__imgGroup", {
    scrollTrigger: {
      trigger: ".view__info",
      // markers: true,
      start: "top center",
    },
    x: 100,
    duration: 1.5,
  });
  gsap.from(".view__info div", {
    scrollTrigger: {
      trigger: ".view__bigText-second",
      // markers: true,
      start: "top top",
    },
    x: -150,
    opacity: 0,
    duration: 1,
  });
  gsap.from(".view__info-big", {
    scrollTrigger: {
      trigger: ".view__bigText-second",
      // markers: true,
      start: "top top",
    },
    x: -70,
    opacity: 0,
    delay: 0.5,
    duration: 1,
  });
  gsap.from(".circulation__title", {
    scrollTrigger: {
      trigger: ".view__info",
      // markers: true,
      start: "top top",
    },
    x: 100,
    opacity: 0,
    delay: 0.5,
    duration: 1,
  });
  gsap.from(".circulation__text:first-of-type", {
    scrollTrigger: {
      trigger: ".view__info",
      // markers: true,
      start: "top top",
    },
    y: 70,
    opacity: 0,
    duration: 0.8,
  });
  gsap.from(".circulation__text-grey", {
    scrollTrigger: {
      trigger: ".view__info",
      // markers: true,
      start: "top top",
    },
    y: -70,
    opacity: 0,
    delay: 0.3,
    duration: 0.8,
  });
  var ruleLine = CSSRulePlugin.getRule(".view__content-line:after");
  gsap.fromTo(
    ruleLine,
    { scale: 0.2 },
    {
      scale: 1,
      duration: 1.5,
      scrollTrigger: {
        trigger: ".view__info",
        // markers: true,
        start: "top top",
      },
    }
  );
  if (window.innerWidth < 768) {
    gsap.from(".circulation__circle", {
      scrollTrigger: {
        trigger: ".view__imgGroup",
        // markers: true,
        start: "bottom top",
      },
      y: -120,
      opacity: 0,
      duration: 1,
    });
  } else {
    gsap.from(".circulation__circle", {
      scrollTrigger: {
        trigger: ".view__imgGroup",
        // markers: true,
        start: "bottom top",
      },
      y: -120,
      delay: 0.7,
      duration: 1.3,
    });
  }
  gsap.from(".circulation__package-third", {
    scrollTrigger: {
      trigger: ".view__imgGroup",
      // markers: true,
      start: "bottom top",
    },
    y: -70,
    x: -90,
    delay: 0.5,
    duration: 1,
  });
  gsap.from(".circulation__package-null", {
    scrollTrigger: {
      trigger: ".view__imgGroup",
      // markers: true,
      start: "bottom top",
    },
    y: -60,
    x: -80,
    delay: 0.5,
    duration: 1,
  });
  gsap.from(".circulation__package-first", {
    scrollTrigger: {
      trigger: ".view__imgGroup",
      // markers: true,
      start: "bottom top",
    },
    y: 80,
    x: -70,
    duration: 1,
  });
  gsap.from(".circulation__package-second", {
    scrollTrigger: {
      trigger: ".view__imgGroup",
      // markers: true,
      start: "bottom top",
    },
    rotate: "-30deg",
    x: 30,
    transformOrigin: "center",
    duration: 1,
  });

  gsap.from(".production__title", {
    scrollTrigger: {
      trigger: ".circulation",
      // markers: true,
      start: "bottom center",
    },
    y: -50,
    opacity: 0,
    delay: 0.5,
    duration: 1.2,
  });
  gsap.from(".production__info > div", {
    scrollTrigger: {
      trigger: ".circulation",
      // markers: true,
      start: "bottom center",
    },
    x: -50,
    opacity: 0,
    duration: 1,
  });
  gsap.from(".productionSlider", {
    scrollTrigger: {
      trigger: ".circulation",
      // markers: true,
      start: "bottom center",
    },
    y: 50,
    delay: 0.3,
    duration: 0.8,
  });
  gsap.from(".production__text p", {
    scrollTrigger: {
      trigger: ".productionSlider",
      // markers: true,
      start: "bottom center",
    },
    y: -30,
    opacity: 0,
    stagger: 0.3,
    duration: 1,
  });
  gsap.from(".productionSlider__text", {
    scrollTrigger: {
      trigger: ".productionSlider",
      // markers: true,
      start: "bottom bottom",
    },
    y: 30,
    duration: 0.8,
  });
  gsap.from(".productionSlider__text span", {
    scrollTrigger: {
      trigger: ".production__info",
      // markers: true,
      start: "bottom top",
    },
    x: 30,
    opacity: 0,
    duration: 1.1,
  });

  gsap.from(".partners__title", {
    scrollTrigger: {
      trigger: ".specially",
      // markers: true,
      start: "bottom center",
    },
    y: 50,
    opacity: 0,
    delay: 0.5,
    duration: 1,
  });
  gsap.from(".partnersSlider__item", {
    scrollTrigger: {
      trigger: ".specially",
      // markers: true,
      start: "bottom center",
    },
    x: 30,
    opacity: 0,
    stagger: 0.3,
    duration: 1,
  });
  gsap.from(".partners__img img:first-of-type", {
    scrollTrigger: {
      trigger: ".specially",
      // markers: true,
      start: "bottom center",
    },
    y: 100,
    delay: 0.3,
    duration: 0.8,
  });
  gsap.from(".partners__img img:last-of-type", {
    scrollTrigger: {
      trigger: ".specially",
      // markers: true,
      start: "bottom center",
    },
    x: 60,
    delay: 0.7,
    duration: 0.8,
  });

  gsap.from(".worksTable__img img", {
    scrollTrigger: {
      trigger: ".partners",
      // markers: true,
      start: "top top",
    },
    x: -60,
    opacity: 0,
    duration: 1,
  });
  gsap.from(".worksSlider .swiper-wrapper", {
    scrollTrigger: {
      trigger: ".partners",
      // markers: true,
      start: "top top",
    },
    x: 150,
    duration: 1,
  });
  gsap.from(".worksTable__title", {
    scrollTrigger: {
      trigger: ".partners",
      // markers: true,
      start: "top top",
    },
    scaleX: 0.5,
    transformOrigin: "left",
    x: -10,
    opacity: 0,
    delay: 0.3,
    duration: 1,
  });

  gsap.from(".order__bigText", {
    scrollTrigger: {
      trigger: ".worksTable",
      // markers: true,
      start: "bottom center",
    },
    x: 150,
    duration: 1,
  });
  gsap.from(".forma__text-big", {
    scrollTrigger: {
      trigger: ".works",
      // markers: true,
      start: "bottom center",
    },
    y: 50,
    opacity: 0,
    duration: 1,
  });
  gsap.from(".order__img-circle", {
    scrollTrigger: {
      trigger: ".works",
      // markers: true,
      start: "bottom center",
    },
    x: -150,
    duration: 1,
  });
  gsap.from(".order__img-black", {
    scrollTrigger: {
      trigger: ".works",
      // markers: true,
      start: "bottom center",
    },
    x: -70,
    y: 50,
    rotate: "-120deg",
    duration: 1.3,
  });
  gsap.from(".order__img-white", {
    scrollTrigger: {
      trigger: ".works",
      // markers: true,
      start: "bottom center",
    },
    x: -70,
    y: -50,
    rotate: "45deg",
    delay: 0.1,
    duration: 1.5,
  });
  gsap.from(".order .forma__btn", {
    scrollTrigger: {
      trigger: ".works",
      // markers: true,
      start: "bottom center",
    },
    y: -50,
    opacity: 0,
    duration: 1,
  });
  gsap.from(".forma__text-small", {
    scrollTrigger: {
      trigger: ".order__bigText",
      // markers: true,
      start: "top top",
    },
    y: -50,
    opacity: 0,
    delay: 0.5,
    duration: 0.7,
  });
  gsap.from(".order .input", {
    scrollTrigger: {
      trigger: ".works",
      // markers: true,
      start: "bottom center",
    },
    y: 30,
    opacity: 0,
    stagger: 0.2,
    duration: 0.8,
  });

  gsap.from(".contacts__connection a", {
    scrollTrigger: {
      trigger: ".order",
      // markers: true,
      start: "bottom center",
    },
    x: -50,
    opacity: 0,
    duration: 0.8,
  });
  gsap.from(".contacts img", {
    scrollTrigger: {
      trigger: ".contacts",
      // markers: true,
      start: "top top",
    },
    y: 50,
    opacity: 0,
    duration: 1,
  });
  gsap.from(".contactsTable > div > div:last-of-type", {
    scrollTrigger: {
      trigger: ".order",
      // markers: true,
      start: "bottom top",
    },
    scaleY: 0.5,
    transformOrigin: "top",
    color: "#ededed",
    delay: 0.3,
    duration: 0.8,
  });
  gsap.from(".contactsTable > div > div:first-of-type", {
    scrollTrigger: {
      trigger: ".order",
      // markers: true,
      start: "bottom top",
    },
    transformOrigin: "left",
    color: "#dcdcdc",
    delay: 0.3,
    duration: 0.8,
  });
  gsap.from(".contactsTable__btn", {
    scrollTrigger: {
      trigger: ".order",
      // markers: true,
      start: "bottom top",
    },
    x: -100,
    opacity: 0,
    delay: 0.3,
    duration: 0.8,
  });
  gsap.to(".contacts__bigText", {
    x: -9000,
    duration: 300,
    repeat: -1,
    scrollTrigger: {
      trigger: ".order",
      // markers: true,
      start: "bottom top",
    },
  });

  gsap.from(".footer__img", {
    scrollTrigger: {
      trigger: ".contacts",
      // markers: true,
      start: "bottom center",
    },
    y: 100,
    delay: 0.5,
    duration: 1.3,
  });
  gsap.from(".footer__copyright img", {
    scrollTrigger: {
      trigger: ".contacts",
      // markers: true,
      start: "bottom center",
    },
    y: -50,
    opacity: 0,
    duration: 0.5,
  });
  gsap.from(".footer__text-big", {
    scrollTrigger: {
      trigger: ".contacts",
      // markers: true,
      start: "bottom center",
    },
    y: 50,
    x: 50,
    opacity: 0,
    delay: 0.5,
    duration: 1,
  });
  gsap.from(".footer__text p:last-of-type", {
    scrollTrigger: {
      trigger: ".contacts",
      // markers: true,
      start: "bottom center",
    },
    y: -50,
    x: 50,
    opacity: 0,
    delay: 0.5,
    duration: 0.8,
  });
  gsap.from(".footer__text a", {
    scrollTrigger: {
      trigger: ".contacts",
      // markers: true,
      start: "bottom center",
    },
    y: -50,
    opacity: 0,
    delay: 0.5,
    duration: 0.8,
  });
}

// Формы
window.addEventListener("DOMContentLoaded", function () {
  [].forEach.call(document.querySelectorAll(".tel"), function (input) {
    var keyCode;
    function mask(event) {
      event.keyCode && (keyCode = event.keyCode);
      var pos = this.selectionStart;
      if (pos < 3) event.preventDefault();
      var matrix = "+7 (___) ___ ____",
        i = 0,
        def = matrix.replace(/\D/g, ""),
        val = this.value.replace(/\D/g, ""),
        new_value = matrix.replace(/[_\d]/g, function (a) {
          return i < val.length ? val.charAt(i++) || def.charAt(i) : a;
        });
      i = new_value.indexOf("_");
      if (i != -1) {
        i < 5 && (i = 3);
        new_value = new_value.slice(0, i);
      }
      var reg = matrix
        .substr(0, this.value.length)
        .replace(/_+/g, function (a) {
          return "\\d{1," + a.length + "}";
        })
        .replace(/[+()]/g, "\\$&");
      reg = new RegExp("^" + reg + "$");
      if (
        !reg.test(this.value) ||
        this.value.length < 5 ||
        (keyCode > 47 && keyCode < 58)
      )
        this.value = new_value;
      if (event.type == "blur" && this.value.length < 5) this.value = "";
    }
    input.addEventListener("input", mask, false);
    input.addEventListener("focus", mask, false);
    input.addEventListener("blur", mask, false);
    input.addEventListener("keydown", mask, false);
  });
});

function formValidate() {
  const forms = document.querySelectorAll("form");
  forms.forEach((form) => checkForm(form));

  function checkForm(form) {
    const errorFields = form.querySelectorAll(".forma__error"),
    btn = form.querySelector(".forma__btn"),
    inputRequired = form.querySelectorAll("[required]");

    btn.addEventListener("click", (e) => {
      e.preventDefault();
      inputRequired.forEach((input) => {
        if (!input.value) input.nextElementSibling.innerHTML = "Поле, обязательное для заполнения";
      });
      if ([...errorFields].some(error => error.textContent !== "")) return;
      btn.textContent = "Заявка отправлена";
    });

    form.addEventListener("change", (e) => {
      if (e.target.matches(".email")) validateEmail(e.target);
      if (e.target.matches(".tel")) validateTel(e.target);
      if (e.target.matches(".name")) validateText(e.target);
    });
  }

  function validateEmail(input) {
    const pattern = /^[-\w.]+@([A-z0-9][-A-z0-9]+\.)+[A-z]{2,4}$/;
    input.nextElementSibling.innerHTML = input.value.match(pattern) ? "" : "Вы ввели некорректный e-mail";
  }

  function validateTel(input) {
    const value = input.value;
    if (value.length < 4) input.nextElementSibling.innerHTML = "Поле, обязательное для заполнения";
    else if (value.length < 17) input.nextElementSibling.innerHTML = "Вы ввели некорректный номер телефона";
    else  input.nextElementSibling.innerHTML = "";
  }

  function validateText(input) {
    const patternLetter = /^[a-zA-ZА-Яа-яЁё]{3,20}$/u,
      value = input.value;
    let errorMessage = "";

    if (value.length === 0) errorMessage = "Поле, обязательное для заполнения";
    else if (value.length < 3)  errorMessage = "Число символов не должно быть меньше 3";
    else if (value.length > 30) errorMessage = "Число символов не должно превышать 30";
    else if (!value.match(patternLetter)) errorMessage = "Поле может содержать только буквы";

    input.nextElementSibling.innerHTML = errorMessage;
  }

}

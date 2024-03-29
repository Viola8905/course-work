"use strict";
//preloader
$(window).on("load", function () {
  $(".preloader").addClass("complete");
});

const { log } = console;
//for page header

window.addEventListener("scroll", function () {
  let header = document.querySelector(".header");
  header.classList.toggle("sticky", window.scrollY > 0);
});

//scrolling to block
$(".header__menu a").on("click", function () {
  let href = $(this).attr("href");

  $("html, body").animate(
    {
      scrollTop: $(href).offset().top,
    },
    {
      duration: 400, // по умолчанию «400»
      easing: "linear", // по умолчанию «swing»
    }
  );

  $(".header__ul.active ").removeClass("active");
  $(".header__burger.active ").removeClass("active");

  return false;
});

//scroll to block(button)
$(".main__readMore a").on("click", function () {
  let href = $(this).attr("href");

  $("html, body").animate(
    {
      scrollTop: $(href).offset().top,
    },
    {
      duration: 400, // по умолчанию «400»
      easing: "linear", // по умолчанию «swing»
    }
  );

  return false;
});

//click on logo and go to main
$(".header__logo a").on("click", function () {
  let href = $(this).attr("href");

  $("html, body").animate(
    {
      scrollTop: $(href).offset().top,
    },
    {
      duration: 400, // по умолчанию «400»
      easing: "linear", // по умолчанию «swing»
    }
  );

  return false;
});

//for menu burger

const button = document.getElementById("btn-menu");
const menu = document.getElementById("list-menu");

button.addEventListener("click", function toggleMenu() {
  button.classList.toggle("active");
  menu.classList.toggle("active");
});
menu.addEventListener("click", function toggleMenu() {
  button.classList.toggle("active");
  menu.classList.toggle("active");
});

//slider
$(document).ready(function () {
  $(".slider").slick({
    arrows: true,
    dots: true,
    adaptiveHeight: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    speed: 600,
    easing: "linear",
    autoplay: false,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    draggable: false,

    responsive: [
      {
        breakpoint: 1790,
        settings: {
          slidesToScroll: 1,
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 540,
        settings: {
          variableWidth: true,
        },
      },
    ],
  });
});

//tabs

document.getElementById("defaultOpen").click();

function openTxt(evt, img) {
  // Declare all variables
  var i, tabcontent, tablinks;

  // Get all elements with class="tabcontent" and hide them
  tabcontent = document.getElementsByClassName("tabs__contentItem");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Get all elements with class="tablinks" and remove the class "active"
  tablinks = document.getElementsByClassName("tabs__triggerItem");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  // Show the current tab, and add an "active" class to the button that opened the tab
  document.getElementById(img).style.display = "block";
  evt.currentTarget.className += " active";
}

// header

// Form

const form = document.getElementById("contact__form");
form.addEventListener("submit", formSend);

async function formSend(e) {
  e.preventDefault();
  
	log("submit works");
  let formData = new FormData(form);

  let error = formValidate(form);

  if (error === 0) {
    form.classList.add("_sending");

    let response = await fetch("sendmail.php", {
      method: "POST",
      body: formData,
    });
    if (true) {
      let result = await response.json();
      log(result);
      form.reset();
      form.classList.remove("_sending");
    } else {
      log("Сталась помилка!");
    }
  } else {
    alert("Заповність обов'язкові поля");
    form.classList.remove("_sending");
  }
}

function formValidate(form) {
  let error = 0;
  let formReq = document.querySelectorAll("._req");

  for (let index = 0; index < formReq.length; index++) {
    const input = formReq[index];
    log(input);
    formRemoveError(input);

    if (input.classList.contains("_email")) {
      if (emailTest(input)) {
        formAddError(input);
        error++;
      }
    } else {
      if (input.value === "") {
        formAddError(input);
        error++;
      }
    }
  }
  return error;
}

function formAddError(input) {
  input.classList.add("_error");
}
function formRemoveError(input) {
  input.classList.remove("_error");
}

function emailTest(input) {
  return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(input.value);
}

// Particles Config
particlesJS("particles-js", {
  particles: {
    number: {
      value: 180,
      density: {
        enable: true,
        value_area: 1000,
      },
    },
    color: {
      value: "#ffffff",
    },
    shape: {
      type: "circle",
      stroke: {
        width: 1.5,
        color: "#000",
      },
      polygon: {
        nb_sides: 15,
      },
      image: {
        src: "",
        width: 100,
        height: 100,
      },
    },
    opacity: {
      value: 0.7,
      random: true,
      anim: {
        enable: true,
        speed: 1,
        opacity_min: 0.1,
        sync: true,
      },
    },
    size: {
      value: 1,
      random: true,
      anim: {
        enable: false,
        speed: 10,
        size_min: 0.1,
        sync: false,
      },
    },
    line_linked: {
      enable: true,
      distance: 150,
      color: "#000",
      opacity: 1,
      width: 1,
    },
    move: {
      enable: true,
      speed: 1,
      direction: "right",
      random: false,
      straight: false,
      out_mode: "out",
      attract: {
        enable: false,
        rotateX: 600,
        rotateY: 1200,
      },
    },
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: {
        enable: true,
        mode: "repulse",
      },
      onclick: {
        enable: true,
        mode: "push",
      },
      resize: true,
    },
    modes: {
      grab: {
        distance: 200,
        line_linked: {
          opacity: 0.3,
        },
      },
      bubble: {
        distance: 400,
        size: 4,
        duration: 2,
        opacity: 0.2,
        speed: 3,
      },
      repulse: {
        distance: 150,
      },
      push: {
        particles_nb: 2,
      },
      remove: {
        particles_nb: 2,
      },
    },
  },
  retina_detect: true,
});
// Particles 2 Config

particlesJS(
  "particles-js2",

  {
    particles: {
      number: {
        value: 150,
        density: {
          enable: true,
          value_area: 1000,
        },
      },
      color: {
        value: "#ffffff",
      },
      shape: {
        type: "circle",
        stroke: {
          width: 1.5,
          color: "#fff",
        },
        polygon: {
          nb_sides: 15,
        },
        image: {
          src: "",
          width: 100,
          height: 100,
        },
      },
      opacity: {
        value: 0.7,
        random: true,
        anim: {
          enable: true,
          speed: 1,
          opacity_min: 0.1,
          sync: true,
        },
      },
      size: {
        value: 1,
        random: true,
        anim: {
          enable: false,
          speed: 10,
          size_min: 0.1,
          sync: false,
        },
      },
      line_linked: {
        enable: true,
        distance: 150,
        color: "#fff",
        opacity: 1,
        width: 1,
      },
      move: {
        enable: true,
        speed: 0.7,
        direction: "bottom",
        random: false,
        straight: false,
        out_mode: "out",
        attract: {
          enable: false,
          rotateX: 600,
          rotateY: 1200,
        },
      },
    },
    interactivity: {
      detect_on: "canvas",
      events: {
        onhover: {
          enable: true,
          mode: "grab",
        },
        onclick: {
          enable: true,
          mode: "bubble",
        },
        resize: true,
      },
      modes: {
        grab: {
          distance: 400,
          line_linked: {
            opacity: 0.7,
          },
        },
        bubble: {
          distance: 400,
          size: 8,
          duration: 0.2,
          opacity: 0.2,
          speed: 3,
        },
        repulse: {
          distance: 150,
        },
        push: {
          particles_nb: 2,
        },
        remove: {
          particles_nb: 2,
        },
      },
    },
    retina_detect: true,
  }
);

"use strict";

// For page scrolling
window.addEventListener("scroll", function () {
  let header = document.querySelector(".header");
  header.classList.toggle("sticky", window.scrollY > 0);
});

// For menu burger
function toggleMenu() {
  const button = document.getElementById("btn-menu");
  const menu = document.getElementById("list-menu");
  button.classList.toggle("active");
  menu.classList.toggle("active");
}

// Particles Config
particlesJS(
  "particles-js",

  {
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
  }
);

// Slider

let position = 0;

const slidesToShow = 2,
  slidesToScroll = 1,
  container = document.querySelector(".slider-container"),
  track = document.querySelector(".slider-track"),
  btnPrev = document.querySelector(".btn-prev"),
  btnNext = document.querySelector(".btn-next"),
  items = document.querySelectorAll(".slider-item"),
  itemsCount = items.length,
  itemWidth = container.clientWidth / slidesToShow,
  movePosition = slidesToScroll * itemWidth;

items.forEach((item) => {
  item.style.minWidth = `${itemWidth}px`;
});

btnNext.addEventListener("click", () => {
  const itemsLeft =
    itemsCount - (Math.abs(position) + slidesToShow * itemWidth) / itemWidth;

  position -=
    itemsLeft >= slidesToScroll ? movePosition : itemsLeft * itemWidth;

  setPosition();
  checkButtons();
});

btnPrev.addEventListener("click", () => {
  const itemsLeft = Math.abs(position) / itemWidth;

  position +=
    itemsLeft >= slidesToScroll ? movePosition : itemsLeft * itemWidth;

  setPosition();
  checkButtons();
});

const setPosition = () => {
  track.style.transform = `translateX(${position}px)`;
};

const checkButtons = () => {
  btnPrev.disabled = position === 0;
  btnNext.disabled = position <= -(itemsCount - slidesToShow) * itemWidth;
};

checkButtons();

// Feedback Tabs

document.querySelectorAll(".tabs-trigger__item").forEach((item) =>
  item.addEventListener("click", function (e) {
    e.preventDefault();
    const id = e.target.getAttribute("href").replace("#", "");

    document
      .querySelectorAll(".tabs-trigger__item")
      .forEach((child) => child.classList.remove("tabs-trigger__item--active"));

    document
      .querySelectorAll(".tabs-content__item")
      .forEach((child) => child.classList.remove("tabs-content__item--active"));

    item.classList.add("tabs-trigger__item--active");
    document.getElementById(id).classList.add("tabs-content__item--active");
  })
);
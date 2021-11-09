"use strict"

//for page scrolling
window.addEventListener("scroll",function(){
    let header = document.querySelector(".header");
    header.classList.toggle("sticky",window.scrollY > 0);
})





//for menu burger
function toggleMenu(){
    const button = document.getElementById('btn-menu');
    const menu = document.getElementById('list-menu');
    button.classList.toggle('active');
    menu.classList.toggle('active');
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
          mode: "grab",
        },
        onclick: {
          enable: true,
          mode: "repulse",
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

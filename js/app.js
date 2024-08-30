const particlesConfig = {
  particles: {
    number: {
      value: window.innerWidth <= 556 ? 0 : 100,
    },
    color: {
      value: "#ff9900",
    },
    shape: {
      type: "circle",
    },
    opacity: {
      value: 0.8,
    },
    size: {
      value: 3,
    },
    move: {
      enable: true,
      speed: 2,
      direction: "none",
      random: false,
      straight: false,
      out_mode: "out",
      bounce: false,
    },
    shadow: {
      enable: true,
      color: "#ff9900",
      blur: 10,
      offset: {
        x: 0,
        y: 0,
      },
    },
  },
  retina_detect: true,
};

tsParticles.load("tsparticles", particlesConfig);

function initializeParticles() {
  if (window.innerWidth <= 556) {
    // Clear particles or handle the case when window width is small
    tsParticles.load("tsparticles", {}); // Clear particles
    return;
  }

  const particlesConfig = {
    particles: {
      number: {
        value: 100,
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
}

// Initialize particles on page load
window.addEventListener('load', initializeParticles);

// Optionally, update particles on window resize
window.addEventListener('resize', initializeParticles);

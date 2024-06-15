// Function to handle page transition animation
function pageTransition() {
  let tl = gsap.timeline();

  tl.to(".transition", {
    duration: 1,
    scaleY: 1,
    transformOrigin: "bottom",
    ease: "power4.inOut",
  });

  tl.to(".transition", {
    duration: 1,
    scaleY: 0,
    transformOrigin: "top",
    ease: "power4.inOut",
    delay: 0.2,
  });
}

// Function to delay execution
function delay(n) {
  n = n || 0;
  return new Promise((done) => {
    setTimeout(() => {
      done();
    }, n);
  });
}

function cursorAnimation() {
  const cursorMain = document.querySelector(".cursor");
    window.addEventListener("mousemove", function(dets) {
      gsap.to(cursorMain, {
        x: dets.clientX,
        y: dets.clientY,
        duration: 0.5,
        ease: "expo",
      });
    });
  }

barba.init({
  sync: true,
  transitions: [
    {
      async leave(data) {
        const done = this.async();
        pageTransition();
        await delay(1000);
        done();
      },

      async enter(data) {
        cursorAnimation();
      },

      async once(data) {
        cursorAnimation();
      },
    },
  ],
});

barba.hooks.afterEnter(() => {
  cursorAnimation();
});

gsap.registerPlugin(ScrollTrigger) 

window.onbeforeunload = function () {
    window.scrollTo(0, 0);
  }

  

console.log('main.js loaded');

document.querySelector('.responds button').addEventListener('click', function() {
    this.parentElement.remove();
});

let screenWidth = window.innerWidth;

gsap.to('.imimg', {
    scrollTrigger: {
        trigger: '.imimg',
        start: 'bottom bottom',
        end: 'bottom top',
        scrub: true,
        snap: true,
        markers: false,
        pin: true
    },

});

gsap.to('.heart', {
    scrollTrigger: {
        trigger: '.heart',
        start: 'top center',
        toggleActions: "play none  reverse reset",
        end: 'bottom top',
        markers: false,
    },
    scale: 2.5,
});

gsap.to('.heart2', {
    scrollTrigger: {
        toggleActions: "play none  reverse reset",
        trigger: '.heart2',
        start: 'top center',
        end: 'bottom center',
        markers: false,
    },
    scale: 3,
});

gsap.to('.gst', {
    scrollTrigger: {
        trigger: '.gst',
        start: 'top bottom',
        end: '30% center',
        scrub: true,
        snap: true,
        markers: false,
    },

});

gsap.utils.toArray('.st').forEach((el, i) => {
  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: el,
      start: "top 90%",    // เริ่มตอน element เข้าใกล้ขอบล่าง viewport
      end: "bottom 10%",   // จบตอน element เข้าใกล้ขอบบน viewport
      toggleActions: "play reverse play reverse", // เล่น/ย้อนเล่นแบบวนลูป
      markers: false,
      scrub: true,
    }
  });

  tl.fromTo(el, 
    {opacity: 0, x: -50}, // เข้า: จากซ้าย + โปร่งใส
    {opacity: 1, x: 0, duration: 0.5, ease: "power3.out"} // เข้า: มาอยู่ตรงกลาง
  )
  .to(el, 
    {x: screenWidth, opacity: 0, duration: 0.5, ease: "power3.in"} // ออก: เลื่อนไปขวา + โปร่งใส
  );
});

// gsap.to('.sta', {
//     scrollTrigger: {
//         trigger: '.sta',
//         toggleActions: "play none  reverse reset",
//         start: 'center 25%',
//         end: 'bottom 10%',
//         markers: false,
//         pin: false
//     },
//     x: screenWidth,
// });

// gsap.to('.stb', {
//     scrollTrigger: {
//         trigger: '.stb',
//         toggleActions: "play none  reverse reset",
//         start: 'center 25%',
//         end: 'bottom 10%',
//         markers: false,
//         pin: false
//     },
//     x: screenWidth,
// });

// gsap.to('.stc', {
//     scrollTrigger: {
//         trigger: '.stc',
//         toggleActions: "play none  reverse reset",
//         start: 'center 25%',
//         end: 'bottom 10%',
//         markers: false,
//         pin: false
//     },
//     x: screenWidth,
// });

gsap.to('.card-hold', {
    scrollTrigger: {
        trigger: '.card-hold',
        start: 'top bottom',
        end: 'bottom bottom',
        snap: true,
        scrub: true,
        markers: false,
    },
});

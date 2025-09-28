let tl = gsap.timeline({
    scrollTrigger: {
        trigger: '.animated-element',
        start: 'start center',
        end: 'bottom center',
        scrub: true,
        markers: true,
        // toggleActions: 'play reverse play reverse'
    }
});
tl.to('.animated-element', {
    x: 750,
    rotation:360,
    scale:2.5
});

const lenis = new Lenis();
lenis.on('scroll', (e) => {
    console.log(e);
});

function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

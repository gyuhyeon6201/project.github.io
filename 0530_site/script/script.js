gsap.registerPlugin(ScrollTrigger);

/* header 영역 애니메이션 */
// const tl = gsap.timeline();
// tl.from(".slogan>h2",{
//     opacity: 0,
//     y: -50,
//     duration: 1
// })
// .from(".slogan>h1",{
//     opacity: 0,
//     y: -50,
//     duration: 1
// }, "-=0.5")
// .from(".slogan>p",{
//     opacity: 0,
//     y: -50,
//     duration: 1
// }, "-=0.5");

gsap.from(".slogan>h2,.slogan>h1,.slogan>p",{
    opacity: 0,
    y: -50,
    duration: 1,
    stagger: 0.5
});

// aboutme
gsap.from("#aboutme",{
    opacity:0,
    y:100,
    // duration:1,
    scrollTrigger:{
        trigger: "#aboutme",
        start: "top 60%",
        end: "top 30%",
        scrub: true
        // markers: true
    }
});

// laster 가로 스크롤
const $ul = document.querySelector("#laster>ul");
// const dist = $ul.scrollWidth - window.innerWidth; // 이동되어야 하는 width
const dist = $ul.scrollWidth - (window.innerWidth*0.7);
gsap.to($ul,{
    x: -(dist),
    ease: "none",
    scrollTrigger:{
        trigger: "#laster",
        top: "top top",
        end: "+=" +dist,
        pin: true,
        scrub: true
        // markers: true
    }
});


// contact
const $contact = document.querySelector("#contact .title");
gsap.from($contact,{
    opacity: 0.3,
    scale: 0.5,
    duration: 1,
    scrollTrigger:{
        trigger: "#contact",
        start: "top 60%",
        // end: "top 30%",
        scrub: true
        // markers: true
    }
});
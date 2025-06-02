gsap.registerPlugin(ScrollTrigger);

// header 영역의 title이 오른쪽에서 왼쪽으로 이동
const $headerMsg = document.querySelectorAll("header .title li");
gsap.from($headerMsg, {
    x: 300,
    opacity: 0,
    duration: 1,
    stagger: 0.5,
});

// 화살표가 위에서 아래로 이동, 1번 화살표 실행 후 2번 화살표 실행
gsap.set(".arrow>p", { y: 0 });
const tl = gsap.timeline({ repeat: -1 });
tl.to(".arrow>p", {
    y: 0,
    opacity: 1,
    stagger: 0.5,
    duration: 0.2,
    ease: "power1.out",
}).to(".arrow>p", {
    y: 10,
    opacity: 0,
    stagger: 0.2,
    duration: 0.2,
    ease: "power1.out",
});

// h1태그는 scale이 변경, bounce.out 처리
gsap.from("header>h1", {
    scale: 0.7,
    opacity: 0,
    duration: 1,
    ease: "bounce.out",
});

// about 영역을 가로로 스크롤 되게 처리
const $aboutWrap = document.querySelector("#about>.about-wrap");
const scrollWidth = $aboutWrap.scrollWidth - window.innerWidth;
const horizonScroll = gsap.to($aboutWrap, {
    x: -scrollWidth,
    duration: 1,
    scrollTrigger: {
        trigger: "#about",
        start: "top top",
        end: "+=" + scrollWidth,
        pin: true,
        scrub: true,
    },
});

// about info 에 있는 p태그들은 오른쪽에서 왼쪽으로 이동
const $aboutMsg = document.querySelectorAll("#about .info p");
$aboutMsg.forEach((msg) => {
    gsap.from(msg, {
        x: 200,
        opacity: 0,
        duration: 1,
        scrollTrigger: {
            trigger: msg,
            containerAnimation: horizonScroll, // 가로 스크롤일 경우 필수 항목
            start: "left 90%",
            toggleActions: "play reverse play reverse"
        },
    });
});


// keyword 부분이 가로로 왔다갔다 실행
const $keywordList = document.querySelectorAll(".keyword>li");
$keywordList.forEach((elem,idx)=>{
    const posX = (idx===1)? 50:-50;
    gsap.fromTo(elem,{
        x: posX,
    },{
        x: -posX,
        duration:1,
        repeat:-1,
        yoyo: true,
        ease: "none"
    });
});

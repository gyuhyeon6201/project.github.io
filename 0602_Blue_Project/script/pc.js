// header 영역의 title이 오른쪽에서 왼쪽으로 이동
const $headerMsg = document.querySelectorAll("header .title li");
gsap.from($headerMsg,{
    x: 300,
    opacity: 0,
    duration: 1,
    stagger: 0.5
});

// 화살표가 위에서 아래로 이동, 1번 화살표 실행 후 2번 화살표 실행
gsap.set(".arrow>p",{y:0});
const tl = gsap.timeline({repeat:-1});
tl.to(".arrow>p",{
    y:0,
    opacity:1,
    stagger:0.5,
    duration:0.2,
    ease:"power1.out"
})
.to(".arrow>p",{
    y:10,
    opacity:0,
    stagger:0.2,
    duration:0.2,
    ease:"power1.out"
});
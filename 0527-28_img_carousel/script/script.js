// 객체 가져오기
const $prevBtn = document.querySelector(".prev");
const $nextBtn = document.querySelector(".next");
const $cardList = document.querySelectorAll(".card"); // 4
const $sectionList = document.querySelector(".section-cover");
const $menuBtn = document.querySelectorAll("nav>button");

// section about-me 복제 후 맨 뒤 추가
const firstSection = $cardList[0].cloneNode(true);
$sectionList.appendChild(firstSection);

// section Dream 복제 후 맨 뒤 추가
const lastSection = $cardList[$cardList.length - 1].cloneNode(true);
$sectionList.insertBefore(lastSection, $sectionList.firstChild);

// 변수 설정
let current = 1; // 보여줄 카드의 위치(idx)
const img_width = 750; // width(700px) + margin(50px)

// 초기 위치 설정
gsap.set(".section-cover", { x: -img_width * current });

// 버튼 기능
const clickBtn = () => {
    const moveX = -img_width * current;
    gsap.to(".section-cover", {
        x: moveX,
        duration: 0.3,
        onComplete: () => {
            if (current === $cardList.length + 1) {
                current = 1;
                gsap.set(".section-cover", {
                    x: -img_width * current,
                });
            }else if(current === 0){
                current = $cardList.length;
                gsap.set(".section-cover", {
                    x: -img_width * current
                });
            }
        },
    });
};

// 다음 버튼 클릭
$nextBtn.addEventListener("click", () => {
    current++;
    // if (current >= $cardList.length) {
    //     current = 0;
    // }
    clickBtn();
});

// 이전 버튼 클릭
$prevBtn.addEventListener("click", () => {
    current--;
    // if (current < 0) {
    //     current = $cardList.length - 1;
    // }
    clickBtn();
});

// 상단 메뉴바 active 추가/삭제
const updateMenuClass = () => {
    $menuBtn.forEach((btn) => {
        btn.classList.remove("active");
    });
    $menuBtn[current-1].classList.add("active");
};

// 상단 메뉴바 클릭
$menuBtn.forEach((btn) => {
    btn.addEventListener("click", () => {
        current = Number(btn.dataset.index);
        const moveX = -img_width * current;
        gsap.to(".section-cover", {
            x: moveX,
            duration: 0.3,
        });
        updateMenuClass();
    });
});

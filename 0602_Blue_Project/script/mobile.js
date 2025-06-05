(function () {
    
    // header
    gsap.from("header .title>li", {
        y: -100,
        opacity: 0,
        stagger: 0.2,
        delay: 1,
    });

    // 화살표가 위에서 아래로 이동, 1번 화살표 실행 되면서 2번 화살표 실행
    // gsap.set(".arrow>p", { y: 0 });
    const tl3 = gsap.timeline({ repeat: -1 });
    tl3.to(".arrow>p", {
        y: 0,
        opacity: 1,
        stagger: 0.2,
        duration: 0.2,
        ease: "power2.out",
    }).to(
        ".arrow>p",
        {
            y: 10,
            opacity: 0,
            stagger: 0.2,
            duration: 0.2,
            ease: "power1.out",
        },
        "-=0.2"
    );

    // aboutme에 들어가는 텍스트들
    // 사이즈가 작았다가 해당 항목이 보이면 커지면서 보이도록
    const $aboutMsg = document.querySelectorAll(".about-wrap > .info > p");
    $aboutMsg.forEach((msg) => {
        gsap.from(msg, {
            scale: 0.4,
            opacity: 0,
            duration: 1,
            scrollTrigger: {
                trigger: msg,
                start: "top 90%",
                toggleActions: "play reverse play reverse",
            },
        });
    });

    const $keywordList = document.querySelectorAll(".keyword>li");
    // forEach 버전
    // $keywordList.forEach((word, idx) => {
    //     const posX = idx === 1 ? 50 : -50;
    //     gsap.fromTo(
    //         word,
    //         { x: posX },
    //         {
    //             x: -posX,
    //             duration: 1,
    //             delay: idx*0.2,
    //             // repeatDelay: idx*0.3,
    //             repeat: -1,
    //             yoyo: true,
    //             ease: "none",
    //         }
    //     );
    // });

    // timeline 버전
    const tl2 = gsap.timeline({ repeat: -1, yoyo: true });
    tl2.to($keywordList, {
        x: (i) => (i === 1 ? -50 : 50),
        duration: 0.5,
        ease: "sine.inOut",
        stagger: {
            each: 0.2,
        },
    });

    // project 영역의 .item 들은 아래에서 올라오면서 보이도록
    // ??
    // const $item = document.querySelectorAll(".item");
    // $item.forEach((item)=>{
    //     gsap.from(item,{
    //         opacity:0,
    //         duration:0.5,
    //         scrollTrigger:{
    //             trigger: item,
    //             start: "top 80%",
    //             toggleActions: "play reverse play reverse"
    //         }
    //     });
    // });
    // 강사님 버전
    const $projects = document.querySelectorAll("#projects>.project-wrap");
    $projects.forEach((article) => {
        const $item = article.querySelectorAll(".item");
        $item.forEach((item) => {
            gsap.from(item, {
                y: 100,
                opacity: 0,
                duration: 1,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: item,
                    start: "top 80%",
                    end: "top 40%",
                    scrub: true,
                },
            });
        });
    });

    // top 50% 즈음부터 PC버전과 동일하게 애니메이션
    const $shapes = document.querySelectorAll(".skill-item>li");
    gsap.from($shapes, {
        opacity: 0,
        scale: 0.2,
        duration: 0.5,
        stagger: 0.2,
        ease: "bounce.out",
        scrollTrigger: {
            trigger: "#skills",
            start: "top 50%",
            toggleActions: "play reverse play reverse",
        },
    });

    // footer
    gsap.fromTo(
        "footer",
        { backgroundColor: "#2957E2" },
        {
            backgroundColor: "#eeeeee",
            duration: 0.5,
            ease: "power2.out",
            scrollTrigger: {
                trigger: "footer",
                start: "top 80%",
                end: "bottom bottom",
                scrub: true,
                toggleActions: "play none none none",
            },
        }
    );

    // footer links 깜박임
    // 선택자 직접 사용 버전
    gsap.to(".links>li:nth-child(1)", {
        backgroundColor: "#eeeeee",
        color: "#2957E2",
        borderColor: "#2957E2",
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut",
        scrollTrigger: {
            trigger: "footer",
            start: "top 50%",
            toggleActions: "play none none none",
        },
    });
    gsap.to(".links>li:nth-child(2)", {
        backgroundColor: "#eeeeee",
        color: "#2957E2",
        borderColor: "#2957E2",
        duration: 2,
        repeat: -1,
        delay: 2,
        yoyo: true,
        ease: "power1.inOut",
        scrollTrigger: {
            trigger: "footer",
            start: "top 50%",
            toggleActions: "play none none none",
        },
    });

    // 병합본
    // gsap.to(".links>li",{
    //     backgroundColor: (i)=>(i===0 ? "#2957E2" : "#eeeeee"),
    //     color: (i)=>(i===0 ? "#eeeeee" : "#2957E2"),
    //     borderColor: (i)=>(i===0 ? "#eeeeee" : "#2957E2"),
    //     duration: 2,
    //     repeat: -1,
    //     yoyo: true,
    //     ease: "power1.inOut",
    //     scrollTrigger: {
    //         trigger: "footer",
    //         start: "top 50%",
    //         toggleActions: "play none none none"
    //     }
    // });
})();

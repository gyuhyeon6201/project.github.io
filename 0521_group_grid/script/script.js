// 요소 선택
const $menu = document.querySelectorAll("main>ul>li");
const $section = document.querySelector("section");

// 메뉴클릭
$menu.forEach((elem)=>{
    elem.addEventListener("click",()=>{
        // 다른 li에 on이라는 클래스가 추가되어 있으면삭제
        const $on = document.querySelector('main>ul>li.on');
        if($on){
            $on.classList.remove('on');
        }
        elem.classList.add("on");
        
        // 클릭한 메뉴 텍스트 가져오기
        const filter = elem.textContent.trim().toLowerCase();
        const $article = document.querySelectorAll("section>article");
        $article.forEach((article)=>{
            // 1️⃣const text = article.classList.contains("odd") ? "odd" :
            //                 article.classList.contains("even") ? "even" : "";
            // 2️ let text = '';
            // if(article.classList.contains("odd")){
            //     // true이면
            //     text = "odd";
            // }else if(article.classList.contains("even")){
            //     text = "even";
            // }else{
            //     text = '';
            // }
            /* 3️⃣ */ const text = article.className;
            if(filter === 'all' || filter === text){
                article.style.display = 'block';
            }else{
                article.style.display = 'none';
            }
        });
    });
});

// imgList에서 정보를 읽어와서 요소를 생성
// section에 추가
imgList.forEach((data)=>{
    // data값을 이용하여 요소 생성
    const $article = document.createElement("article");
    $article.classList.add(data.type);
    const $div = document.createElement("div");
    const $img = document.createElement("img");
    const $h2 = document.createElement("h2");
    const $p = document.createElement("p");

    // 요소별 데이터
    $img.src = data.img;
    $img.alt = data.title;
    $h2.textContent = data.title;
    $p.textContent = data.desc;

    // 부모자식관계
    $div.appendChild($img);
    $div.appendChild($h2);    
    $div.appendChild($p);
    $article.appendChild($div);
    $section.appendChild($article);
});

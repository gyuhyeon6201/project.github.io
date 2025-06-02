// 홈 화면 요소 가져오기
const $homeSection = document.querySelector("#home");
const $startInput = $homeSection.querySelector("#start-input");
const $startBtn = $homeSection.querySelector("#start-btn");
// 채팅 화면 요소 가져오기
const $chatSection = document.querySelector("#chat");
const $userInput = $chatSection.querySelector("#user-input");
const $sendBtn = $chatSection.querySelector("#send-btn");

let lastWord = "";

// 채팅창에 메시지 추가 함수
let count = 0;
let addChat = (text) => {
    const $chatBox = document.querySelector(".chat-box");
    const $wordList = document.createElement("li");

    count++;
    if (count % 2 === 1) {
        // 홀수
        $wordList.className = "chat-user";
    } else {
        // 짝수
        $wordList.className = "chat-bot";
    }

    // 현재 채팅박스에 들어갈 li의 개수
    // const maxChat = 15;
    // if (count >= maxChat) {
    //     // 가장 첫번째 li 삭제
    //     $chatBox.removeChild($chatBox.firstElementChild);
    // }
    
    $wordList.textContent = text;
    $chatBox.appendChild($wordList);

    // 채팅창을 항상 가장 아래로 스크롤
    $chatBox.scrollTop = $chatBox.scrollHeight;
};

// 홈 화면에서 시작하기 버튼 클릭
$startBtn.addEventListener("click", () => {
    const word = $startInput.value.trim();
    if (word === "") {
        alert("낱말을 입력하세요");
        return;
    }
    lastWord = word;
    // 홈 화면 숨기고 채팅 화면 보여주기
    $homeSection.style.display = "none";
    $chatSection.style.display = "flex";
    // 시작 단어를 채팅창에 추가
    addChat(word);
    $userInput.focus();
});

// 채팅 화면에서 전송 버튼 클릭
$sendBtn.addEventListener("click", () => {
    const word = $userInput.value.trim();
    if (word === "") {
        alert("낱말을 입력하세요");
        return;
    }
    // 끝말잇기 룰 : 마지막 글자와 첫 글자 비교
    if (word[0] === lastWord[lastWord.length - 1]) {
        addChat(word);
        lastWord = word;
        $userInput.value = "";
        $userInput.focus();
    } else {
        alert(
            `틀렸어요. '${lastWord[lastWord.length - 1]}'로 시작해야 합니다.`
        );
        $userInput.focus();
    }
});
$userInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        $sendBtn.click();
    }
});

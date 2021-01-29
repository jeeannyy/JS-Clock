const form = document.querySelector(".js_form");
const input = form.querySelector("input");
const greeting = document.querySelector(".js_greetings");

const USER_LS = "currentUSer";
const SHOWING_CN = "showing";

/* USER_LS는 로컬스토리지 줄인 변수임 */

function handleSubmit(event){
        event.preventDefault();
        const currentValue = input.value;
        console.log(currentValue);
}

/*이벤트가 발생한다는건 그것의 root에서 발생한다는 것-> 관련된거 전부 다 됨
그래서 이런 이벤트 속성의 기본값을 막는거임 */

function askForName(){
    form.classList.add(SHOWING_CN);
    form.addEventListener.add("submit", handleSubmit);
}
/*이름 없을 때 물어보는거- 나중에 추가*/


function paintGreeting(text){
    form.classList.remove(SHOWING_CN);
    greeting.classList.add(SHOWING_CN);

    greeting.innerText = `Hello ${text}`
}

function loadName() {
    const currentUSer = localStorage.getItem(USER_LS);
    if(currentUSer === null){
        askForName();
        /*이건 유저가 없는 경우임*/
    } else{
        paintGreeting(currentUSer);      
        /*유저가 있다면 이 함수를 불러와라*/  
    }
}



function init(){}

init();


/*local storage: 컴퓨터에 정보 저장*/ 
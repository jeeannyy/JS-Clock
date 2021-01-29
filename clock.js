const clockContainer = document.querySelector(".js_clock");
const clockTitle = clockContainer.querySelector("hi");    
    

function getTime() {
    const date = new Date();
    const seconds = date.getSeconds();
    const minutes = date.getMinutes();
    const hours = date.getHours();
    
    clockTitle.innerText = `${hours}:${minutes}:${seconds}`;

    clockTitle.innerText = `${hours < 10 ? `0${hours}` : hours}:${minutes < 10 ? `0${minutes}` : minutes}:${seconds < 10 ? `0${seconds}` : seconds}`;

}    
    


function init() {
    getTime();
    setInterval(getTime, 1000);
}

init();

/*위의 식은 한마디로 미니 if else문이다. 
: 가 else의 뜻임
매우 쉬우면서 유용함.
초가 10보다 작냐?(물어봄) -> 그러면 앞에꺼 실행하고 아니면 : 뒤에꺼 실행해라 ㅇㅇ

문자열 만들 때 `   ` 사용함*/


/*setInterval(함수, 실행할 시간)*/

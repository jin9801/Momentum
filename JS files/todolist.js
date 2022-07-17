const toDoform = document.getElementById("todo-form");
const toDoInput = toDoform.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");

const ToDos_KEY = "todos" //todos의 array값을 이 값에 지정해놓음

let toDos = []; //newTodo가 생길 때 마다 array에 저장이 됨 //시작할 때는 빈칸이다

function saveToDos() {
    localStorage.setItem(ToDos_KEY,JSON.stringify(toDos));
}

function deleteToDo(event) {
    const li = event.target.parentElement;
    //동작하는 event의 target(클릭된 HTML속성)의 부모노드의 값 
    //= 어떤 값이 눌렸는지 알 수 있는 대목
    toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
    li.remove(); //li라는 속성 안의 클릭된 값을 삭제시키는 명령어
    saveToDos();
}

function paintToDo(newTodo) {  //newTodo를 사용함으로써 handleToDoSubmit이 paintToDo을 쓸 명분이 생긴다
    const li = document.createElement("li"); //html에 li를 생성
    li.id = newTodo.id;
    const span = document.createElement("span"); //html에 span를 생성
    span.innerText = newTodo.text; //span의 값은 newToDo에서 가져옴
    const button = document.createElement("button");
    button.innerText = "❌";
    button.addEventListener("click",deleteToDo);
    li.appendChild(span); //li에 span이 소속되어있음
    li.appendChild(button); //li에 button이 소속되어있음
    toDoList.appendChild(li);
}

function handleToDoSubmit(event) {
    event.preventDefault();
    const newTodo = toDoInput.value; //toDoInput의 값을 새로운 변수에 복사시킴 //하단의 빈값이 되기 전의 string이다.
    toDoInput.value=""; //위에 newTodo가 완료되었다면, toDoInput의 창에는 빈칸이 된다.
    const newTodoObj = { //newTodo의 고유 id 생성하는 element
        text: newTodo, //값은 newTodo에서 가져옴
        id: Date.now(), //id는 밀리초 가져오는 명령어로 고유번호 부여
    }
    toDos.push(newTodoObj); //newTodo값이 생길 때마다 toDos에 꾸겨넣는다.
    paintToDo(newTodoObj); //newTodo값을 paintToDo로 화면에 나타냄
    saveToDos();
}

toDoform.addEventListener("submit",handleToDoSubmit);

const savedToDos = localStorage.getItem(ToDos_KEY); //localStorage에서 ToDos_KEY의 값을 가져옴

if(savedToDos !== null) { //savedToDos값이 null이 아니라면
    const parsedToDos = JSON.parse(savedToDos); // parsedToDos는 savedToDos의 값을 array로 변환시킨다.
    toDos = parsedToDos; //toDos가 시작할 때 빈칸으로 시작되기에 이전값이 날라가는 것을 방지하기 위한 구문
    parsedToDos.forEach(paintToDo); //각각의 item에 대해 sayHello를 실행시킨다.
}
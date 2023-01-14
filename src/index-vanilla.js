// 1-2) vanilla-javascript(todo list) redux 코드
import { legacy_createStore as createStore } from 'redux';

const form = document.querySelector('form');
const input = document.querySelector('input');
const ul = document.querySelector('ul');

const ADD_TODO = 'ADD_TODO';
const DELETE_TODO = 'DELETE_TODO';

//action creator(object만 return)
const addToDo = (text)=> {
  return {
    type: ADD_TODO,
    text
  };
};

const reducer = (state=[], action) => {
  switch (action.type){
    case ADD_TODO:
      const newToDoObj = { text: action.text, id: Date.now() };
      return [newToDoObj , ...state];
    case DELETE_TODO:
      const cleaned = state.filter((toDo)=> toDo.id !== action.id);
      return cleaned;
    default:
      return state;
  }
};

const store = createStore(reducer);

store.subscribe(() => console.log(store.getState()))

// const createTodo = (toDo) => {
//   const li = document.createElement('li');
//   li.innerText = toDo;
//   ul.appendChild(li);
// };

const dispatchAddToDo = (text) => {
  store.dispatch(addToDo(text));
}

const deleteToDo = (e) => {
  const id = parseInt(e.target.parentNode.id);
  store.dispatch({ type: DELETE_TODO, id })
}

const paintToDos = () => {
  const toDos = store.getState();
  ul.innerHTML = '';
  toDos.forEach((toDo) => {
    const li = document.createElement('li');
    const btn = document.createElement('button');
    btn.innerText = '❌';
    btn.addEventListener('click', deleteToDo);
    li.id = toDo.id;
    li.innerText = toDo.text;
    li.appendChild(btn);
    ul.appendChild(li);
  });
};

store.subscribe(paintToDos);


const onSubmit = (e) => {
  e.preventDefault();
  const toDo = input.value;
  input.value = '';
  //createTodo(toDo);  기존 createTodo함수 호출대신 dispatch 해준다
  dispatchAddToDo(toDo);
};

form.addEventListener('submit', onSubmit);




// // 1-1) vanilla-javascript(counter) redux 코드
// import { legacy_createStore as createStore } from 'redux';

// //store: data 저장소
// //state: application에서 바뀌는 data

// const add = document.getElementById('add');
// const minus = document.getElementById('minus');
// const number = document.querySelector('span');

// number.innerText = 0;

// const ADD = 'ADD';
// const MINUS = 'MINUS';

// //reducer는 data를 modify하는 function
// //reducer가 return하는 값이 application에 있는 state가 된다
// //action은 func을 부를때 쓰는 두번째 파라미터.
// const countModifier = (count = 0, action) => {
//   switch(action.type) {
//     case "ADD":
//       return count + 1;
//     case "MINUS":
//       return count - 1;
//     default:
//       return count;
//   }
// };

// //createStore는 reducer함수를 요구
// const countStore = createStore(countModifier);

// const onChange = () => {
//   number.innerText = countStore.getState();
// }
// countStore.subscribe(onChange);

// const handleAdd = () => {
//   countStore.dispatch({ type: ADD });
// }
// const handleMinus = () => {
//   countStore.dispatch({ type: MINUS });
// }

// //reducer에 action 보내는 방법 -> dispatch (object형태로)
// add.addEventListener('click', handleAdd);
// minus.addEventListener('click', handleMinus);






// ① vanilla-javascript(counter) 코드
// const add = document.getElementById('add');
// const minus = document.getElementById('minus');
// const number = document.querySelector('span');

// let count = 0;

// number.innerText = count;

// const updateText = () => {
//   number.innerText = count;
// }

// const handleAdd = () => {
//   count = count + 1;
//   updateText();
// }

// const handleMinus = () => {
//   count = count - 1;
//   updateText();
// };

// add.addEventListener('click', handleAdd);
// minus.addEventListener('click', handleMinus);
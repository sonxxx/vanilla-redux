// redux-toolkit
import { configureStore, createAction, createReducer, createSlice } from '@reduxjs/toolkit';
import { legacy_createStore as createStore } from 'redux';

//createAction
export const addToDo = createAction("ADD");
export const deleteToDo = createAction("DELETE");

//createReducer(initialState,)
//createReducer에서 작업할 때 두가지 선택지
//1)새로운 state object 리턴  2)state를 mutate
// const reducer = createReducer([],{
//   //action이 addToDo일 때 
//   [addToDo]: (state, action) => {
//     state.push({text: action.payload, id: Date.now()});
//   },
//   [deleteToDo]: (state, action) => {
//     //무언가를 return 할 때는 새로운 state여야 함(위는 mutate이기 때문에 retrn 하지않음)
//     return state.filter((toDo) => toDo.id !== action.payload);
//   }
// });

//createSlice({ name, initialState, reducers, })
const toDos = createSlice({
  name: 'toDoReducer',
  initialState: [],
  reducers: {
    add: (state, action) => {
      state.push({text: action.payload, id: Date.now()});
    },
    remove: (state, action) => {
      return state.filter((toDo) => toDo.id !== action.payload);
    }
  }
});

const store = configureStore({ reducer: toDos.reducer});
//toDos.actions로부터 add와 remove라는 actions를 export할 수 있다
console.log(toDos.actions);

export const { add, remove } = toDos.actions; 

export default store;







// // react-redux
// import { legacy_createStore as createStore } from 'redux';

// const ADD = 'ADD';
// const DELETE = 'DELETE';

// export const addToDo = (text) => {
//   return {
//     type: ADD,
//     text
//   };
// };
// export const deleteToDo = (id) => {
//   return {
//     type: DELETE,
//     id
//   };
// };

// const reducer = (state=[],action) => {
//   switch(action.type){
//     case ADD:
//       return [{text: action.text, id: Date.now()} , ...state];
//     case DELETE:
//       return state.filter((toDo) => toDo.id !== action.id);
//     default:
//       return state;
//   }
// }

// const store = createStore(reducer);

// export default store;
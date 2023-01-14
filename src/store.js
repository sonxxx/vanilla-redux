// redux-toolkit
import { configureStore, createAction, createReducer } from '@reduxjs/toolkit';
import { legacy_createStore as createStore } from 'redux';

export const addToDo = createAction("ADD");
export const deleteToDo = createAction("DELETE");

//createReducer(initialState,)
//toolkit은 state를 mutate해도 됨 or 새로운 object를 리턴해야함
const reducer = createReducer([],{
  [addToDo]: (state, action) => {
    state.push({text: action.payload, id: Date.now()});
  },
  [deleteToDo]: (state, action) => {
    return state.filter((toDo) => toDo.id !== action.payload);
  }
});

const store = configureStore({reducer});

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
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { add, addToDo, deleteToDo, remove } from '../store';

const Home = () => {
  const [text, setText] = useState("");
  //redux store state를 바로 가져온다(store.getState()랑 같은 기능 / mapStateToProps 대체)
  const todoList = useSelector((state) => state);
  //mapDispatchToProps 대체
  const dispatch = useDispatch();

  const onChange = (e) => {
    setText(e.target.value);
  }
  const onSubmit = (e) => {
    e.preventDefault();
    setText("");
  }

  const addBtn = () => {
    dispatch(add(text));
   
  }

  const deleteBtn = (e) => {
    const id = parseInt(e.target.parentNode.id);
    dispatch(remove(id));
  }

  return (
    <>
      <h1>Home</h1>
      <h2>To Do</h2>
      <form onSubmit={onSubmit}>
        <input type="text" value={text} onChange={onChange}/>
        <button onClick={addBtn}>Add</button>
      </form>
      <ul>
        {
          todoList.map((state)=>(
            <li key={state.id} id={state.id}>
              <Link to={`${state.id}`}>{state.text}</Link>
              <button onClick={deleteBtn}>X</button>
            </li>
          ))
        }
      </ul>
    </>
  )
}

export default Home;
import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

const Detail = () => {
  const id = useParams();
  const todoList = useSelector((state) => state);
  console.log(id);

  const todo = todoList.find((item) => item.id === parseInt(id.id));
  console.log(todo);

 

  return (
    <>
      <h2>{todo.text}</h2><br/>
      Created at: {todo.id}
    </>
  )
};

export default Detail;
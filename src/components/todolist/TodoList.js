import React, { useState } from "react";
import styled from "styled-components";

const TodoList = ({ todolist }) => {
  // const checked = (item) => {
  //   console.log(item.num);
  //   const newtodolist =
  // };

  return (
    <Todo>
      {todolist.map((item) => (
        <TodoItem key={item.num}>
          <p>{item.check ? "o" : "x"}</p>
          <p>{item.name}</p>
        </TodoItem>
      ))}
    </Todo>
  );
};
const Todo = styled.div`
  padding: 20px 0 0;
  overflow: auto;
`;
const TodoItem = styled.div`
  margin: 0 0 10px;
  border-bottom: 1px dashed #ddd;
`;
export default TodoList;

import React, { useState } from "react";
import styled from "styled-components";

let num = 3;
const TodoInsert = ({ setOntoggle, onToggle, setTodolist, todolist }) => {
  const [input, SetInput] = useState("");
  const onChangeValue = (e) => {
    SetInput(e.target.value);
  };
  const addChange = (input) => {
    const newTodoList = todolist.concat({
      num: num,
      name: input,
      check: false,
    });
    setTodolist(newTodoList);
    num += 1;
  };
  return (
    <div>
      <Back onClick={() => setOntoggle(!onToggle)} />
      <InsertWrap>
        <input value={input} onChange={onChangeValue} />
        <button onClick={() => addChange(input)}>+</button>
      </InsertWrap>
    </div>
  );
};
const Back = styled.div`
  background-color: #555;
  height: 100vh;
  left: 0;
  opacity: 0.8;
  position: fixed;
  top: 0;
  width: 100vw;
`;
const InsertWrap = styled.div`
  align-items: center;
  background: #fff;
  border-radius: 10px;
  box-shadow: 0 13px 27px -5px rgb(50 50 93 / 25%),
    0 8px 16px -8px rgb(0 0 0 / 30%), 0 -6px 16px -6px rgb(0 0 0 / 3%);
  display: flex;
  flex-direction: column;
  height: 150px;
  justify-content: center;
  left: 50%;
  position: fixed;
  top: 16%;
  -webkit-transform: translateX(-50%);
  transform: translateX(-50%);
  width: 300px;
`;

export default TodoInsert;

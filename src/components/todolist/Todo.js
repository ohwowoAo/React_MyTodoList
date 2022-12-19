import React, { useState } from "react";
import styled from "styled-components";
import TemplateTit from "./TemplateTit";
import TodoList from "./TodoList";

const Todo = () => {
  let [check, setCheck] = useState(false);
  const [todolist, setTodolist] = useState([
    {
      num: 1,
      name: "할일1",
      check: check,
    },
    {
      num: 2,
      name: "할일2",
      check: check,
    },
  ]);
  return (
    <Template>
      <TemplateInner>
        <TemplateTit todolist={todolist} setTodolist={setTodolist} />
        <TodoList todolist={todolist} />
      </TemplateInner>
    </Template>
  );
};

const Template = styled.div`
  position: relative;
`;

const TemplateInner = styled.div`
  font-size: 24px;
  font-weight: bold;
  font-family: "Nanum Pen Script", cursive;
  color: #5f7eaf;
  text-align: left;
`;

export default Todo;

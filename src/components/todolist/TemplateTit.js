import React, { useState } from "react";
import styled from "styled-components";
import TodoInsert from "./TodoInsert";

const TemplateTit = ({ todolist, setTodolist }) => {
  const [onToggle, setOntoggle] = useState(false);

  return (
    <TitWrap>
      <Tit>TO-DO ({todolist.length})</Tit>
      <Add onClick={() => setOntoggle(!onToggle)}>+</Add>
      {onToggle ? (
        <TodoInsert
          setOntoggle={setOntoggle}
          onToggle={onToggle}
          setTodolist={setTodolist}
          todolist={todolist}
        />
      ) : null}
    </TitWrap>
  );
};
const TitWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 30px 0 0;
`;
const Tit = styled.p`
  margin: 0 10px 0 0;
  font-size: 28px;
`;
const Add = styled.div`
  display: inline-block;
  padding: 5px 10px;
  border: 1px solid #ddd;
  cursor: pointer;
`;
export default TemplateTit;

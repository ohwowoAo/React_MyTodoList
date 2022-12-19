import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./components/login/Login";
import Signup from "./components/login/Signup";
import Todo from "./components/todolist/Todo";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route path="/" element={<Login />} />
        <Route path="/todo" element={<Todo />} />
      </Routes>
    </>
  );
};

export default App;

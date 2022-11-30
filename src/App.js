import React from "react";
import { Routes, Route } from "react-router-dom";
import TodoPage from "./pages/TodoPage";
import Header from "./components/Header/Header";
import HomePage from "./pages/HomePage";
import TodoListPage from "./pages/TodoListPage";

const App = (props) => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/todo-page" element={<TodoPage />} />
        <Route path="/todo-list-page" element={<TodoListPage />} />
      </Routes>
    </div>
  );
};

export default App;

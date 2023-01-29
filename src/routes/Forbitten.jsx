import React from 'react'
import { Route, Routes } from "react-router-dom";

//
import Main from '../pages/Home/Main';
import ManiTodo from '../pages/Todo/ManiTodo';
import AddTodoList from '../pages/Todo/AddTodoList';
import Shov from '../components/todoList/Shov';
import FinishedTodoListShov from '../components/todoList/FinishedTodoListShov';
import EditTodoList from '../components/todoList/EditTodoList';
import Edit from '../components/Todo/Edit';
import AddTodo from '../components/Todo/AddTodo';
import DeleteUser from '../pages/User/DeleteUser';
import Navbar from '../pages/Navbar/Navbar';

function Forbitten() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="*" element={<Main />} />
        <Route path="/" element={<Main />} />
        <Route path="/todo" element={<ManiTodo />} />
        <Route path="/todo/todoList/:id/:date" element={<AddTodoList />} />
        <Route path="/todo/showTodoList/:id/:date" element={<Shov />} />
        <Route
          path="/todo/showFinishedTodoList/:id/:date"
          element={<FinishedTodoListShov />}
        />
        <Route
          path="/todo/showTodoList/:id/:date/edit/:idItem"
          element={<EditTodoList />}
        />
        <Route path="/todo/editTodo/:id/:date" element={<Edit />} />
        <Route path="/todo/addTodo" element={<AddTodo />} />
        <Route path="/deleteAcaunt" element={<DeleteUser />} />
      </Routes>
    </div>
  );
}

export default Forbitten

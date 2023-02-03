import React, { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";
import { useSelector } from "react-redux";

//
const Main = lazy(() => import("../pages/Home/Main"));
const Navbar = lazy(() => import("../pages/Navbar/Forbitten/Navbar"));
const ManiTodo = lazy(() => import("../pages/Todo/MianPageTodo/ManiTodo"));
const AddTodo = lazy(() => import("../pages/Todo/AddTodo/AddTodo"));
const Edit = lazy(() => import("../pages/Todo/EditTodo/EditTodo"));
const UnFinishedTodoList = lazy(() =>
  import("../pages/TodoList/UnFinishedTodoList/UnFinishedTodoList")
);
const FinishedTodoListShov = lazy(() =>
  import("../pages/TodoList/FinishedTodoListView/FinishedTodoList")
);
const AddTodoList = lazy(() =>
  import("../pages/TodoList/AddTodoList/AddTodoList")
);
const EditTodoList = lazy(() =>
  import("../pages/TodoList/EditTodoList/EditTodoList")
);
const DeleteUser = lazy(() => import("../common/user/DeleteUser/DeleteUser"));
// import DeleteUser from "../common/user/DeleteUser/DeleteUser";
// import Main from "../pages/Home/Main";
// import ManiTodo from "../pages/Todo/MianPageTodo/ManiTodo";
// import Navbar from "../pages/Navbar/Forbitten/Navbar";
// import AddTodo from "../pages/Todo/AddTodo/AddTodo";
// import Edit from "../pages/Todo/EditTodo/EditTodo";
// import UnFinishedTodoList from "../pages/TodoList/UnFinishedTodoList/UnFinishedTodoList";
// import FinishedTodoListShov from "../pages/TodoList/FinishedTodoListView/FinishedTodoList";
// import AddTodoList from "../pages/TodoList/AddTodoList/AddTodoList";
// import EditTodoList from "../pages/TodoList/EditTodoList/EditTodoList";
import Loader from "../common/Loader/Loader";

function Forbitten() {
  const ready = useSelector((store) => store.auth.isLoading);
  // if (!ready) return <Loader />;
  return (
    <Suspense fallback={<Loader />}>
      <Navbar />
      <Routes>
        <Route path="*" element={<Main />} />
        <Route path="/" element={<Main />} />
        <Route path="/todo" element={<ManiTodo />} />
        <Route path="/todo/todoList/:id/:date" element={<AddTodoList />} />
        <Route
          path="/todo/showTodoList/:id/:date"
          element={<UnFinishedTodoList />}
        />
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
    </Suspense>
  );
}

export default Forbitten;

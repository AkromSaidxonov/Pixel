/** @format */

import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from "universal-cookie";
import { setToken } from "./redux/auth/authSlice";
import { useDispatch } from "react-redux";
import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";

//pages
import Login from "./pages/Auth/Login";
import SignUp from "./pages/Auth/SignUp";
import Reset from "./pages/Auth/Reset";
import Verify from "./pages/Auth/Verify";
import Navbar from "./pages/Navbar/Navbar";
import Main from "./pages/Home/Main";
import ManiTodo from "./pages/Todo/ManiTodo";
import AddTodoList from "./pages/Todo/AddTodoList";
import Shov from "./components/todoList/Shov";
import Edit from "./components/Todo/Edit";
import EditTodoList from "./components/todoList/EditTodoList";
import AddTodo from "./components/Todo/AddTodo";
import FinishedTodoListShov from "./components/todoList/FinishedTodoListShov";
import Loader from "./pages/Loader/Loader";
import DeleteUser from "./pages/User/DeleteUser";



const App = () => {
	const dispatch = useDispatch();
	const cookies = new Cookies();
	const navigate = useNavigate();
	let token = cookies.get("token");
	const [loader, setLoader] = useState(false)

	useEffect(() => {
		if (token !== undefined) {
			navigate("/");
		}
		dispatch(setToken(token));
			setLoader(true)
		setTimeout(()=>{
			setLoader(false)
		},3000)

	}, [token]);
	return (
		<div className='App'>
			{token === undefined || token === '' ? (
				<Routes>
					<Route path='/' element={<Login />} />
					<Route path='/signup' element={<SignUp />} />
					<Route path='/reset' element={<Reset />} />
					<Route path='verify/:userEmail' element={<Verify />} />
				</Routes>
			) : (
				<div>
					{loader === true ? <Loader/> :
					<div>
					<Navbar />
					<Routes>
						<Route path='/' element={<Main />} />
						<Route path='/todo' element={<ManiTodo />} />
						<Route path='/todo/todoList/:id/:date' element={<AddTodoList />} />
						<Route path='/todo/showTodoList/:id/:date' element={<Shov />} />
						<Route path='/todo/showFinishedTodoList/:id/:date' element={<FinishedTodoListShov />} />
						<Route path='/todo/showTodoList/:id/:date/edit/:idItem' element={<EditTodoList />} />
						<Route path='/todo/editTodo/:id/:date' element={<Edit />} />
						<Route path='/todo/addTodo' element={<AddTodo/>} />
						<Route path='/deleteAcaunt' element={<DeleteUser/>} />
					</Routes>
					</div>
					}


				</div>
			)}

			<ToastContainer
				position='bottom-left'
				autoClose={4000}
				hideProgressBar={false}
				newestOnTop={true}
				closeOnClick
				rtl={false}
				pauseOnFocusLoss
				draggable
				pauseOnHover
			/>
		</div>
	);
};

export default App;

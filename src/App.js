/** @format */

import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from "universal-cookie";
import { setToken } from "./redux/auth/authSlice";
import { useDispatch } from "react-redux";
import { Route, Routes, Navigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";

//pages
import Login from "./pages/Auth/Login";
import SignUp from "./pages/Auth/SignUp";
import Reset from "./pages/Auth/Reset";
import Verify from "./pages/Auth/Verify";
import Navbar from "./pages/Navbar/Navbar";
import Footer from "./pages/Footer/Footer";
import Main from "./pages/Home/Main";
import ManiTodo from "./pages/Todo/ManiTodo";
import AddTodoList from "./pages/Todo/AddTodoList";
import Shov from "./components/todoList/Shov";
import Edit from "./components/Todo/Edit";

const App = () => {
	const dispatch = useDispatch();
	const cookies = new Cookies();
	const navigate = useNavigate();
	let token = cookies.get("token");

	useEffect(() => {
		if (token !== undefined) {
			navigate("/");
		}
		dispatch(setToken(token));
	}, [token]);
	return (
		<div className='App'>
			{token === undefined ? (
				<Routes>
					<Route path='/' element={<Login />} />
					<Route path='/signup' element={<SignUp />} />
					<Route path='/reset' element={<Reset />} />
					<Route path='verify/:userEmail' element={<Verify />} />
				</Routes>
			) : (
				<div>
					<Navbar />
					<Routes>
						<Route path='/' element={<Main />} />
						<Route path='/todo' element={<ManiTodo />} />
						<Route path='/todo/todoList/:id/:date' element={<AddTodoList />} />
						<Route path='/todo/showTodoList/:id/:date' element={<Shov />} />
						<Route path='/todo/editTodo/:id/:date' element={<Edit />} />
					</Routes>
					<Footer />
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

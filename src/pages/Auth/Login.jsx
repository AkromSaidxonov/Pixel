/** @format */

import React, { useState, useEffect } from "react";
import { Input, Button } from "antd";
import { MailOutlined, LockOutlined } from "@ant-design/icons";
import { toast } from "react-toastify";
import { useLoginMutation } from "../../redux/auth/authApi";
import { Link, useNavigate } from "react-router-dom";
import Cookies from "universal-cookie";

const Login = () => {
	const cookies = new Cookies();
	const navigate = useNavigate();
	const [email, setEmail] = useState();
	const [password, setPassword] = useState();

	const [fetch, { data, error, isError, isLoading }] = useLoginMutation();
	const userData = {
		userName: email,
		password: password,
	};
	useEffect(() => {
		const setToken = (token) => {
			if (token !== undefined) {
				cookies.set("token", token, { path: "/" });
				navigate("/");
			}
		};
		data && setToken(data.token) 
		data && window.localStorage.setItem('token', data.token)
		isError && toast.error("Login or password was error");
	}, [data, isError]);

	const handleLogin = async (e) => {
		e.preventDefault();
		await fetch(userData);
	};

	return (
		<div className='login'>
			<div className='login__form'>
				<div className='login__title'>
					<h1>
						Log-in to <span>Pixel</span>{" "}
					</h1>
				</div>
				<form onSubmit={handleLogin}>
					<Input
						className='login__input'
						required
						placeholder='Enter email'
						prefix={<MailOutlined />}
						type='email'
						size='large'
						name='email'
						value={email}
						onChange={(e) => setEmail(e.target.value)}
					/>
					<Input
						className='login__input'
						required
						size='large'
						placeholder='Password'
						prefix={<LockOutlined />}
						type='password'
						name='password'
						value={password}
						onChange={(e) => setPassword(e.target.value)}
					/>
					<div className='login__reset'>
						<Link to='/reset'>Forgot password</Link>
					</div>
					<div className='login__button'>
						{isLoading !== true ? (
							<button type='submit'>Log-in</button>
						) : (
							<Button loading type='submit'>
								Log-in
							</Button>
						)}
					</div>
					<div className='login__links'>
						<h4>or</h4>
						<Link to='/signup'>Sign-up</Link>
					</div>
				</form>
			</div>
		</div>
	);
};

export default Login;

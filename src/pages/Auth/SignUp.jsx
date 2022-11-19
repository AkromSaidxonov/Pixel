/** @format */

import React, { useState, useEffect } from "react";
import { Input, Button, Form } from "antd";
import { UserOutlined, LockOutlined, MailOutlined } from "@ant-design/icons";
import { toast } from "react-toastify";
import { useRegistrMutation } from "../../redux/auth/authApi";
import { Link, useNavigate } from "react-router-dom";
import Cookies from "universal-cookie";

const SignUp = () => {
	const cookies = new Cookies();
	const navigate = useNavigate();
	const [email, setEmail] = useState();
	const [name, setName] = useState();
	const [password, setPassword] = useState();
	const [confirmPassword, setConfirmPassword] = useState();

	const [registr, { data, error, isError, isSuccess, isLoading }] = useRegistrMutation();
	const userData = {
		fullName: name,
		email: email,
		password: password,
		prePassword: confirmPassword,
	};
	console.log(error);
	useEffect(() => {
		isError && toast.error(error.data.responseText);
		isSuccess && navigate(`/verify/${email}`);
	}, [data, isError]);

	const handleLogin = async (e) => {
		e.preventDefault();
		await registr(userData);
	};

	return (
		<div className='signup'>
			<div className='signup__form'>
				<div className='signup__title'>
					<h1>
						Sign-up to <span>Pixel</span>{" "}
					</h1>
				</div>
				<form onSubmit={handleLogin}>
					<Input
						className='signup__input'
						required
						placeholder='Enter name'
						prefix={<UserOutlined />}
						type='text'
						size='large'
						name='email'
						value={name}
						onChange={(e) => setName(e.target.value)}
					/>
					<Input
						className='signup__input'
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
						className='signup__input'
						required
						size='large'
						placeholder='Enter password'
						prefix={<LockOutlined />}
						type='password'
						name='password'
						value={password}
						onChange={(e) => setPassword(e.target.value)}
					/>
					<Input
						className='signup__input'
						required
						size='large'
						placeholder='Confirm password'
						prefix={<LockOutlined />}
						type='password'
						name='password'
						value={confirmPassword}
						onChange={(e) => setConfirmPassword(e.target.value)}
					/>
					<div className='signup__button'>
                        {
                            isLoading !==true ? (<button type='submit'>Sign-up</button>) : (<Button loading type='submit'>Sign-up</Button>)
                        }
						
					</div>
					<div className='signup__links'>
						<h4>or</h4>
						<Link to='/'>Log-in</Link>
					</div>
				</form>
			</div>
		</div>
	);
};

export default SignUp;

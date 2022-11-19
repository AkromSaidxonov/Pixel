/** @format */

import React, { useState, useEffect } from "react";
import { Input, Button, Form } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { toast } from "react-toastify";
import { useLoginMutation } from "../../redux/auth/authApi";
import { Link, useNavigate } from "react-router-dom";
import Cookies from "universal-cookie";

const ChangePassword = () => {
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
		data && setToken(data.token);
		isError && toast.error("Login or password was error");
	}, [data, isError]);

	const handleLogin = async (e) => {
		e.preventDefault();
		// await fetch(userData);
        navigate(`/verify/${email}`)

	};

	return (
		<div className='reset'>
			<div className='reset__form'>
				<div className='reset__title'>
					<h1>
						Enter your <span>Email</span>{" "}
					</h1>
				</div>
				<form onSubmit={handleLogin}>
					<Input
						className='reset__input'
						required
						placeholder='Enter email'
						prefix={<UserOutlined />}
						type='email'
						size='large'
						name='email'
						value={email}
						onChange={(e) => setEmail(e.target.value)}
					/>
	
					<div className='reset__button'>
                        {isLoading !== true ? (<button type='submit' >
							Send
						</button>) : (<Button loading type='submit' >
							Send
						</Button>)}
						
					</div>
				</form>
			</div>
		</div>
	);
};

export default ChangePassword;

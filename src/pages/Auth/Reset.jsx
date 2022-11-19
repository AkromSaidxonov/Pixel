/** @format */

import React, { useState, useEffect } from "react";
import { Input, Button, Form } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { toast } from "react-toastify";
import { useResetMutation } from "../../redux/auth/authApi";
import { Link, useNavigate } from "react-router-dom";
import Cookies from "universal-cookie";

const Reset = () => {
	const cookies = new Cookies();
	const navigate = useNavigate();
	const [email, setEmail] = useState();
	const [sendEmail, setSendEmail] = useState(sendEmail);

	const [reset,{data, isError, isLoading, error}]= useResetMutation();
	const userData = {
		userName: email,
	};

	useEffect(() => {	
		isError && toast.error(error.data.responseText);
	}, [data, isError]);

	const handleLogin = async (e) => {
		e.preventDefault();

		await reset(email);
        navigate(`/verify/${email}`)

	};
console.log(data);
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

export default Reset;

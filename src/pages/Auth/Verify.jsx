/** @format */

import React, { useState, useEffect } from "react";
import { Input, Button,  } from "antd";
import { UserOutlined, } from "@ant-design/icons";
import { toast } from "react-toastify";
import { useVerifyMutation } from "../../redux/auth/authApi";
import {  useNavigate, useParams } from "react-router-dom";


const Verify = () => {
	const navigate = useNavigate();
	const [code, setCode] = useState();
	const { userEmail } = useParams();
	const [verify, { data, error, isError, isLoading, isSuccess }] =useVerifyMutation();
	useEffect(() => {
		isError && toast.error(error.data.responseText);
		isSuccess && navigate("/");
	}, [data, isError]);

	const handleLogin = (e) => {
		e.preventDefault();
		verify( {emailCode:code, email:userEmail });
	};

	return (
		<div className='verify'>
			<div className='verify__form'>
				<div className='verify__title'>
					<p>
						Code sent <span>{userEmail}</span>{" "}
					</p>
				</div>
				<form onSubmit={handleLogin}>
					<Input
						className='verify__input'
						required
						placeholder='Enter code'
						prefix={<UserOutlined />}
						type='number'
						size='large'
						name='email'
						value={code}
						onChange={(e) => setCode(e.target.value)}
					/>

					<div className='verify__button'>
						{isLoading !== true ? (
							<button type='submit'>Sent</button>
						) : (
							<Button loading type='submit'>
								Sent
							</Button>
						)}
					</div>
				</form>
			</div>
		</div>
	);
};

export default Verify;

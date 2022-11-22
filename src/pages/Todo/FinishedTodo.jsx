/** @format */

import React from "react";
import { useGetTodoQuery } from "../../redux/todo/todo";
import { Card } from "antd";
import green from "../../assets/img/icon/circle (1).png";
import red from "../../assets/img/icon/circle.png";
import { EyeOutlined } from "@ant-design/icons";

const FinishedTodo = () => {
	const { data } = useGetTodoQuery();
	console.log(data);
	return (
		<div className='finishedTodo container'>
			<div className='finishedTodo__item'>
				<Card hoverable className='finishedTodo__cart'>
					<div className='finishedTodo__cart-header'>
						<p>22222</p>
						<div>
							<span className='finishedTodo__view'>
								<EyeOutlined />
							</span>
							<span className='finishedTodo__status'>
								{data && data.list.finished !== false ? (
									<img src={red} alt='img' />
								) : (
									<img src={green} alt='img' />
								)}
							</span>
						</div>
					</div>
				</Card>
			</div>
		</div>
	);
};

export default FinishedTodo;

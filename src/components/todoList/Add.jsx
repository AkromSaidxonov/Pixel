/** @format */

import React, { useState } from "react";
import { Tabs } from "antd";
import { useParams } from "react-router";
import { Input } from "antd";
import { FileOutlined, FieldTimeOutlined } from "@ant-design/icons";
import { useAddTodoListMutation } from "../../redux/todo/todoList";
import { toast } from "react-toastify";
import { useNavigate } from "react-router";

const Add = () => {
	const [addTodoList, { isSuccess, isError }] = useAddTodoListMutation();
	const { id, date } = useParams();
	const [comment, setComment] = useState();
	const [start, setStart] = useState();
	const [end, setEnd] = useState();
	const navigate = useNavigate();
	const todoListData = {
		basicId: id,
		toDoLists: [
			{
				timeStart: start + ":00",
				timeFinish: end + ":00",
				comment: comment,
				finished: false,
			},
		],
	};
	const handleAdd = async () => {
		await addTodoList(todoListData);
		isError == true ? toast.error("Went error") : toast.error("Went error");
		isSuccess == true
			? toast.error("Todo item added")
			: toast.success("Todo item added");
		navigate("/todo");
	};

	return (
		<div className='container addTodoList'>
			<div className='addTodoList__link'>
				<Tabs
					centered
					defaultActiveKey='1'
					items={[
						{
							label: date.slice(0, 10) + " y",
							key: "1",
						},
					]}
				/>
				<div className='addTodoList__form'>
					<h1>Add todo item</h1>
					<Input
						className='addTodoList__input'
						required
						placeholder='Enter comment todo'
						prefix={<FileOutlined />}
						type='text'
						size='large'
						name='comment'
						value={comment}
						onChange={(e) => setComment(e.target.value)}
					/>
					<h5>Enter start time</h5>
					<Input
						className='addTodoList__input'
						required
						prefix={<FieldTimeOutlined />}
						type='time'
						size='large'
						name='comment'
						value={start}
						onChange={(e) => setStart(e.target.value)}
					/>
					<h5>Enter end time</h5>
					<Input
						className='addTodoList__input'
						required
						prefix={<FieldTimeOutlined />}
						type='time'
						size='large'
						name='comment'
						value={end}
						onChange={(e) => setEnd(e.target.value)}
					/>
					<button onClick={handleAdd}>Add</button>
				</div>
			</div>
		</div>
	);
};

export default Add;

/** @format */

import React, { useState, useEffect } from "react";
import { Tabs } from "antd";
import { useParams } from "react-router";
import { Input } from "antd";
import { useEditTodoMutation } from "../../redux/todo/todo";
import { toast } from "react-toastify";
import { useNavigate } from "react-router";
const Edit = () => {
	const [editTodo, { data, error }] = useEditTodoMutation();
	const { id, date } = useParams();
	const [dateTodo, setDateTodo] = useState(date);
	const navigate = useNavigate();

	const todoListData = {
		id: id,
		date: dateTodo,
	};
	const handleAdd = async () => {
		await editTodo(todoListData);
		data && toast.success("Todo edited");
		error && toast.error(error.data.responseText);
		navigate("/todo");
	};

	return (
		<div className='container editTodo'>
			<div className='editTodo__link'>
				<Tabs
					defaultActiveKey='1'
					items={[
						{
							label: "Edit todo " + date.slice(0, 10) + " y",
							key: "1",
						},
					]}
				/>
				<div className='editTodo__form'>
					<h1>Edit todo</h1>
					<Input
						className='editTodo__input'
						required
						placeholder='Enter editdate'
						type='date'
						size='large'
						name='date'
						onChange={(e) => setDateTodo(e.target.value)}
					/>

					<button onClick={handleAdd}>Edit</button>
				</div>
			</div>
		</div>
	);
};

export default Edit;

/** @format */

import React from "react";
import {
	useGetTodoQuery,
	useFinshTodoMutation,
	useDeleteTodoMutation,
} from "../../redux/todo/todo";
import { Card } from "antd";
import red from "../../assets/img/icon/circle.png";
import green from "../../assets/img/icon/circle (1).png";
import {
	CheckOutlined,
	DeleteOutlined,
	EditOutlined,
	EyeOutlined,
	FileAddOutlined,
} from "@ant-design/icons";
import { toast } from "react-toastify";
import { useNavigate } from "react-router";

const Todo = () => {
	const { data } = useGetTodoQuery();
	const navigate = useNavigate();
	const [finishTodo, { isSuccess }] = useFinshTodoMutation();
	const [deleteTodo, { isError }] = useDeleteTodoMutation();


	const addTodoList = (id, date) => {
		navigate(`todoList/${id}/${date}`);
	};
	const handleView = (id, date) => {
		navigate(`showTodoList/${id}/${date}`);
	};
	const handleEdit = (id, date) => {
		navigate(`editTodo/${id}/${date}`);
	};
	const handleFinsh = async(id) => {
		await finishTodo(id);
        isSuccess && toast.success("Todo finished");
	};
	const handleDlete = async(id) => {
		await deleteTodo(id);
        isError === false ? toast.error("Todo deleted") : "";
	};

	return (
		<div className='todo'>
			{data && data.list.length < 1 ? (
				<h1>Todo not created</h1>
			) : (
				data &&
				data.list.map((item) => (
					<div key={item.id} className='todo__item'>
						<div className='todo__carts'>
							<Card
								title={item.date.slice(0, 10) + " y"}
								extra={
									<div className='todo__cart-header'>
										<span className='todo__view'>
											<EyeOutlined
												onClick={handleView.bind(null, item.id, item.date)}
											/>
										</span>
										<span className='todo__status'>
											{data && data.list.finished !== false ? (
												<img src={red} alt='img' />
											) : (
												<img src={green} alt='img' />
											)}
										</span>
									</div>
								}
								hoverable
								className='todo__cart'>
								<div className='todo__cart-detail'>
									<div>
										<FileAddOutlined
											onClick={addTodoList.bind(null, item.id, item.date)}
										/>
									</div>
									<div>
										<EditOutlined
											onClick={handleEdit.bind(null, item.id, item.date)}
										/>
									</div>
									<div>
										<CheckOutlined onClick={handleFinsh.bind(null, item.id)} />
									</div>
									<div>
										<DeleteOutlined onClick={handleDlete.bind(null, item.id)} />
									</div>
								</div>
							</Card>
						</div>
					</div>
				))
			)}
		</div>
	);
};

export default Todo;

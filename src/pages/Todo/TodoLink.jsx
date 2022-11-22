/** @format */

import React from "react";
import { Tabs } from "antd";
import Todo from "./Todo";
import FinishedTodo from "./FinishedTodo";

const TodoLink = () => {
	return (
		<div className='container todoLink'>
			<div className='todoLink__link'>
				<Tabs
					centered
					defaultActiveKey='1'
					items={[
						{
							label: "Todos",
							key: "1",
							children: <Todo />,
						},
						{
							label: "Tab 2",
							key: "2",
							children: "Tab 2",
							disabled: true,
						},
						{
							label: "Tab 3",
							key: "3",
							children: <FinishedTodo />,
						},
					]}
				/>
			</div>
		</div>
	);
};

export default TodoLink;

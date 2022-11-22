/** @format */

import React, {useEffect} from "react";
import logo from "../../assets/img/logo/pixel.png";
import userIcon from "../../assets/img/icon/user.png";
import { Link } from "react-router-dom";
import { DownOutlined } from "@ant-design/icons";
import { Dropdown, Space, Divider, Avatar } from "antd";
import { useGetUserQuery } from "../../redux/user/user";

const Navbar = () => {
	const { data } = useGetUserQuery();
	useEffect(()=>{},[data])

	const items = [
		{
			key: "1",
			label: <Link to='/todo'>Todo</Link>,
		},
	];
	return (
		<div className='navbar'>
			<div className='container '>
				<div className='navbar__items'>
					<div className='navbar__logo'>
						<img src={logo} alt='logo' />
						<Link to='/'>Pixel</Link>
					</div>
					<div className='navbar__links'>
						<Link to='/'>Home</Link>
						<Dropdown
							menu={{
								items,
							}}
							dropdownRender={(menu) => (
								<div className='dropdown-content'>
									{menu}
									<Divider
										style={{
											margin: 0,
											cursor: "pointer",
										}}
									/>
								</div>
							)}>
							<a onClick={(e) => e.preventDefault()}>
								<Space>
									Services
									<DownOutlined />
								</Space>
							</a>
						</Dropdown>
					</div>
					<div className='navbar__user'>
						<h1>{data && data.userName}</h1>
						<Avatar className='avatar'>
							{data ? (
								data.attachamentContentId === null ? (
									<h1 style={{color:'white', textAlign:'center'}}>{data && data.userName.slice(0, 1)}</h1>
								) : (
									<img
										alt='user'
										src={`https://pixel-inc.herokuapp.com/api/attachment/get/${data.attachamentContentId}`}
									/>
								)
							) : (
								""
							)}
						</Avatar>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Navbar;

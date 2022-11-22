/** @format */
import React, { useState } from "react";
import front from "../../assets/img/img/photo_2022-01-25_19-23-24.jpg";
import back from "../../assets/img/img/photo_2022-11-21_15-27-33.jpg";
import resume1 from "../../assets/document/SWE_AKROM.pdf";
import resume2 from "../../assets/document/Sardor Sodiqjonov.pdf";
import { DownloadOutlined } from "@ant-design/icons";
import { Button, Radio, Space, Divider } from "antd";

const SectionThree = () => {
	const [hover, setHover] = useState(true);
	const [hoverfr, setHoverfr] = useState(true);
	return (
		<div className='sectionThree container'>
			<h1 className='sectionThree__title'>Meet our Pixel team</h1>
			<div className='sectionThree__item'>
				<div className='sectionThree__cart'>
					<div className='sectionThree__cart-img'>
						<img src={front} alt='img' />
					</div>
					<div className='sectionThree__cart-info'>
						<h1>Front-end</h1>
						<p>More than one year of work experience</p>
						<div
							onMouseEnter={() => setHoverfr(false)}
							onMouseLeave={() => setHoverfr(true)}>
							{hoverfr === true ? (
								<span className='front' download>
									Download CV
								</span>
							) : (
								<a className='front' href={resume1} download>
									<DownloadOutlined /> Download
								</a>
							)}
						</div>
					</div>
				</div>
				<div className='sectionThree__cart'>
					<div className='sectionThree__cart-img'>
						<img src={back} alt='img' />
					</div>
					<div className='sectionThree__cart-info'>
						<h1>Back-end</h1>
						<p>More than one year of work experience</p>
						<div
							onMouseEnter={() => setHover(false)}
							onMouseLeave={() => setHover(true)}>
							{hover === true ? (
								<span className='back' download>
									Download CV
								</span>
							) : (
								<a className='back' href={resume2} download>
									<DownloadOutlined /> Download
								</a>
							)}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default SectionThree;

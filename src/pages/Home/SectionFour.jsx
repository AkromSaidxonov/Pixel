/** @format */

import React from "react";
import { useGetUserInfoQuery } from "../../redux/user/user";
import CountUp from "react-countup";

const SectionFour = () => {
	const { data } = useGetUserInfoQuery();
	return (
		<div className=' sectionFour'>
			<div className='container'>
				<h1>How many people love to use Pixel?</h1>
				<div className='sectionFour__item'>
					<CountUp start={0} end={data && data.userCount} delay={0}>
						{({ countUpRef }) => (
							<div className='sectionFour__users'>
								<h3>Our users :</h3> <span ref={countUpRef} />
							</div>
						)}
					</CountUp>
					<CountUp start={0} end={data && data.activeUser} delay={0}>
						{({ countUpRef }) => (
							<div className='sectionFour__activUsers'>
								<h3>Activ users :</h3> <span ref={countUpRef} /> <span> %</span>
							</div>
						)}
					</CountUp>
					<CountUp start={0} end={data && data.notActiveUser} delay={0}>
						{({ countUpRef }) => (
							<div className='sectionFour__usersNoActive'>
								<h3>Not active users :</h3>  <span ref={countUpRef} />{" "}
								<span> %</span>
							</div>
						)}
					</CountUp>
				</div>
			</div>
		</div>
	);
};

export default SectionFour;

/** @format */

import React from "react";
import video from "../../../../assets/video/895276dca754471c5442a914ffb3ca5b.mp4";
import { useGetUserQuery } from "../../../../common/store/users/users";
useGetUserQuery;
const SectionOne = () => {
  const { data } = useGetUserQuery();

  return (
    <div className="sectionOne">
      <div className="sectionOne__items container">
        <div className="sectionOne__info">
          <h1>Hi dear {data && data.userName}!</h1>
          <p>Wellcome to Pixel group</p>
          <p>You can use our service for free</p>
        </div>
        <div className="sectionOne__video">
          <video loop={true} autoPlay={true}>
            <source src={video} type="video/mp4" />
          </video>
        </div>
      </div>
    </div>
  );
};

export default SectionOne;

/** @format */
import React, { useState } from "react";
import front from "../../../../assets/img/img/photo_2022-01-25_19-23-24.jpg";
import back from "../../../../assets/img/img/photo_2022-11-21_15-27-33.jpg";
import resume1 from "../../../../assets/document/SWE_AKROM.pdf";
import resume2 from "../../../../assets/document/Sardor Sodiqjonov.pdf";
import { DownloadOutlined } from "@ant-design/icons";

const SectionThree = () => {
  const [hover, setHover] = useState(true);
  const [hoverfr, setHoverfr] = useState(true);

  const frOnMouse = () => setHoverfr(false);
  const frOnMouseLeave = () => setHoverfr(true);

  const bcOnMouse = () => setHover(false);
  const bcOnMouseLeave = () => setHover(true);

  const frCv = hoverfr ? (
    <span className="front" download>
      Download CV
    </span>
  ) : (
    <a className="front" href={resume1} download>
      <DownloadOutlined /> Download
    </a>
  );

  const bcCv = hover ? (
    <span className="back" download>
      Download CV
    </span>
  ) : (
    <a className="back" href={resume2} download>
      <DownloadOutlined /> Download
    </a>
  );
  return (
    <div className="sectionThree container">
      <h1 className="sectionThree__title">Meet our Pixel team</h1>
      <div className="sectionThree__item">
        <div className="sectionThree__cart">
          <div className="sectionThree__cart-img">
            <img src={front} alt="img" />
          </div>
          <div className="sectionThree__cart-info">
            <h1>Front-end</h1>
            <p>More than one year of work experience</p>
            <div onMouseEnter={frOnMouse} onMouseLeave={frOnMouseLeave}>
              {frCv}
            </div>
          </div>
        </div>
        <div className="sectionThree__cart">
          <div className="sectionThree__cart-img">
            <img src={back} alt="img" />
          </div>
          <div className="sectionThree__cart-info">
            <h1>Back-end</h1>
            <p>More than one year of work experience</p>
            <div onMouseEnter={bcOnMouse} onMouseLeave={bcOnMouseLeave}>
              {bcCv}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionThree;

import React from "react";
import Header from "./Header";
import Leftpart from "./Leftpart";
import Gimg from "../images/img1.png";
import TopImg11 from "../images/TopImg11.png";
import TopImg22 from "../images/TopImg22.png";
import TopImg33 from "../images/TopImg33.png";

export default function Section1() {
  return (
    <div className="PageBody">
      <Header />
      <div className="PageContent">
        <Leftpart />
        <div className="TopPagePicture">
          <div className="TopImg1">
            <img className="TopImg11" src={TopImg11} alt="" />
          </div>
          <div className="TopImg2">
            <img className="TopImg22" src={TopImg22} alt="" />
          </div>
          <div className="TopImg3">
            <img className="TopImg33" src={TopImg33} alt="" />
          </div>
          <div className="TopPageBase"></div>
          <div className="ImageContainer">
            <img className="MainImg" src={Gimg} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

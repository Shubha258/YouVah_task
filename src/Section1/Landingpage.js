import React from "react";
import "./Landingpage.css";

export const Landingpage = () => {
  return (
    <div className="TopPageBody">
      <div className="TopPageNavbar">
        <div className="FooterCompanyName">
          <div className="TopPageLogo-First-Half"></div>
          <div className="TopPageLogo-Second-Half"></div>
          <div className="TopPageFont5">Lingua</div>
        </div>

        <div className="TopPageNavbarMid TopPageFont4">
    
          <li>Courses</li>
          <li>About us</li>
          <li>Teachers</li>
          <li>Pricing</li>
          <li>Careers</li>
          <li>Blog</li>
        </div>
        <div className="TopPageNavbarRight TopPageFont6">Get started</div>
      </div>

      <div className="TopPageMatter">
        <div className="TopPageDescription">
          <div className="TopPageFont1">
            A <span className="TopPageBlueText">unique</span> approach to
            learning foreign languages online
          </div>
          <div className="TopPageFont2">
            Learn at your own pace, with lifetime access on mobile and desktop
          </div>
          <div className="TopPageButton TopPageFont3">Get Started</div>
        </div>
        <div className="TopPagePicture">
          <div className="HeaderImg3">
            <img className="HeaderImg33" src="HeaderImg3.png" alt="" />
          </div>
          <div className="HeaderImg2">
            <img className="HeaderImg22" src="HeaderImg2.png" alt="" />
          </div>
          <div className="HeaderImg1">
            <img className="HeaderImg11" src="HeaderImg1.png" alt="" />
          </div>
          <div className="TopPageBase"></div>
          <div className="TopPageImageContainer">
            <img className="TopPageGirlImg" src="Girl.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};
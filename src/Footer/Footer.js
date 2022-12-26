import React from "react";
import "./Footer.css";
import facebook from "../images/Facebook.png"
import twitter from "../images/Twitter.png"
import instagram from "../images/Instagram.png"

export const Footer = () => {
  return (
    <div className="FooterMainBody">
      <div className="Left-Part">
        <div className="CompanyName">
          <div className="Logo-First-Part"></div>
          <div className="Logo-Second-Part"></div>
          <div className="Font3">Lingua</div>
        </div>

        <ul className="Font4">
          <li>20 Osgood Rd, Milford, NH 03055, USA +1283871239190213021</li>
        </ul>
      </div>

      <div className="Mid-Part">
        <div className="Font1">Company</div>
        <ul className="Font2">
          <li>Careers</li>
          <li>Teachers</li>
          <li>Support</li>
          <li>Contact</li>
        </ul>
      </div>

      <div className="Mid">
        <div className="Font1">Product</div>
        <ul className="Font2">
          <li>Courses</li>
          <li>Pricing</li>
          <li>Blog</li>
        </ul>
      </div>

      <div className="Mid">
        <div className="Font1">Legal</div>
        <ul className="Font2">
          <li>Terms & Conditions</li>
          <li>Privacy policy</li>
        </ul>
      </div>

      <div className="Right-Part">
        <div className="Media-Part">
          <img src={facebook} alt="" />
        </div>
        <div className="Media-Part">
          <img src={twitter} alt="" />
        </div>
        <div className="Media-Part">
          <img src={instagram} alt="" />
        </div>
      </div>
    </div>
  );
};
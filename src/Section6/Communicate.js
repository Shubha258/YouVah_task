import React from "react";
import "./Communicate.css";

export const Communicate = () => {
  const [Email, UpdateEmail] = React.useState("");

  const Handlechange = (event) => {
    UpdateEmail(event.target.value);
  };

  const Handlesubmit = () => {
    alert("Email sent Successfully! You will be contacted soon.");
    UpdateEmail("");
  };

  return (
    <div className="Sec6PageBody">
      <div className="PageHead">
        <div className="Heading1">Get a free trial lesson today</div>
        <div className="Heading2">
          Start fulfilling your language dreams with our school
        </div>
      </div>

      <div className="PageEmail">
        <div className="PageInputBox">
          <input
            type="text"
            value={Email}
            onChange={Handlechange}
            className="PageInput"
            placeholder="Enter your email"
          />
        </div>
        <button
          className="PageSubmit PageFont1"
          onClick={Handlesubmit}
        >
          Send
        </button>
      </div>
    </div>
  );
};
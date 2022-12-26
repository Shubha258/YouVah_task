
import React from "react";
// import "../ComponentsStyles/QuestionCard.css";
import plus from "../images/Frame 6.png"
import minus from "../images/Frame 9.png"
import './Sec5.css'

export const Sec5 = (props) => {
  const [flag, toggle] = React.useState(true);

  function handleclick() {
    toggle(!flag);
  }

  return (
    <div>
      {flag && (
        <div className="ContactMainBody">
          <div className="QuestionFrame Answer11">{props.question}</div>
          <img
            className="SignImg"
            onClick={() => {
              handleclick();
            }}
            src={plus}
            alt=""
          />
        </div>
      )}
      {!flag && (
        <div className="Answer">
          <div className="QnA">
            <div className="Question1">{props.question}</div>
            <div className="Answer1">{props.answer}</div>
          </div>

          <div>
            <img
              className="SignImg"
              onClick={() => {
                handleclick();
              }}
              src={minus}
              alt=""
            />
          </div>
        </div>
      )}
    </div>
  );
};

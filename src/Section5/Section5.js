import React from "react";
import { Sec5 } from "./Sec5";
import './Section5.css'

export const Section5 = () => {
  return (
    <div className="Sec5MainBody">
      <div>
        <div className="Topq1">MORE INFO</div>
        <div className="Topq2">Common questions</div>
      </div>

      <div className="Questions">
        <div>
          <Sec5
            question="How can I know my level of knowledge?"
            answer="By the end of the trial lesson, you will be able to determine for yourself whether this kind of online lesson is right for you or not. In our experience, most students appreciate the benefits of online education and decide to study online."
          />
          <Sec5
            question="Can I do it individually or only in a group?"
            answer="By the end of the trial lesson, you will be able to determine for yourself whether this kind of online lesson is right for you or not. In our experience, most students appreciate the benefits of online education and decide to study online."
          />
          <Sec5
            question="What is the maximum group size?"
            answer="By the end of the trial lesson, you will be able to determine for yourself whether this kind of online lesson is right for you or not. In our experience, most students appreciate the benefits of online education and decide to study online."
          />
        </div>
        <div>
          <Sec5
            question="Do I need to buy materials for lessons?"
            answer="By the end of the trial lesson, you will be able to determine for yourself whether this kind of online lesson is right for you or not. In our experience, most students appreciate the benefits of online education and decide to study online."
          />
          <Sec5
            question="Are you adjusting to the student's schedule?"
            answer="By the end of the trial lesson, you will be able to determine for yourself whether this kind of online lesson is right for you or not. In our experience, most students appreciate the benefits of online education and decide to study online."
          />
          <Sec5
            question="How the first lesson with teacher will be?"
            answer="By the end of the trial lesson, you will be able to determine for yourself whether this kind of online lesson is right for you or not. In our experience, most students appreciate the benefits of online education and decide to study online."
          />
        </div>
      </div>
    </div>
  );
};


























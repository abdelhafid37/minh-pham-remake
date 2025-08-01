import React, { Fragment } from "react";
import { ABOUT } from "../../../constants/data";

function About() {
  return (
    <section>
      <div className="section">
        <div className="wrapper">
          <p className="title">{ABOUT.title}</p>
          <div className="">
            <div className="text">
              {ABOUT.text.split(" ").map((word, index) => {
                if (["selectively", "skilled"].includes(word)) {
                  return (
                    <Fragment key={index}>
                      <strong>{word}</strong>
                      {ABOUT.text.split(" ").length !== index && " "}
                    </Fragment>
                  );
                } else {
                  return (
                    <Fragment key={index}>
                      {word}
                      {ABOUT.text.split(" ").length !== index && " "}
                    </Fragment>
                  );
                }
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;

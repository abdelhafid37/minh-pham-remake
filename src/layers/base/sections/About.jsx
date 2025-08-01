import React, { Fragment, useRef } from "react";
import { ABOUT } from "../../../constants/data";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/all";
import { useClipText } from "../../../animations/hooks/useClipText";
import { useClipArea } from "../../../animations/hooks/useClipArea";

function About() {
  const textRef = useRef(null);
  const textCloneRef = useRef(null);
  const itemRefs = useRef([]);
  const containerRefs = useRef([]);

  useGSAP(() => {
    const text = textRef.current;
    const textClone = textCloneRef.current;
    const items = itemRefs.current;

    if (!text || !textClone || !items) return;

    const lines = SplitText.create(text, { type: "lines", linesClass: "line-clip-mask" });

    SplitText.create(textClone, { type: "lines" });

    useClipText(lines.lines);
    useClipText(items);
  }, []);

  useGSAP(() => {
    const containers = containerRefs.current;
    useClipArea(containers);
  }, []);

  return (
    <section>
      <div className="section">
        <div className="wrapper">
          <p className="title">{ABOUT.about.base.title}</p>
          <div className="relative">
            <div
              ref={textRef}
              className="text mr-ui-margin z-[2] relative"
            >
              {ABOUT.about.base.text.split(" ").map((word, index) => {
                const isNotEnd = ABOUT.about.base.text.split(" ").length !== index;
                if (["selectively", "skilled"].includes(word)) {
                  return (
                    <Fragment key={index}>
                      <strong>{word}</strong>
                      {isNotEnd && " "}
                    </Fragment>
                  );
                } else {
                  return (
                    <Fragment key={index}>
                      {word}
                      {isNotEnd && " "}
                    </Fragment>
                  );
                }
              })}
            </div>
            <div
              ref={textCloneRef}
              className="text mr-ui-margin absolute left-0 top-0 z-[1] opacity-20"
            >
              {ABOUT.about.base.text}
            </div>
          </div>
        </div>
      </div>
      <div className="pb-ui-padding">
        <div className="">
          <div className="wrapper">
            <p className="title">{ABOUT.whatIDo.title}</p>
          </div>
          <div className="">
            <div className="divider">
              {ABOUT.whatIDo.items.map(({ text, title }, index) => {
                return (
                  <div
                    ref={el => (containerRefs.current[index] = el)}
                    className="relative item-clip-path"
                    key={index}
                  >
                    <div className="clip-path-mask">
                      <div className="wrapper py-1">
                        <div className="flex items-center justify-start">
                          <div className="basis-ui-left relative">
                            <div className="px-0.5">
                              <h2 className="item-title">{title}</h2>
                            </div>
                          </div>
                          <div className="basis-ui-right">
                            <p className="w-ui-text">{text}</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="absolute left-0 top-0 w-full h-full">
                      <div className="wrapper py-1">
                        <div className="flex items-center justify-start">
                          <div className="basis-ui-left">
                            <div className="item-clip-container">
                              <h2
                                className="item-title item-clip-mask"
                                ref={el => (itemRefs.current[index] = el)}
                              >
                                {title}
                              </h2>
                              <h2 className="item-title item-clip-opacity">{title}</h2>
                            </div>
                          </div>
                          <div className="basis-ui-right">
                            <p className="w-ui-text opacity-0">{text}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;

import React, { Fragment, useRef } from "react";
import { HERO } from "../../../constants/data";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger, SplitText } from "gsap/all";
import gsap from "gsap";
import { useParallax } from "../../../animations/hooks/useParallax";

gsap.registerPlugin(SplitText, ScrollTrigger);

function Hero({ isStarted }) {
  const textRef = useRef(null);
  const videoContainerRef = useRef(null);
  const videoWrapperRef = useRef(null);
  const videoRef = useRef(null);

  const tlRef = useRef();
  useGSAP(() => {
    const text = textRef.current;

    if (!text) return;

    tlRef.current = gsap.timeline({ paused: true });

    const level1 = new SplitText(text, { type: "words" });
    gsap.set(level1.words, {
      display: "block",
      overflowY: "clip",
      marginBottom: "0.4rem",
      lineHeight: 0.83,
    });

    level1.words.forEach(word => {
      const level2 = new SplitText(word, { type: "chars" });
      gsap.set(level2.chars, { y: "130%" });

      tlRef.current.to(
        level2.chars,
        {
          y: 0,
          duration: 1,
          stagger: 0.05,
          ease: "power3.inOut",
        },
        "<",
      );
    });

    return () => gsap.killTweensOf(level1.words);
  }, []);
  useGSAP(() => {
    const video = videoRef.current;
    if (isStarted) {
      tlRef.current.play();
      video.play();
    }
  }, [isStarted]);

  useParallax(videoContainerRef, videoWrapperRef);

  return (
    <section
      ref={videoContainerRef}
      className="relative w-full overflow-hidden hidden"
    >
      <div
        ref={videoWrapperRef}
        className="absolute left-0 top-0 w-full h-full -z-10 parallax"
      >
        <div className="w-full h-full">
          <video
            ref={videoRef}
            src={HERO.video}
            className="full-cover"
            muted
            loop
          ></video>
        </div>
      </div>
      <div className="w-fit mx-auto pt-[18.6vh] pb-[15.7vh]">
        <h6 className="display-title">{HERO.base.title}</h6>
        <h1
          ref={textRef}
          className="display-text"
        >
          {HERO.base.text.split(" ").map((word, index) => {
            if (["Good", "Shit"].includes(word)) {
              return (
                <Fragment key={index}>
                  <strong className="block">{word}</strong>
                  {HERO.base.text.split(" ").length - 1 !== index && " "}
                </Fragment>
              );
            } else {
              return (
                <Fragment key={index}>
                  {word}
                  {HERO.base.text.split(" ").length - 1 !== index && " "}
                </Fragment>
              );
            }
          })}
        </h1>
      </div>
    </section>
  );
}

export default Hero;

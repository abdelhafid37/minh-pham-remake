import React, { Fragment, useRef } from "react";
import { HERO } from "../../../constants/data";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/all";
import gsap from "gsap";

gsap.registerPlugin(SplitText);

function Hero({ isStarted }) {
  const textRef = useRef(null);
  const tlRef = useRef();

  useGSAP(() => {
    const text = textRef.current;

    if (!text) return;

    tlRef.current = gsap.timeline({ paused: false });

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
    if (isStarted) tlRef.current.play();
  }, [isStarted]);

  return (
    <section className="relative min-h-screen w-full grid place-items-center">
      <div className="absolute left-0 top-0 w-full h-full -z-10">
        <video
          src={HERO.video}
          className="full-cover"
          muted
          loop
          autoPlay
        ></video>
      </div>
      <div className="w-fit mx-auto mt-24">
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

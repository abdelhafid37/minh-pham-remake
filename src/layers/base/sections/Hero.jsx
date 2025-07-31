import React, { Fragment, useRef } from "react";
import { HERO } from "../../../constants/data";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/all";
import gsap from "gsap";

gsap.registerPlugin(SplitText);

function Hero() {
  const textRef = useRef(null);

  useGSAP(() => {
    const text = textRef.current;
    if (!text) return;

    const level1 = new SplitText(text, { type: "words" });
    gsap.set(level1.words, {
      display: "block",
      overflow: "hidden",
      marginBottom: "0.75rem",
      lineHeight: 0.75,
    });

    level1.words.forEach(word => {
      const level2 = new SplitText(word, { type: "chars" });
      gsap.set(level2.chars, { y: "130%" });
      gsap.to(level2.chars, {
        y: 0,
        duration: 0.75,
        stagger: 0.03,
        ease: "power2.inOut",
      });
    });

    return () => gsap.killTweensOf(level1.words);
  }, []);

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

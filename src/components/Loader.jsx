import React, { useEffect, useRef, useState } from "react";
import { LOADER } from "../constants/data";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

function Loader() {
  const loaderRef = useRef(null);
  const wrapperRef = useRef(null);

  const svgRef = useRef(null);
  const progressContainerRef = useRef(null);
  const gifRef = useRef(null);
  const buttonRef = useRef(null);
  const max = 829;

  const [progress, setProgress] = useState(0);
  const [enter, setEnter] = useState(false);

  useGSAP(() => {
    const svg = svgRef.current;
    const gif = gifRef.current;
    const button = buttonRef.current;
    const progressContainer = progressContainerRef.current;

    const tl = gsap.timeline();
    tl.from(svg, {
      duration: 1,
      ease: "expo.inOut",
      "--po": `+=${max}`,
      onUpdate: () => {
        const value = parseFloat(getComputedStyle(svg).getPropertyValue("--po"));
        let progressValue = ((max - value) / max) * 100;
        setProgress(progressValue.toFixed(0));
      },
    }).to(svg, {
      duration: 0.8,
      ease: "expo.inOut",
      "--po": `-=${max}`,
      onComplete: () => {
        tl.to(gif, { y: "-60px" })
          .to(button, { opacity: 1, y: "-40px", pointerEvents: "auto" }, "<")
          .to(progressContainer, { opacity: 0 }, "<")
          .to(svg, { opacity: 0 }, "<");
      },
    });
  }, []);

  useGSAP(() => {
    const loader = loaderRef.current;
    if (!enter) document.body.style.overflow = "hidden";
    else {
      gsap.to(loader, {
        autoAlpha: 0,
        zIndex: -999,
        onComplete: () => (document.body.style.overflow = "auto"),
      });
    }
  }, [enter]);

  return (
    <div
      ref={loaderRef}
      className="fixed top-0 left-0 w-full h-screen bg-ui-black grid place-items-center z-[999]"
    >
      <div
        ref={wrapperRef}
        className="relative"
      >
        <svg
          ref={svgRef}
          className="loading-svg size-[16.8rem] stroke-ui-accent -rotate-90"
          width="270"
          height="270"
          viewBox="0 0 270 270"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            cx="136"
            cy="136"
            r="132"
            stroke="#B7AB98"
          ></circle>
        </svg>
        <div
          ref={gifRef}
          className="mx-auto size-[4.5rem] mb-14 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-full"
        >
          <img
            className="full-cover"
            src={LOADER.gif}
            alt="logo gif"
          />
        </div>
        <button
          ref={buttonRef}
          type="button"
          onClick={() => setEnter(true)}
          className="mx-auto flex px-16 py-4 leading-none border border-ui-accent rounded-full font-ui-avantgarde-header uppercase tracking-ui-text text-sm cursor-pointer hover:bg-ui-accent hover:text-black transition-colors duration-300 absolute left-1/2 -translate-x-1/2 bottom-0 translate-y-0 opacity-0 pointer-events-none"
        >
          {LOADER.button}
        </button>
        <span
          ref={progressContainerRef}
          className="text-xs absolute top-0 left-0 w-full text-center pt-3"
        >
          <b>{progress}</b>%
        </span>
      </div>
    </div>
  );
}

export default Loader;

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useRef } from "react";

export const MagneticField = ({ children, strength = 1.5 }) => {
  const elementRef = useRef(null);

  useGSAP(() => {
    const element = elementRef.current;
    if (!element) return;

    const xTo = gsap.quickTo(element, "x", { ease: "elastic.out(1,.3)", duration: 1 });
    const yTo = gsap.quickTo(element, "y", { ease: "elastic.out(1,.3)", duration: 1 });

    const onMove = event => {
      const { clientX, clientY } = event;
      const { left, top, height, width } = element.getBoundingClientRect();

      const x = (clientX - (left + width / 2)) * strength;
      const y = (clientY - (top + height / 2)) * strength;

      xTo(x);
      yTo(y);
    };

    const onLeave = () => {
      xTo(0);
      yTo(0);
    };

    element.addEventListener("mousemove", onMove);
    element.addEventListener("mouseleave", onLeave);
    return () => {
      element.removeEventListener("mousemove", onMove);
      element.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  return <div ref={elementRef}>{children}</div>;
};

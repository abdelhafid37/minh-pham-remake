import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useRef } from "react";

export const TextFlipper = ({ children }) => {
  const textRef = useRef(null);
  const cloneRef = useRef(null);
  const containerRef = useRef(null);
  const duration = 0.2;

  useGSAP(() => {
    const text = textRef.current;
    const clone = cloneRef.current;
    const container = containerRef.current;
    if (!text || !clone || !container) return;

    const tl = gsap.timeline();

    const onHover = () =>
      tl
        .to(text, { y: "-100%", duration: duration, ease: "power2.out" })
        .to(clone, { y: 0, duration: duration, ease: "power2.out" }, "<");
    const onLeave = () =>
      tl
        .to(text, { y: 0, duration: duration, ease: "power2.out" })
        .to(clone, { y: "100%", duration: duration, ease: "power2.out" }, "<");

    container.addEventListener("mouseover", onHover);
    container.addEventListener("mouseleave", onLeave);

    return () => {
      container.removeEventListener("mouseover", onHover);
      container.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  return (
    <span
      ref={containerRef}
      className="relative block overflow-hidden"
    >
      <span
        ref={textRef}
        className="block"
      >
        {children}
      </span>
      <span
        ref={cloneRef}
        className="absolute inset-0 translate-y-full text-ui-gray-light"
      >
        {children}
      </span>
    </span>
  );
};

import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import React from "react";
gsap.registerPlugin(ScrollTrigger);

export const useClipText = lines => {
  lines.forEach(line => {
    ScrollTrigger.create({
      trigger: line,
      start: "top bottom",
      end: "center center",
      markers: true,
      onUpdate: self => {
        const value = 100 - self.progress * 100;
        line.style.cssText = `--size: ${value}%`;
      },
    });
  });
};

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import React from "react";

gsap.registerPlugin(ScrollTrigger);

export const useParallax = (containerRef, mediaRef, offset = 300) => {
  useGSAP(() => {
    const container = containerRef.current;
    const media = mediaRef.current;
    if (!container || !media) return;

    const st = ScrollTrigger.create({
      trigger: container,
      start: "top top",
      onUpdate: self => {
        let progress = self.progress;
        let parallaxOffset = progress * offset;
        media.style.cssText = `--parallax-offset: ${parallaxOffset}px`;
      },
    });

    return () => st.kill();
  }, []);
};

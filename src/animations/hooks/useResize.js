import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React from "react";

export const useResize = overlayRef => {
  useGSAP(() => {
    const overlay = overlayRef.current;
    let resizeTimer;
    if (!overlay) return;

    const onResize = () => {
      gsap.to(overlay, {
        duration: 0.2,
        ease: "power2.out",
        autoAlpha: 1,
        zIndex: 999,
      });

      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => {
        gsap.to(overlay, {
          duration: 0,
          autoAlpha: 0,
          zIndex: -999,
        });
      }, 500);
    };

    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);
};

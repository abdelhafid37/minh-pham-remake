import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useRef } from "react";

export const soundController = (state, playRef, pauseRef, audioRef) => {
  const soundRef = useRef({ volume: 0 });
  const duration = 0.3;

  useGSAP(() => {
    const play = playRef.current;
    const pause = pauseRef.current;
    const audio = audioRef.current;
    const sound = soundRef.current;

    if (!play || !pause || !audio) return;

    const tl = gsap.timeline();
    audio.volume = 0;

    if (state) {
      gsap.to(sound, {
        volume: 1,
        duration: 1,
        ease: "power2.inOut",

        onStart: () => audio.play(),
        onUpdate: () => (audio.volume = sound.volume),
      });

      tl.set(play, { y: "100%" })
        .to(pause, { y: "-100%", duration: duration }, "<")
        .to(play, { y: 0, duration: duration }, "<");
    } else {
      gsap.to(sound, {
        volume: 0,
        duration: 1,
        ease: "power2.inOut",

        onUpdate: () => (audio.volume = sound.volume),
        onComplete: () => audio.pause(),
      });

      tl.set(pause, { y: "100%" })
        .to(play, { y: "-100%", duration: duration }, "<")
        .to(pause, { y: 0, duration: duration }, "<");
    }

    return () => gsap.killTweensOf(play, pause, sound);
  }, [state]);
};

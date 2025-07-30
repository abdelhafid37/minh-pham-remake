import React, { useRef, useState } from "react";
import { FOOTER } from "../constants/data";
import { soundController } from "../animations/soundController";

function Footer() {
  const [isPlay, setIsPlay] = useState(true);
  const audioRef = useRef(null);

  const playRef = useRef(null);
  const pauseRef = useRef(null);

  soundController(isPlay, playRef, pauseRef, audioRef);

  return (
    <>
      <footer className="fixed w-full mix-blend-difference">
        <div className="fixed left-20 bottom-24">
          <ul className="flex flex-col items-center justify-center gap-8">
            {FOOTER.socials.map(({ Icon, href }, index) => {
              if (Icon) {
                return (
                  <li key={index}>
                    <a
                      href={href}
                      className="flex size-6"
                    >
                      <Icon />
                    </a>
                  </li>
                );
              }
            })}
          </ul>
        </div>
        <div className="fixed right-20 bottom-24 -rotate-90 translate-x-full origin-bottom-left">
          <button
            type="button"
            className="uppercase flex items-center justify-center gap-1"
            onClick={() => setIsPlay(prev => !prev)}
          >
            <span>{FOOTER.sound.button.label}</span>
            <span className="relative">
              <span
                className="block translate-y-0"
                ref={playRef}
              >
                {FOOTER.sound.button.play}
              </span>
              <span
                ref={pauseRef}
                className="absolute left-0 top-0 -translate-y-full"
              >
                {FOOTER.sound.button.pause}
              </span>
            </span>
          </button>
        </div>
      </footer>
      <audio
        ref={audioRef}
        src={FOOTER.sound.audio}
        autoPlay
        loop
        muted
      ></audio>
    </>
  );
}

export default Footer;

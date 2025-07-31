import React from "react";
import { HEADER } from "../constants/data";
import { Logo } from "../constants/icon";
import { MagneticField } from "../animations/magneticField";
import { TextFlipper } from "../animations/TextFlipper";

function Header() {
  return (
    <header className="fixed w-full mix-blend-difference z-50">
      <div className="fixed left-[4vw] top-[8vh]">
        <MagneticField>
          <a
            href="/"
            className="size-[3.25rem] overflow-hidden rounded-full flex"
          >
            <Logo />
          </a>
        </MagneticField>
      </div>
      <div className="fixed right-[4vw] top-[8vh]">
        <ul className="flex flex-col items-end justify-center gap-3 uppercase">
          {HEADER.links.map(({ href, label }, index) => {
            return (
              <li key={index}>
                <a
                  href={href}
                  className="leading-none"
                >
                  <TextFlipper>{label}</TextFlipper>
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </header>
  );
}

export default Header;

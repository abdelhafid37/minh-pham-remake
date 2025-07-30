import React from "react";
import { HEADER } from "../constants/data";
import { Logo } from "../constants/icon";

function Header() {
  return (
    <header className="fixed w-full mix-blend-difference">
      <div className="fixed left-[4vw] top-[8vh]">
        <a
          href="/"
          className="size-[3.25rem] overflow-hidden rounded-full flex"
        >
          <Logo />
        </a>
      </div>
      <div className="fixed right-[4vw] top-[8vh]">
        <ul className="flex flex-col items-end justify-center gap-1 uppercase">
          {HEADER.links.map(({ href, label }, index) => {
            return (
              <li>
                <a
                  href={href}
                  className="leading-none"
                >
                  {label}
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

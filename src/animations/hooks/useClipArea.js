import React from "react";

export const useClipArea = elements => {
  elements.forEach(element => {
    const hoverElement = element.querySelector(".item-clip-container");
    console.log(hoverElement);

    const onEnter = () => element.classList.add("is-hover");
    const onLeave = () => element.classList.remove("is-hover");

    hoverElement.addEventListener("mouseenter", onEnter);
    hoverElement.addEventListener("mouseleave", onLeave);
  });

  return () => {
    hoverElement.removeEventListener("mouseenter", onEnter);
    hoverElement.removeEventListener("mouseleave", onLeave);
  };
};

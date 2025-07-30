import loadingGif from "../assets/images/logo.gif";
import mp3 from "../assets/mp3/audiosite.mp3";
import { Dribbble, Instagram, Linkedin, Youtube } from "./icon";

export const LOADER = {
  gif: loadingGif,
  button: "Start",
};
export const HEADER = {
  links: [
    { label: "About", href: "#about" },
    { label: "Work", href: "#work" },
    { label: "Contact", href: "#contact" },
  ],
};

export const FOOTER = {
  socials: [
    {
      Icon: Dribbble,
      href: "/",
    },
    {
      Icon: Instagram,
      href: "/",
    },
    {
      Icon: Youtube,
      href: "/",
    },
    {
      Icon: Linkedin,
      href: "/",
    },
  ],
  sound: {
    button: {
      label: "Sound",
      play: "On",
      pause: "Off",
    },
    audio: mp3,
  },
};

import loadingGif from "../assets/images/logo.gif";
import mp3 from "../assets/mp3/audiosite.mp3";
import { Dribbble, Instagram, Linkedin, Youtube } from "./icon";
import mp4 from "../assets/videos/hero.mp4";

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
export const HERO = {
  video: mp4,
  base: {
    title: "Minh Pham",
    text: "Making Good Shit Since 2009",
  },
  mask: {
    title: "Minh Pham",
    text: "Hiding Bad Shit Since 2009",
  },
};
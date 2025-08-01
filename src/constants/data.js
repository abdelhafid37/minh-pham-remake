import loadingGif from "../assets/images/logo.gif";
import mp3 from "../assets/mp3/Clara Mae - Not Sad Anymore.mp3";
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
export const ABOUT = {
  title: "About me",
  text: "I’m a selectively skilled product designer with strong focus on producing high quality & impactful digital experience.",
};
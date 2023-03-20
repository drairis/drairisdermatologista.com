import { Variants } from "framer-motion";
import { ANIMATION_DURATION, ANIMATION_EASING } from "./values";

export const container = [
  {
    index: 0,
    animate: {
      transition: {
        staggerChildren: 0.35,
      },
    },
  },
  {
    index: 1,
    animate: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  },
  {
    index: 2,
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
      transition: {
        staggerChildren: 0.35,
        ease: ANIMATION_EASING.custom[0],
      },
    },
  },
] as Variants[];

export const letter = {
  initial: {
    y: 200,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: ANIMATION_DURATION.slowest,
      ease: ANIMATION_EASING.custom[0],
    },
  },
};

export const fadeIn = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      duration: ANIMATION_DURATION.slowest,
      ease: ANIMATION_EASING.custom[0],
    },
  },
};

export const popUp = {
  initial: {
    y: 140,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: ANIMATION_DURATION.slowest,
      ease: ANIMATION_EASING.custom[0],
    },
  },
};

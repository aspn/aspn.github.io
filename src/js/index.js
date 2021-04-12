import "splitting/dist/splitting.css";
import "splitting/dist/splitting-cells.css";
import Splitting from "splitting";
import { gsap } from "gsap";
import { preloadFonts } from "./utils";

// Preload typekit fonts
preloadFonts("lwc3axy").then(() => document.body.classList.remove("loading"));

// Call the splittingjs to transform the data-splitting texts to spans of chars
Splitting();

// DOM elements
let DOM = {
  content: {
    home: {
      section: document.querySelector(".content__item--home"),
      get chars() {
        return this.section.querySelectorAll(
          ".content__paragraph .word > .char, .whitespace"
        );
      },
      isVisible: true,
    },
    about: {
      section: document.querySelector(".content__item--about"),
      get chars() {
        return this.section.querySelectorAll(
          ".content__paragraph .word > .char, .whitespace"
        );
      },
      get picture() {
        return this.section.querySelector(".content__figure");
      },
      isVisible: false,
    },
  },
  links: {
    about: {
      anchor: document.querySelector("a.frame__about"),
      get stateElement() {
        return this.anchor.children;
      },
    },
    home: document.querySelector("a.frame__home"),
    burger: document.querySelector(".burger"),
  },
  canvas: document.querySelector(".webgl"),
};

// The gsap timeline (and some default settings) where the magic happens
const timelineSettings = {
  staggerValue: 0.014,
  charsDuration: 0.5,
};
const timeline = gsap
  .timeline({ paused: true })
  .addLabel("start")
  // Stagger the animation of the home section chars
  .staggerTo(
    DOM.content.home.chars,
    timelineSettings.charsDuration,
    {
      ease: "Power3.easeIn",
      y: "-100%",
      opacity: 0,
    },
    timelineSettings.staggerValue,
    "start"
  )
  // Here we do the switch
  // We need to toggle the current class for the content sections
  .addLabel("switchtime")
  .add(() => {
    DOM.content.home.section.classList.toggle("content__item--current");
    DOM.content.about.section.classList.toggle("content__item--current");
  })
  // Change the body's background color
  .staggerTo(
    DOM.content.home.section,
    2,
    {
      duration: 0.1,
      ease: "Power1.easeInOut",
      opacity: 0,
      height: "100vh",
    },
    timelineSettings.staggerValue,
    "start"
  )
  .to(
    document.body,
    {
      duration: 0.8,
      ease: "Power1.easeInOut",
      backgroundColor: "#335384",
    },
    timelineSettings.staggerValue,
    "start"
  )
  // Start values for the about section elements that will animate in
  .set(
    DOM.content.about.chars,
    {
      y: "100%",
    },
    "switchtime"
  )
  .set(
    DOM.content.about.picture,
    {
      y: "40%",
      rotation: -4,
      opacity: 0,
    },
    "switchtime"
  )
  .set(
    DOM.canvas,
    {
      y: "20%",
      opacity: 0,
    },
    "switchtime"
  )
  // Stagger the animation of the about section chars
  .staggerTo(
    DOM.content.about.chars,
    timelineSettings.charsDuration,
    {
      ease: "Power3.easeOut",
      y: "0%",
    },
    timelineSettings.staggerValue,
    "switchtime"
  )
  // Finally, animate the picture in
  .to(
    DOM.content.about.picture,
    0.8,
    {
      ease: "Power3.easeOut",
      y: "0%",
      opacity: 1,
      rotation: 0,
    },
    "switchtime+=0.6"
  )
  .staggerTo(
    DOM.canvas,
    0.5,
    {
      y: "0%",
      ease: "Power1.easeInOut",
      opacity: 1,
    },
    timelineSettings.staggerValue,
    "switchtime"
  );

// Clicking the about and homepage links will toggle the content area, by playing and reversing the timeline
// Need to switch current state for the about/close links
const switchContent = () => {
  DOM.links.about.stateElement[0].classList[
    DOM.content.about.isVisible ? "add" : "remove"
  ]("frame__about-item--current");
  DOM.links.about.stateElement[1].classList[
    DOM.content.about.isVisible ? "remove" : "add"
  ]("frame__about-item--current");
  DOM.links.burger.classList[
    DOM.content.about.isVisible ? "remove" : "add"
  ]("opened");
  DOM.links.about.anchor.classList[
    DOM.content.about.isVisible ? "remove" : "add"
  ]("about-opened");
  timeline[DOM.content.about.isVisible ? "reverse" : "play"]();
  DOM.content.about.isVisible = !DOM.content.about.isVisible;
  DOM.content.home.isVisible = !DOM.content.about.isVisible;
};

DOM.links.about.anchor.addEventListener("click", () => switchContent());
DOM.links.home.addEventListener("click", () => {
  if (DOM.content.home.isVisible) return;
  switchContent();
});

import React from "react";
import ReactDOM from "react-dom";
import "../public/styles.css";

const name = "Winston";

ReactDOM.render(
  /*#__PURE__*/ React.createElement(
    "div",
    null,
    /*#__PURE__*/ React.createElement(
      "h1",
      {
        className: "heading"
      },
      "Hi there"
    ),
    /*#__PURE__*/ React.createElement("img", {
      src:
        "https://ae01.alicdn.com/kf/Sd0a1e840d5ce48b1826c677a0027ce0ef/New-Cute-Game-Overwatch-Winston-Gorilla-Plush-Kids-Stuffed-Toys-For-Children-Gifts-26CM.jpg_Q90.jpg_.webp"
    }),
    /*#__PURE__*/ React.createElement(
      "p",
      {
        style: {
          color: "red"
        }
      },
      "~" + name
    )
  ),
  document.getElementById("root")
);

import React from "react";

const SvgSquare = () => {
  return (
    <svg
      width="200"
      height="200"
      viewBox="0 0 200 200"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect x="25" y="25" width="150" height="150" fill="none" stroke="black" />
      <rect x="75" y="75" width="50" height="50" fill="none" stroke="black" />
      <line x1="25" y1="25" x2="75" y2="75" stroke="black" />
      <line x1="175" y1="25" x2="125" y2="75" stroke="black" />
      <line x1="25" y1="175" x2="75" y2="125" stroke="black" />
      <line x1="175" y1="175" x2="125" y2="125" stroke="black" />
    </svg>
  );
};

export default SvgSquare;

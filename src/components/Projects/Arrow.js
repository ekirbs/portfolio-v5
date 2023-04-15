import React from "react";

export default function ArrowButton({ onClick, direction }) {
  return (
    <button
      className={`custom-arrow ${direction}`}
      onClick={onClick}
      aria-label={direction === "prev" ? "Previous slide" : "Next slide"}
    >
      {direction === "prev" ? "<" : ">"}
    </button>
  );
};
import React from "react";
import { SiArrowLeft, SiArrowRight } from "react-icons/si";

export default function ArrowButton({ onClick, direction }) {
  return (
    <button
      className={`custom-arrow ${direction}`}
      onClick={onClick}
      aria-label={direction === "prev" ? "Previous slide" : "Next slide"}
    >
      {direction === "prev" ? <SiArrowLeft /> : <SiArrowRight />}
      {/* {direction === "prev" ? "<" : ">"} */}
    </button>
  );
};
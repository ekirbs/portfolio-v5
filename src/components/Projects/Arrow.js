import React from "react";
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";

export default function ArrowButton({ onClick, direction }) {
  return (
    <button
      className={`custom-arrow ${direction}`}
      onClick={onClick}
      aria-label={direction === "prev" ? "Previous slide" : "Next slide"}
    >
      {direction === "prev" ? <SlArrowLeft /> : <SlArrowRight />}
      {/* {direction === "prev" ? "<" : ">"} */}
    </button>
  );
};
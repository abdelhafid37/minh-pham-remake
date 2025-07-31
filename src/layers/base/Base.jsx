import React from "react";
import Hero from "./sections/Hero";

function Base({ isStarted }) {
  return (
    <div className="w-full">
      <Hero isStarted={isStarted} />
    </div>
  );
}

export default Base;

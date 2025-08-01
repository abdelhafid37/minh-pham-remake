import About from "./sections/About";
import Hero from "./sections/Hero";

function Base({ isStarted }) {
  return (
    <div className="w-full">
      <Hero isStarted={isStarted} />
      <About />
    </div>
  );
}

export default Base;

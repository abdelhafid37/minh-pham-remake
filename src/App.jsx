import ReactLenis from "lenis/react";
import Base from "./layers/base/Base";
import Mask from "./layers/mask/Mask";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Loader from "./components/Loader";
import { useRef, useState } from "react";
import { useResize } from "./animations/hooks/useResize";

function App() {
  const [isStarted, setIsStarted] = useState(true);
  const overlayRef = useRef(null);

  useResize(overlayRef);

  return (
    <ReactLenis
      root
      className="relative"
    >
      {/* <Loader onStart={() => setIsStarted(true)} /> */}
      <Header />
      <main className="relative">
        <Base isStarted={isStarted} />
        {/* <Mask /> */}
      </main>
      <Footer isStarted={isStarted} />
      <div
        ref={overlayRef}
        className="fixed w-full h-full inset-0 bg-ui-black -z-[999] opacity-0"
      ></div>
    </ReactLenis>
  );
}

export default App;

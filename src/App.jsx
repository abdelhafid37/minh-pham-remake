import ReactLenis from "lenis/react";
import Base from "./layers/base/Base";
import Mask from "./layers/mask/Mask";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Loader from "./components/Loader";
import { useState } from "react";

function App() {
  const [isStarted, setIsStarted] = useState(false);
  return (
    <ReactLenis root>
      {/* <Loader onStart={() => setIsStarted(true)} /> */}
      <Header />
      <main className="relative">
        <Base isStarted={isStarted} />
        {/* <Mask /> */}
      </main>
      <Footer />
    </ReactLenis>
  );
}

export default App;

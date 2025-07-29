import ReactLenis from "lenis/react";
import Base from "./layers/base/Base";
import Mask from "./layers/mask/Mask";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Loader from "./components/Loader";

function App() {
  return (
    <ReactLenis root>
      <Loader />
      <Header />

      <main>
        <Base />
        <Mask />
      </main>

      <Footer />
    </ReactLenis>
  );
}

export default App;

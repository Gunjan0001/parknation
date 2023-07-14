import "./App.css";
import "./index.css";
import MainRoute from "./components/common/MainRoute";
import LoaderHome from "./components/common/LoaderHome";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
function App() {
  useEffect(() => {
    AOS.init({
      once: true,
      duration: 2000,
      delay: 600,
    });
  }, []);
  return (
    <div className=" overflow-x-hidden">
      {/* <LoaderHome /> */}
      <MainRoute />
    </div>
  );
}

export default App;

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./App.css";
import "./index.css";
import MainRoute from "./components/common/MainRoute";
import LoaderHome from "./components/common/LoaderHome";

function App() {
  return (
    <>
      <LoaderHome/>
      <MainRoute />
    </>
  );
}

export default App;

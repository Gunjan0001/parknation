import "./App.css";
import "./index.css";
import MainRoute from "./components/common/MainRoute";
import LoaderHome from "./components/common/LoaderHome";
import FormNav from "./components/common/FormNav";
function App() {
  return (
    <>
      <LoaderHome />
      <MainRoute />
      <FormNav />
    </>
  );
}

export default App;

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./App.css";
import "./index.css";
import MainRoute from "./components/common/MainRoute";
import LoaderHome from "./components/common/LoaderHome";
import AccountSignUp from "./components/view/AcoountSignUp";
import Authenticator from "./components/view/Authenticator";
import Code from "./components/view/Code";
import GetStarted from './components/view/GetStarted';
import Login from './components/view/LogIn';
import SignUp from "./components/view/Signup";
import SignIn from './components/view/SignIn';

function App() {
  return (
    <>
      <LoaderHome />
      <AccountSignUp />
      <Authenticator />
      <Code />
      <GetStarted />
      <Login />
      <SignUp/>
      <SignIn/>
      <MainRoute />
    </>
  );
}

export default App;

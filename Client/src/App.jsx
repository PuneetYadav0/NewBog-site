import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/about";
import SignUp from "./pages/signUp";
import SignIn from "./pages/signIn";
import DashBoard from "./pages/dashBoard";
import Projects from './pages/Projects'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/signup" element={<SignUp />}></Route>
        <Route path="/signin" element={<SignIn />}></Route>
        <Route path="/dashBoard" element={<DashBoard />}></Route>
        <Route path="/projects" element={<Projects />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

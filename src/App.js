import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Home.js";
import About from "./About.js";
import Contact from "./Contact.js";
import Login from "./Login.js";
import Error from "./Error.js";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Login" element={<Login />} />
          <Route path="*" element={<Error />} />
         
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

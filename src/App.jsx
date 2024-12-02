import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import AboutPage from "./components/AboutPage";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} /> 
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </>
  );
};

export default App;

import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import GlobalStyles from "./components/GlobalStyles";
import Navbar from "./components/Navbar";
import FlagsDetail from "./components/sections/FlagsDetail";
// import FlagsGrid from "./components/sections/FlagsGrid";
import TextField from "./components/TextField";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    localStorage.setItem("mode", darkMode);

    if (
      localStorage.mode === "true" ||
      (!("mode" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <GlobalStyles>
      <BrowserRouter>
        <Navbar toggle={darkMode} setToggle={setDarkMode} />

        <Routes>
          <Route path="/" element={<TextField />} />
          <Route path="/name/:name" element={<FlagsDetail />} />
          <Route path="*" element={<Navigate replace to="/" />} />
        </Routes>
      </BrowserRouter>
    </GlobalStyles>
  );
}

export default App;

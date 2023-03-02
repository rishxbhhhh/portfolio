import React, { useState, useEffect } from "react";
import { Footer, Header, Skills, Work } from "./container";
import { Navbar } from "./components";
import "./App.scss";
import { BsFillSunFill, BsFillMoonFill } from "react-icons/bs";

const App = () => {


  const [theme, setTheme] = useState('light');
  const [themeIcon, setThemeIcon] = useState(
    <BsFillMoonFill className="theme" title="Change Theme to Dark" />
  );
  const root = document.querySelector("#root");

  // will update localStorage everytime theme is changed (for persistence)
  useEffect(() => {
    localStorage.setItem("portfolio.theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
      setThemeIcon(
        <BsFillSunFill className="theme" title="Change Theme to Light" />
      );
      root.setAttribute("color-scheme", "dark");
      
    } else {
      setTheme("light");
      setThemeIcon(
        <BsFillMoonFill className="theme" title="Change Theme to Dark" />
      );
      root.setAttribute("color-scheme", "light");
      
    }
  };


  return (
    <div className="app">
      <Navbar themeIcon={themeIcon} toggleTheme={toggleTheme} />
      <Header />
      
      <Work />
      <Skills />
      
      <Footer />
    </div>
  );
};

export default App;

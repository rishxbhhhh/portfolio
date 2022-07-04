import React, { useState, useEffect } from "react";
import { About, Footer, Header, Skills, Testimonial, Work } from "./container";
import { Navbar } from "./components";
import "./App.scss";
import { BsFillSunFill, BsFillMoonFill } from "react-icons/bs";

const App = () => {
  function DefaultTheme() {
    let temp_theme = "light";
    if (localStorage.getItem("portfolio.theme") !== null) {
      temp_theme = localStorage.getItem("portfolio.theme");
    }
    console.log(`Saved Theme: ${temp_theme}`);
    return temp_theme;
  }

  // // switch to saved theme after three seconds
  //  const temp = () => {
  //   var executed = false;
  //   if (!executed) {
  //     var switchTheme = setTimeout(() => {
  //       const default__theme = DefaultTheme();
  //     if (default__theme === "dark") {
  //       setTheme("dark");
  //       setThemeIcon(
  //         <BsFillSunFill className="theme" title="Change Theme to Light" />
  //       );
  //       root.setAttribute("color-scheme", "dark");
  //       console.log("switched to last saved theme!");
  //     } else if (default__theme === "light") {
  //       setTheme("light");
  //       setThemeIcon(
  //         <BsFillMoonFill className="theme" title="Change Theme to Dark" />
  //       );
  //       root.setAttribute("color-scheme", "light");
  //       console.log("switched to last saved theme!");
  //     } else {
  //       setTheme("light");
  //       setThemeIcon(
  //         <BsFillMoonFill className="theme" title="Change Theme to Dark" />
  //       );
  //       root.setAttribute("color-scheme", "light");
  //       console.log("switched to default theme!");
  //     }
  //     executed=true;
  //     },2000);
  //   }
  //   else{
  //     clearTimeout(switchTheme);
  //   }
  // };

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
      console.log("theme set to dark!");
      console.log("themeIcon set to Sun!");
    } else {
      setTheme("light");
      setThemeIcon(
        <BsFillMoonFill className="theme" title="Change Theme to Dark" />
      );
      root.setAttribute("color-scheme", "light");
      console.log("theme set to light!");
      console.log("themeIcon set to Moon!");
    }
  };

  //for automatic theme change (not required at the moment)
  // useEffect(() => {
  //   if (
  //     window.matchMedia &&
  //     window.matchMedia("(prefers-color-scheme: dark)").matches
  //   ) {
  //     toggleTheme();
  //   } else {
  //     toggleTheme();
  //   }
  // },[]);

  return (
    <div className="app">
      <Navbar themeIcon={themeIcon} toggleTheme={toggleTheme} />
      <Header />
      <About />
      <Work />
      <Skills />
      <Testimonial />
      <Footer />
    </div>
  );
};

export default App;

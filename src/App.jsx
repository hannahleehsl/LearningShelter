/**
 * Application component
 *
 * To contain application wide settings, routes, state, etc.
 */

import React, { useState } from "react";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import About from "./Components/About";
import Courses from "./Components/Courses";
import Home from "./Components/Home";
import Portfolio from "./Components/Portfolio";

import "./styles.css";

const siteProps = {
  name: "Learning Shelter",
  title: "Tools for the Homeless",
};

const primaryColor = "#4E567E";
const secondaryColor = "#D2F1E4";

const App = () => {
  const [activePage, setActivePage] = useState("home");

  const handlePageChange = (page) => {
    setActivePage(page);
  };

  const renderPage = () => {
    switch (activePage) {
      case "home":
        return <Home name={siteProps.name} title={siteProps.title} />;
      case "portfolio":
        return <Portfolio />;
      case "courses":
        return <Courses />;
      case "about":
        return <About />;
      default:
        return null;
    }
  };

  return (
    <div id="main">
      <Header onPageChange={handlePageChange} />
      {renderPage()}
      <Footer
        {...siteProps}
        primaryColor={primaryColor}
        secondaryColor={secondaryColor}
        onPageChange={handlePageChange}
      />
    </div>
  );
};

export default App;

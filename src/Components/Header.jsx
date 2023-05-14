/**
 * Header component
 *
 * Top navigation bar for your site. Set to remain visible as the
 * user scrolls so that they can constantly reach any part of your page.
 */
import React from "react";
import PropTypes from "prop-types";

const Header = ({ activePage, onPageChange }) => {
  const handlePageChange = (page) => {
    onPageChange(page);
  };

  return (
    <nav
      style={{
        position: "fixed",
        display: "flex",
        justifyContent: "center",
        gap: "2rem",
        background: "rgba(255,255,255,0.75)",
        padding: "1rem",
        top: 0,
        width: "100%",
        zIndex: 10,
      }}
    >
      <ul>
        <li className={activePage === "home" ? "active" : ""}>
          <button onClick={() => handlePageChange("home")}>Home</button>
        </li>
        <li className={activePage === "portfolio" ? "active" : ""}>
          <button onClick={() => handlePageChange("portfolio")}>Portfolio</button>
        </li>
        <li className={activePage === "courses" ? "active" : ""}>
          <button onClick={() => handlePageChange("courses")}>Courses</button>
        </li>
        <li className={activePage === "about" ? "active" : ""}>
          <button onClick={() => handlePageChange("about")}>About</button>
        </li>
      </ul>
    </nav>
  );
};

Header.propTypes = {
  activePage: PropTypes.string.isRequired,
  onPageChange: PropTypes.func.isRequired,
};

export default Header;

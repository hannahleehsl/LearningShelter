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
    <nav style={{ display: "flex", justifyContent: "center", backgroundColor: "rgba(255, 255, 255, alpha)" }}>
      <ul style={{ listStyleType: "none", padding: 0, display: "flex", flexDirection: "row" }}>
        <li className={activePage === "home" ? "active" : ""} style={{ margin: "0 1rem" }}>
          <button
            style={{ fontSize: "1.5rem", background: "none", border: "none", fontFamily: "Montserrat" }}
            onClick={() => handlePageChange("home")}
          >
            Home
          </button>
        </li>
        <li className={activePage === "portfolio" ? "active" : ""} style={{ margin: "0 1rem" }}>
          <button
            style={{ fontSize: "1.5rem", background: "none", border: "none", fontFamily: "Montserrat" }}
            onClick={() => handlePageChange("portfolio")}
          >
            Portfolio
          </button>
        </li>
        <li className={activePage === "courses" ? "active" : ""} style={{ margin: "0 1rem" }}>
          <button
            style={{ fontSize: "1.5rem", background: "none", border: "none", fontFamily: "Montserrat" }}
            onClick={() => handlePageChange("courses")}
          >
            Courses
          </button>
        </li>
        <li className={activePage === "about" ? "active" : ""} style={{ margin: "0 1rem" }}>
          <button
            style={{ fontSize: "1.5rem", background: "none", border: "none", fontFamily: "Montserrat" }}
            onClick={() => handlePageChange("about")}
          >
            About
          </button>
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

import React from "react";
import "./Header.css";
import headerlogo from "../../headerlogo.png";
import avatar from "../../avatar.png";

function Header({ handleAddClick }) {
  // Get the current date
  const currentDate = new Date().toLocaleString("default", {
    month: "long",
    day: "numeric",
  });

  // Hardcoded location (you can replace this with dynamic location fetching logic)
  const location = "New York, NY"; // Replace this with actual logic if needed

  return (
    <header className="header">
      <img className="header__logo" src={headerlogo} alt="Header Logo" />
      <p className="header__date-and-location">{`${currentDate}, ${location}`}</p>
      <button
        type="button"
        className="header__add-clothes-btn"
        onClick={handleAddClick}
      >
        + Add clothes
      </button>
      <div className="header__user-container">
        <p className="header__username">Terrence Tegegne</p>
        <img src={avatar} alt="Terrence Tegegne" className="header__avatar" />
      </div>
    </header>
  );
}

export default Header;

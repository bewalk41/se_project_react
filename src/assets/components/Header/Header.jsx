import "./Header.css";
// import headerlogo from "../../assets/Images/headerlogo.png";
// import avatar from "../../assets/Images/avatar.png";

function Header() {
  return (
    <header className="header">
      <img className="header__logo" src={headerlogo} alt="Header Logo" />
      <p className="header__date-and-location">Date, Location</p>
      <button className="header__add-clothes-btn">+ Add clothes</button>
      <div className="header__user-container">
        <p className="header__username">Terrence Tegegne</p>
        <img
          src={avatar}
          alt="Terrence Tegegne"
          className="header__avatar"
        />{" "}
        {/* Ensure this line is correctly referencing the avatar variable */}
      </div>
    </header>
  );
}

export default Header;

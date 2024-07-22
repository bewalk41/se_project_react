import React, { useState } from "react";

import Header from "../Header/Header";
import Main from "../Main/Main";
// import Footer from "../Footer/Footer";
import "./App.css";

function App() {
  const [weatherData, setWeatherData] = useState({ type: "" });
  return (
    <div className="page">
      <div className="page__content">
        <Header />
        <Main />
      </div>
    </div>
  );
}

export default App;

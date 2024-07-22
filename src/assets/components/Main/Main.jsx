// import React from "react";
import WeatherCard from "../WeatherCard/WeatherCard";
import ItemCard from "../ItemCard/ItemCard";
import "./Main.css";

function Main({ weatherData, clothingItems, onItemClick }) {
  // Filter items based on weather type
  const filteredItems = clothingItems.filter(
    (item) => item.weather === weatherData.type
  );

  return (
    <main className="main">
      <WeatherCard data={weatherData} />
      <ul className="main__clothing-list">
        {filteredItems.map((item) => (
          <ItemCard
            key={item.id}
            imageSrc={item.imageSrc} // Assuming `item` has an `imageSrc` property
            title={item.title} // Assuming `item` has a `title` property
            onCardClick={() => onItemClick(item)} // Pass item to the handler
          />
        ))}
      </ul>
    </main>
  );
}

export default Main;

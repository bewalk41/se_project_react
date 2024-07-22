src / assets / components / App / App.jsx;
import React, { useState } from "react";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import "./App.css";

function App() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const handleCardClick = (item) => {
    setSelectedItem(item);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedItem(null);
  };

  const weatherData = { type: "sunny" }; // Replace with actual data
  const clothingItems = [
    // Replace with actual data
    { id: 1, name: "Shirt", weather: "sunny", image: "path/to/image1.png" },
    { id: 2, name: "Jacket", weather: "rainy", image: "path/to/image2.png" },
  ];

  return (
    <div className="app">
      <Header />
      <Main
        weatherData={weatherData}
        clothingItems={clothingItems}
        onItemClick={handleCardClick}
      />
      <Footer />
      {modalOpen && (
        <>
          <ModalWithForm onClose={closeModal} />
          {selectedItem && (
            <ItemModal item={selectedItem} onClose={closeModal} />
          )}
        </>
      )}
    </div>
  );
}

export default App;

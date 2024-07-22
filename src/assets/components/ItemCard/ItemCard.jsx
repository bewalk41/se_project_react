import React from "react";
import "./ItemCard.css";

function ItemCard({ item, onItemClick }) {
  return (
    <li className="item-card">
      <img
        className="item-card__image"
        src={item.image}
        alt={item.name}
        onClick={() => onItemClick(item)} // Handle item click
      />
      <p className="item-card__title">{item.name}</p>
    </li>
  );
}

export default ItemCard;

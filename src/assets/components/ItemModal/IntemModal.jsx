import React from "react";
import "./ItemModal.css";

function ItemModal({ item, isOpen, onClose }) {
  if (!isOpen) return null; // Don't render if not open

  return (
    <div className="item-modal">
      <div className="item-modal__content">
        <button className="item-modal__close" onClick={onClose}>
          &times;
        </button>
        {item && (
          <>
            <img
              src={item.image}
              alt={item.name}
              className="item-modal__image"
            />
            <p className="item-modal__title">{item.name}</p>
          </>
        )}
      </div>
    </div>
  );
}

export default ItemModal;

import React from "react";

const Item = ({ item, onDeleteItem, onToggle }) => {
  const handleCloseClick = () => {
    onDeleteItem(item.id);
  };

  return (
    <li>
      <input
        type="checkbox"
        value={item.packed}
        onChange={() => onToggle(item.id)}
      />
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.quantity} {item.description}
      </span>
      <button onClick={handleCloseClick}>❌</button>
    </li>
  );
};

export default Item;

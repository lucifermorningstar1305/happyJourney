import React from "react";
import { useState } from "react";

const Form = ({ onAddItems }) => {
  const [itemDescription, setItemDescription] = useState("");
  const [quantity, setQuantity] = useState(1);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!itemDescription) return;

    const newItem = {
      description: itemDescription,
      quantity: quantity,
      packed: false,
      id: Date.now(),
    };
    console.log(newItem);

    onAddItems(newItem);

    setQuantity(1);
    setItemDescription("");
  };

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>What do you need for your 😍 trip?</h3>
      <select
        value={quantity}
        onChange={(e) => setQuantity(Number(e.target.value))}
      >
        {Array.from({ length: 20 }, (_, idx) => idx + 1).map((num) => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>
      <input
        type="text"
        placeholder="Item..."
        value={itemDescription}
        onChange={(e) => setItemDescription(e.target.value)}
      />
      <button>Add</button>
    </form>
  );
};

export default Form;

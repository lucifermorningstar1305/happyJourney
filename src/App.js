import React from "react";
import Logo from "./components/Logo";
import Form from "./components/Form";
import PackagingList from "./components/PackagingList";
import Stats from "./components/Stats";
import { useState } from "react";

const App = () => {
  const [items, setItems] = useState([]);

  const handleAddItems = (item) => {
    setItems((s) => [...s, item]);
  };

  const handleDeleteItems = (id) => {
    setItems((s) => s.filter((item) => item.id !== id));
  };

  const handleToggleItem = (id) => {
    setItems((s) =>
      s.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  };

  const handleClearItems = () => {
    const confirmed = window.confirm(
      `Are you sure you want to clear ${items.length} items from your list?`
    );
    if (confirmed) setItems([]);
  };

  return (
    <div className="app">
      <Logo />
      <Form onAddItems={handleAddItems} />
      <PackagingList
        items={items}
        onDeleteItems={handleDeleteItems}
        onToggle={handleToggleItem}
        onClear={handleClearItems}
      />
      <Stats items={items} />
    </div>
  );
};

export default App;

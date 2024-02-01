import React from "react";

const Stats = ({ items }) => {
  if (!items.length) {
    return (
      <footer className="stats">
        <em>Start Adding some items to your packaging list ✈️</em>
      </footer>
    );
  }

  const numItems = items.length;
  const numPacked = items.filter((item) => item.packed === true).length;
  const percent = Math.round((numPacked / numItems) * 100);

  return (
    <footer className="stats">
      <em>
        {percent === 100
          ? "You got everything! Ready to go ✈️"
          : `💼 You have ${numItems} items on your list and you have already packed${" "}
        ${numPacked} (${percent}%)`}
      </em>
    </footer>
  );
};

export default Stats;

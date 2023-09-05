import React from "react";

function MenuItem({ image, name, price, link }) {
  const handleButtonClick = () => {
    window.open(link, "_blank"); // Open link in a new tab
  };

  return (
    <div className="menuItem">
      <div
        style={{ backgroundImage: `url(${image})` }}
        className="menuItemBackground"
      ></div>
      <h1>{name}</h1>
      <p>{price}</p>
      <button onClick={handleButtonClick} className="menuButton">
        View
      </button>
    </div>
  );
}

export default MenuItem;

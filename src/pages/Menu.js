import React from "react";
import { MenuList } from "../helpers/MenuList";
import MenuItem from "../components/MenuItem"; 
import '../styles/Menu.css'

function Menu() {
  return (
    <div className="menu">
      <h1 className="menuTitle">Personal Projects</h1>
      <div className="menuList">
        {MenuList.map((menuItem, key) => (
          <MenuItem
            key={key}
            image={menuItem.image}
            name={menuItem.name}
            price={menuItem.price}
            link={menuItem.link} // Pass the link prop
          />
        ))}
      </div>
    </div>
  );
}

export default Menu;

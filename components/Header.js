import React, { useState } from "react";
import Navbar from "./Navbar";
import Menu from "./Menu";

function Header(props) {
  const [menuToggle, setMenuToggle] = useState(0);

  return (
    <>
      <Navbar menuState={menuToggle} setMenuState={setMenuToggle} />
      <div className="relative">
        <Menu menuState={menuToggle} setMenuState={setMenuToggle}/>
      </div>
    </>
  );
}

export default Header;

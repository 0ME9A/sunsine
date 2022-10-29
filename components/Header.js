import React, { useState } from "react";
import Navbar from "./Navbar";
import Image from "next/image";
import Menu from "./Menu";
import Tags from "./Tags";

function Header(props) {
  const [menuToggle, setMenuToggle] = useState(0)

  return (
    <>
      <Navbar menuState={menuToggle} setMenuState={setMenuToggle} />
      <div className="relative">
        <Menu menuState={menuToggle} />
      </div>
    </>
  );
}

export default Header;

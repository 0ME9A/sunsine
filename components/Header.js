import React, { useState } from "react";
import Navbar from "./Navbar";
import Image from "next/image";
import Menu from "./Menu";

function Header(props) {
  const [menuToggle, setMenuToggle] = useState(0)


  return (
    <>
      <Navbar menuState={menuToggle} setMenuState={setMenuToggle}/>
      <header className="relative h-auto" style={{ height: "80vh" }}>
        <Image
          src="/../public/assets/header-bg.jpg"
          alt="/"
          width={500}
          height={400}
          className="w-full object-cover absolute -top-20 h-full"
        />
        <Menu menuState={menuToggle}/>
      </header>
    </>
  );
}

export default Header;

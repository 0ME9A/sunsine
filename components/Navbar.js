import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { FaSearch } from "react-icons/fa";
import SearchPhotos from "./SearchPhotos";

function Navbar(props) {
  const [searchbar, setSearchbar] = useState(1);

  return (
    <div className="sticky top-0 w-full z-20 backdrop-blur-lg bg-white text-black">
      <nav className=" flex justify-between p-5 items-center max-w-screen-2xl mx-auto">
        <Link href="/">
          <h2 className="text-2xl ">Sunsine</h2>
        </Link>
        <ul className="gap-6 lg:gap-10 items-center  hidden md:flex">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/photos">Photos</Link>
          </li>
          <li>
            <Link href="/">About</Link>
          </li>
          <li>
            <Link href="/">Contact</Link>
          </li>
          <li className="h-5 w-[2px] bg-black"></li>
          <li>
            <button
              type="button"
              onClick={() =>
                searchbar === 0 ? setSearchbar(1) : setSearchbar(0)
              }
              className="p-2 bg-black text-white px-3 w-44 flex items-center justify-between rounded-full border-2 border-blue-800 text-sm"
            >
              Search photos <FaSearch />
            </button>
          </li>
        </ul>
        <div className="flex items-center gap-5 md:hidden">
          <button
            type="button"
            onClick={() =>
              searchbar === 0 ? setSearchbar(1) : setSearchbar(0)
            }
            className="p-2 bg-black text-white px-3 w-24 flex items-center justify-between rounded-full border-2 border-blue-800 text-sm"
          >
          Search
          <FaSearch />
          </button>
          <HiOutlineMenuAlt3
            className=" text-2xl"
            onClick={() =>
              props.menuState === 1
                ? props.setMenuState(0)
                : props.setMenuState(1)
            }
          />
        </div>
      </nav>
      <SearchPhotos searchbar={searchbar} />

      <hr className="w-full relative z-10 border-blue-800" />
    </div>
  );
}

export default Navbar;

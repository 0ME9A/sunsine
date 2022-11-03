import React, { useState } from "react";
import Link from "next/link";
import { FiGithub } from "react-icons/fi";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { FaSearch } from "react-icons/fa";
import SearchPhotos from "./SearchPhotos";
import Tags from "./Tags";

function Navbar(props) {
  const [searchbar, setSearchbar] = useState(0);

  return (
    <div className="sticky top-0 w-full z-30 backdrop-blur-lg bg-white text-black">
      <nav className=" flex justify-between p-5 px-3 items-center max-w-screen-2xl mx-auto">
        <Link href="/">
          <h2 className="text-2xl ">camCapture</h2>
        </Link>

        <ul className="gap-6 lg:gap-7 items-center  hidden md:flex">
          <li>
            <Link href="/">Home</Link>
          </li>
          {/* <li>
            <Link href="/photos">Photos</Link>
          </li> */}
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
          <li>
            <Link
              href="https://github.com/0me9a"
              className="border-2 inline-block p-1 rounded-full border-black hover:bg-black group"
            >
              <FiGithub className="text-xl group-hover:text-white" />
            </Link>
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

      {/* <Tags/> */}
      {/* <hr className="w-full relative z-10 border-blue-800" /> */}
    </div>
  );
}

export default Navbar;

import React, { useRef } from "react";
import { FaSearch } from "react-icons/fa";

function SearchPhotos(props) {
  const searchState = useRef(0);
  searchState.current = props.searchbar;
  return (
    <form
      action="/photos/"
      method="get"
      className={`fixed w-full p-3 origin-top`}
      style={{ transform: `scale(${props.searchbar})` }}
    >
      <div className="max-w-screen-lg mx-auto flex rounded-xl border-2 border-black overflow-hidden shadow-lg hover:shadow-xl">
        <label htmlFor="search" className="hidden">
          search
        </label>
        <input
          type="search"
          name="search"
          id="search"
          autoFocus
          placeholder="Search free high-resolution photos"
          className="p-5 text-xl px-8 w-full rounded-tl-xl rounded-bl-xl outline-none placeholder:text-lg sm:placeholder:text-xl"
        />
        <button
          type="button"
          className="px-8 text-xl bg-white text-black  hover:bg-black hover:text-white"
        >
          <FaSearch />
          {/* Search */}
        </button>
      </div>
    </form>
  );
}

export default SearchPhotos;

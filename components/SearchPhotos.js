import React, { useRef } from "react";
import { FaSearch } from "react-icons/fa";
import { HiScale } from "react-icons/hi";

function SearchPhotos(props) {
  const searchState = useRef(0);
  searchState.current = props.searchbar;
  return (
    <form
      action="#"
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
          name="photos"
          id="search"
          placeholder="Search photos"
          className="p-5 text-xl px-8 w-full rounded-tl-xl rounded-bl-xl outline-none"
        />
        <button
          type="button"
          className="px-8 text-xl bg-white text-black rounded-tr-xl hover:bg-black hover:text-white rounded-br-xl"
        >
          <FaSearch />
        </button>
      </div>
    </form>
  );
}

export default SearchPhotos;

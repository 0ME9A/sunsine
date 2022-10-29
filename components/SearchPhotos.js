import React from 'react';
import { FaSearch } from 'react-icons/fa';

function SearchPhotos(props) {
    return (
        <form action="#" method="get" className={`fixed w-full p-5 origin-top scale-` + props.searchbar}>
            <div className="max-w-screen-lg mx-auto flex rounded-xl overflow-hidden hover:shadow-xl">
                <label htmlFor="search" className="hidden">search</label>
                <input type="search" name="search" id="search" placeholder="Search photos" className="p-5 text-xl px-8 w-full rounded-tl-xl rounded-bl-xl outline-none" />
                <button type="button" className="px-8 text-xl bg-white text-black rounded-tr-xl hover:bg-black hover:text-white rounded-br-xl"><FaSearch /></button>
            </div>
        </form>
    );
}

export default SearchPhotos;
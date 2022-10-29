import Link from "next/link";
import React from "react";

function Tags(props) {
  return (
    <ul className="flex px-5 items-center flex-nowrap overflow-hidden">
      <li className="hover:border-black border-b-2 border-transparent">
        <Link
          href="#"
          className="px-5 rounded-lg py-3 inline-block w-full h-full opacity-75 hover:opacity-100 "
        >
          Hello
        </Link>
      </li>
      <li className="hover:border-black border-b-2 border-transparent">
        <Link
          href="#"
          className="px-5 rounded-lg py-3 inline-block w-full h-full opacity-75 hover:opacity-100 "
        >
          Technology
        </Link>
      </li>
      <li className="border h-5 border-black"></li>

      <li className="hover:border-black border-b-2 border-transparent">
        <Link
          href="#"
          className="px-5 rounded-lg py-3 inline-block w-full h-full opacity-75 hover:opacity-100 "
        >
          Girl
        </Link>
      </li>
      <li className="hover:border-black border-b-2 border-transparent">
        <Link
          href="#"
          className="px-5 rounded-lg py-3 inline-block w-full h-full opacity-75 hover:opacity-100 "
        >
          Space
        </Link>
      </li>
      <li className="hover:border-black border-b-2 border-transparent">
        <Link
          href="#"
          className="px-5 rounded-lg py-3 inline-block w-full h-full opacity-75 hover:opacity-100 "
        >
          Mountain
        </Link>
      </li>
      <li className="hover:border-black border-b-2 border-transparent">
        <Link
          href="#"
          className="px-5 rounded-lg py-3 inline-block w-full h-full opacity-75 hover:opacity-100 "
        >
          City
        </Link>
      </li>
      <li className="hover:border-black border-b-2 border-transparent">
        <Link
          href="#"
          className="px-5 rounded-lg py-3 inline-block w-full h-full opacity-75 hover:opacity-100 "
        >
          NewYork
        </Link>
      </li>
      <li className="hover:border-black border-b-2 border-transparent">
        <Link
          href="#"
          className="px-5 rounded-lg py-3 inline-block w-full h-full opacity-75 hover:opacity-100 "
        >
          Flowers
        </Link>
      </li>
      <li className="hover:border-black border-b-2 border-transparent">
        <Link
          href="#"
          className="px-5 rounded-lg py-3 inline-block w-full h-full opacity-75 hover:opacity-100 "
        >
          Textures&Patterns
        </Link>
      </li>
      <li className="hover:border-black border-b-2 border-transparent">
        <Link
          href="#"
          className="px-5 rounded-lg py-3 inline-block w-full h-full opacity-75 hover:opacity-100 "
        >
          Food&Drink
        </Link>
      </li>
      <li className="hover:border-black border-b-2 border-transparent">
        <Link
          href="#"
          className="px-5 rounded-lg py-3 inline-block w-full h-full opacity-75 hover:opacity-100 "
        >
          3DRenders
        </Link>
      </li>
    </ul>
  );
}

export default Tags;

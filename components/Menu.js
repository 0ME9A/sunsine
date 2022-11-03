/* eslint-disable react/no-unescaped-entities */
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { FaLinkedin, FaTwitter, FaGithub } from "react-icons/fa";

function Menu(props) {
  const [mBack, setMBack] = useState(0);
  const [m, setM] = useState(0);

  useEffect(() => {
    if (props.menuState === 1) {
      setTimeout(() => {
        setM(1);
      }, 500);
      setMBack(1);
    }
    if (props.menuState === 0) {
      setTimeout(() => {
        setMBack(0);
      }, 500);
      setM(0);
    }
  }, [props.menuState]);

  return (
    <menu
      className={`w-full h-full fixed z-10 right-0 top-0 uppercase md:hidden
      ${mBack === 1 ? " bg-black/70 block" : " hidden"}`}
    >
      <div
        className={`w-full bg-blue-100 h-full p-5 md:w-[500px] float-right origin-right relative 
             ${m === 1 ? " opacity-1 scale-x-1" : " opacity-0 scale-x-0"}`}
      >
        <p className="mt-20 py-3 text-black normal-case border-b-blue-800 border-b-2">
          Let's build something legendry together.
        </p>
        <ul className="flex flex-col gap-8 mt-16 text-black text-xl max-w-screen-2xl mx-auto">
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
        </ul>
        <div className="social absolute bottom-10">
          <div className="bg-white flex gap-5 py-5 text-2xl shadow-md w-full max-w-screen-2xl mx-auto rounded-xl p-3 text-black font-normal normal-case">
            <FaLinkedin className="hover:scale-110 transition-all cursor-pointer" />
            <FaTwitter className="hover:scale-110 transition-all cursor-pointer" />
            <FaGithub className="hover:scale-110 transition-all cursor-pointer" />
          </div>
        </div>
      </div>
    </menu>
  );
}

export default Menu;

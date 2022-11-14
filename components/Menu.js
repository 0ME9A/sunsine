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
      className={`w-full h-full fixed z-40 right-0 top-0 uppercase lg:hidden
      ${mBack === 1 ? " bg-black/70 block" : " hidden"}`}
    >
      <div
        className={`w-full bg-white h-full p-5 pt-24 md:w-[500px] float-right origin-right relative 
             ${m === 1 ? " opacity-1 scale-x-1" : " opacity-0 scale-x-0"}`}
      >
        <p className="mt-20 py-3 text-black normal-case border-b-blue-800 border-b-2">
          The internet’s source for visuals. Powered by creators everywhere.
        </p>
        <ul className="flex flex-col gap-8 mt-16 text-black text-xl max-w-screen-2xl mx-auto">
          <li>
            <Link
              href="/"
              onClick={() => {
                props.setMenuState(0);
              }}
            >
              Home
            </Link>
          </li>
          {/* <li>
            <Link href="/creators/">Creators</Link>
          </li> */}
          <li>
            <Link
              href="/"
              onClick={() => {
                props.setMenuState(0);
              }}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              href="/"
              onClick={() => {
                props.setMenuState(0);
              }}
            >
              Contact us
            </Link>
          </li>
        </ul>
        <div className="social absolute bottom-10">
          <div className="bg-white flex gap-5 py-5 text-2xl shadow-md w-full max-w-screen-2xl mx-auto rounded-xl p-3 text-black font-normal normal-case">
            <Link
              href={"https://www.linkedin.com/in/baliram-kumar-0a9a0a214/"}
              target="_blank"
              rel="linked link"
              aria-label="linkedin profile open new tab"
            >
              <FaLinkedin className="hover:scale-110 transition-all cursor-pointer" />
            </Link>
            <Link
              href={"https://twitter.com/omega86735940"}
              target="_blank"
              rel="twitter link"
              aria-label="twitter profile open new tab"
            >
              <FaTwitter className="hover:scale-110 transition-all cursor-pointer" />
            </Link>
            <Link
              href={"https://github.com/0me9a"}
              target="_blank"
              rel="github link"
              aria-label="github profile open new tab"
            >
              <FaGithub className="hover:scale-110 transition-all cursor-pointer" />
            </Link>
          </div>
        </div>
      </div>
    </menu>
  );
}

export default Menu;

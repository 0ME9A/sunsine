import React from "react";
import Link from "next/link";

function Footer(props) {
  return (
    <footer className="bg-blue-800 text-white mt-10">
      <div className="max-w-screen-2xl mx-auto flex-col items-center p-5 flex ">
        <h2 className="text-center">Sunsine powered by Unsplash</h2>
        <hr className="border-blue-900 mt-5 w-full" />
        <ul className="flex justify-center p-5 gap-4">
          <li>
            <Link href="#">Home</Link>
          </li>
          <li>
            <Link href="#">Photos</Link>
          </li>
          <li>
            <Link href="#">About</Link>
          </li>
          <li>
            <Link href="#">Contact</Link>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;

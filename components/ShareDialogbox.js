import React, { useContext } from "react";
import Link from "next/link";
import { MdOutlineFileCopy } from "react-icons/md";
import { FaTwitter, FaFacebook } from "react-icons/fa";
import { MdMail, MdClose } from "react-icons/md";
import PhotosContext from "./Context/PhotosContext";

function ShareDialogbox(props) {
  const context = useContext(PhotosContext);
  const userid = context.isShareDialogboxActive;

  return (
    <div
      className={`p-3 w-full h-full bg-black/70 fixed top-0 left-0 flex justify-center items-center z-20`}
    >
      <article className="p-5 border-2 max-w-2xl w-full font-light bg-white rounded-sm relative text-sm sm:text-lg">
        <h2 className="font-normal text-2xl">Share</h2>
        <p className="font-light">{`${userid}'s profile`}</p>

        <div className="flex gap-2 mt-3">
          <Link
            href={`https://twitter.com/intent/tweet?url=https://camcapture.netlify.app/creators/@${userid}?utm_source=twitter&utm_medium=referral`}
            target="_blank"
            className="w-full flex gap-2 items-center justify-center bg-gray-100 p-1 hover:bg-white"
            aria-label={`share ${""}'s profile in Twitter.`}
            rel="noopener noreferrer"
          >
            <FaTwitter />
            Twitter
          </Link>
          <Link
            href={`https://www.facebook.com/sharer/sharer.php?u=https://camcapture.netlify.app/creators/@${userid}?utm_source=facebook&utm_medium=referral`}
            target="_blank"
            className="w-full flex gap-2 items-center justify-center bg-gray-100 p-1 hover:bg-white"
            aria-label={`share ${""}'s profile in facebook.`}
            rel="noopener noreferrer"
          >
            <FaFacebook />
            Facebook
          </Link>
          <Link
            href={`mailto:?body=https://camcapture.netlify.app/cretors/@${userid}?utm_source=email&utm_medium=referral`}
            target="_blank"
            className="w-full flex gap-2 items-center justify-center bg-gray-100 p-1 hover:bg-white"
            aria-label={`share ${""}'s profile in Instagram.`}
            rel="noopener noreferrer"
          >
            <MdMail />
            Email
          </Link>
        </div>
        <p className="w-full flex items-center justify-between bg-gray-100 overflow-auto border-2 rounded-sm p-1 px-3 mt-2">
          https://camcapture.netlify.app/creators/@{userid}
          <span className="hidden">
            <MdOutlineFileCopy />
          </span>
        </p>
        <MdClose
          className="text-2xl opacity-50 hover:opacity-100 cursor-pointer absolute right-2 top-2"
          onClick={() => context.setIsShareDialogboxActive("")}
        />
      </article>
    </div>
  );
}

export default ShareDialogbox;

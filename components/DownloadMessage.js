import React, { useContext, useEffect, useState } from "react";
import { GrClose } from "react-icons/gr";
import Image from "next/image";
import PhotosContext from "./Context/PhotosContext";

function DownloadMessage(props) {
  const context = useContext(PhotosContext);
  const imageData = context.isDownloadActive;

  const {
    user: {
      name
    },
    urls:{
      small: image
    },
    ...a
  } = imageData;


  return (
    <article
      className={`p-2 w-full max-w-xl text-black fixed text-sm left-1/2 -translate-x-1/2 bottom-0 z-30`}
    >
      <div className=" h-full  mx-auto overflow-hidden flex gap-3">
        <div className="border-2 h-full bg-white overflow-hidden flex p-3 gap-3">
          <div className="overflow-hidden h-32">
            <Image
              alt="The guitarist in the concert."
              src={image}
              width={110}
              height={150}
              className="h-full object-cover"
            />
          </div>
          <div className="grid gap-1">
            <h2 className="text-lg w-full flex justify-between">
              Say thanks🙏{" "}
              <GrClose
                className="hover:opacity-50 cursor-pointer"
                onClick={() => context.setIsDownloadActive("")}
              />
            </h2>
            <p>
              Give a shoutout to {name} on social or copy the text below to
              attribute
            </p>
            <p className="p-2 bg-slate-100 rounded-sm">
              Photo by <span className="font-bold">{name}</span> camCapture
            </p>
          </div>
        </div>
      </div>
    </article>
  );
}

export default DownloadMessage;

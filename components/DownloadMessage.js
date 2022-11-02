import React, { useContext, useEffect, useState } from "react";
import { GrClose } from "react-icons/gr";
import Image from "next/image";
import PhotosContext from "./Context/PhotosContext";

function DownloadMessage(props) {
  const context = useContext(PhotosContext);
  const imageData = context.isDownloadActive;
  const userName = imageData.user.name;
  const img = imageData.urls.small;
  const [fadeOut, setFadeOut] = useState(1)
  // useEffect(()=>{
  //   setTimeout(() => {
  //     setFadeOut(.2)
  //   }, 17000);
  //   setTimeout(() => {
  //     context.setIsDownloadActive('')
  //   }, 20000);
  // }, [imageData])
  return (
    <article className={`p-3 text-black max-w-xl fixed  text-sm bottom-0 right-0 z-20`}>
      {/* <article className={`p-3 text-black max-w-xl fixed  text-sm bottom-0 right-0 z-20`} style={{transitionDuration: '3s',opacity: fadeOut}}> */}
      <div className=" h-full overflow-hidden flex p-3 gap-3">
        <div className="border-2 h-full bg-white overflow-hidden flex p-3 gap-3">
          <div className="overflow-hidden">
            <Image
              alt="The guitarist in the concert."
              src={img}
              width={100}
              height={200}
              className="h-full object-cover"
            />
          </div>
          <div>
            <h2 className="text-lg w-full flex justify-between ">
              Say thanks🙏{" "}
              <GrClose
                className="hover:opacity-50 cursor-pointer"
                onClick={() => context.setIsDownloadActive("")}
              />
            </h2>
            <p>
              Give a shoutout to {userName} on social or copy the text below to
              attribute
            </p>
            <p className="p-2 bg-slate-100 rounded-sm">
              Photo by {userName} Sunsine
              {/* <a href="https://unsplash.com/@windows?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
                {" "}
              </a>{" "}
              on
              <a href="https://unsplash.com/?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
                {" "}
              </a> */}
            </p>
          </div>
        </div>
      </div>
    </article>
  );
}

export default DownloadMessage;

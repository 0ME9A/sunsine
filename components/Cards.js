import React, { useContext, useEffect, useMemo, useState } from "react";
import Image from "next/image";
import { MdFileDownload } from "react-icons/md";
import UserProfileThumbnail from "./UserProfileThumbnail";
import PhotosContext from "./Context/PhotosContext";

function Cards(props) {
  const context = useContext(PhotosContext);
  const img = props.imageData.urls.regular;
  const id = props.imageData.id;
  const userName = props.imageData.user.name;
  const userId = props.imageData.user.username;
  const userImg = props.imageData.user.profile_image.small;
  const bgColor = props.imageData.color;
  const downloadUrls = props.imageData.links.download;
  const alt_description = props.imageData.alt_description
  return (
    <div className={`group w-full h-auto relative hover:bg-black/10`} id={id}>
      <div
        className="w-full h-auto relative cursor-zoom-in"
        style={{ background: bgColor }}
        onClick={() => {
          context.setIsPreviewActive(props.imageData);
        }}
      >
        <Image
          alt={alt_description===null?"Photo by"+userName:alt_description}
          src={img}
          // fill
          width={500}
          height={500}
          className="w-full h-auto object-cover"
          sizes="(max-width: 768px) 100vw,
        (max-width: 1200px) 50vw,
        33vw"
        />
      </div>

      <article className="w-full sm:h-full flex flex-col justify-between sm:opacity-0 pb-5 sm:p-0 sm:absolute top-0 left-0 hover:opacity-100 sm:card">
        <div
          className="w-full h-full cursor-zoom-in"
          onClick={() => {
            context.setIsPreviewActive(props.imageData);
          }}
        ></div>
        <div className="flex p-3 justify-between">
          <UserProfileThumbnail
            img={userImg}
            userName={userName}
            userId={userId}
            styles={"sm:text-white"}
          />
          <a
            href={downloadUrls + "&force=true"}
            download
            target="_blank"
            rel="noopener noreferrer"
            className="flex-end border-2 aspect-square text-xl flex items-center justify-center rounded-md hover:bg-white bg-black hover:text-black text-white px-2"
            onClick={() => {
              context.setIsDownloadActive(props.imageData);
            }}
          >
            <MdFileDownload />
          </a>
        </div>
      </article>
    </div>
  );
}

export default Cards;

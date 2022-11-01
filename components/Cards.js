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
  return (
    <div
      className={`group w-full h-auto aspect-video relative overflow-hidden bg-blue-800`}
      id={id}
      style={{ background: bgColor }}
    >
      <Image
        src={img}
        alt={id + "img"}
        fill
        className="w-full h-auto object-cover"
        sizes="(max-width: 768px) 100vw,
        (max-width: 1200px) 50vw,
        33vw"
      />

      <article className="w-full h-full flex flex-col justify-between bg-black/75 absolute top-0 left-0 opacity-0 hover:opacity-100">
        <div
          className="w-full h-full"
          onClick={() => {
            context.setIsPreviewActive(props.imageData);
          }}
        ></div>
        <div className="flex p-3 justify-between">
          <UserProfileThumbnail
            img={userImg}
            userName={userName}
            userId={userId}
            textColor={"white"}
          />
          <a
            href={downloadUrls + "&force=true"}
            download
            target="_blank"
            rel="noopener noreferrer"
            className="flex-end border-2 aspect-square text-xl flex items-center justify-center rounded-md hover:bg-white hover:text-black text-white px-2"
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

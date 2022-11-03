import React, { useContext, useEffect, useMemo, useState } from "react";
import Image from "next/image";
import { GrClose } from "react-icons/gr";
import UserProfileThumbnail from "./UserProfileThumbnail";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import PhotosList from "./PhotosList";
import PhotosContext from "./Context/PhotosContext";
import {SlCalender} from 'react-icons/sl'
import {HiOutlineShieldCheck} from 'react-icons/hi';
import {HiOutlineIdentification} from 'react-icons/hi'

function PhotoPreview(props) {
  const context = useContext(PhotosContext);
  const imageData = context.isPreviewActive;

  const img = imageData.urls.regular;
  const id = imageData.id;
  const userName = imageData.user.name;
  const userId = imageData.user.username;
  const userImg = imageData.user.profile_image.small;
  const size = [imageData.width, imageData.height];
  const date = imageData.created_at;
  const bgColor = imageData.color;
  const downloadUrls = imageData.links.download;
  const alt_description = imageData.alt_description;
  const views = imageData.likes;

  const [downloadLink, setDownloadLink] = useState(0);

  document.addEventListener("click", function (e) {
    e.target.id === "download-arrow" || e.target.id === "download-arrow-2"
      ? setDownloadLink(1)
      : setDownloadLink(0);
  });
  return (
    <section className="w-full top-20 h-screen fixed bg-black/75 z-20 overflow-auto">
      <div className="max-w-screen-2xl flex flex-col justify-center items-center h-auto border-2 mx-auto bg-white 2xl:top-5 relative">
        <header className="p-3 w-full flex  justify-between !text-black sticky top-0 z-10 bg-white">
          <UserProfileThumbnail
            img={userImg}
            userId={userId}
            userName={userName}
          />
          <button
            className="p-2 border-2 rounded-md aspect-square hover:shadow-xl hover:opacity-60"
            onClick={() => context.setIsPreviewActive("")}
          >
            <GrClose />
          </button>
        </header>
        <figure className="bg-white w-full grid items-center justify-center ">
          <Image
            src={img}
            alt={
              alt_description === null ? "Photo by" + userName : alt_description
            }
            width={size[0]}
            height={size[1]}
            className={`${
              size[0] > size[1]
                ? "w-full h-auto"
                : "w-full h-auto sm:h-[70vh] sm:w-auto"
              // "w-full h-auto lg:h-[70vh] sm:w-auto"
            }`}
            style={{ background: bgColor }}
          />
          <figcaption className=" p-3 w-full bg-slate-400 hidden">
            {userName}
          </figcaption>
        </figure>
        <div className="flex justify-between w-full p-3 items-start relative">
          <ul className="grid gap-2">
            <li className="font-light text-sm flex items-center"><HiOutlineIdentification className="inline mr-3 text-lg"/> Photo id <span className="p-1 px-2 rounded-md bg-gray-100 shadow-lg ml-2">{id}</span></li>
            <li className="font-light text-sm flex items-center"><SlCalender className="inline mr-3 text-lg"/> Published {date.split("T")[0]}</li>
            <li className="font-light text-sm flex items-center"><HiOutlineShieldCheck className="inline mr-3 text-lg"/>
              Free to use under the{" "}
              <a
                href="https://unsplash.com/license"
                target="_blank"
                rel="noopener noreferrer"
                className="underline px-1"
              >
                Unsplash License
              </a>
            </li>
          </ul>
          <button
            id="download-btn"
            className="border-2 rounded-md  hover:shadow-md flex items-center overflow-hidden"
          >
            <a
              href={downloadUrls + "&force=true"}
              rel="noopener noreferrer"
              download
              target="_blank"
              className="w-full h-full block p-1 px-3"
              onClick={() => {
                context.setIsDownloadActive(imageData);
              }}
            >
              Download
            </a>
            <span
              id="download-arrow"
              className="h-full aspect-square p-2 bg-gray-200 flex justify-center items-center"
            >
              <MdOutlineKeyboardArrowDown
                className="text-xl"
                id="download-arrow-2"
              />
            </span>
          </button>
          {downloadLink ? (
            <div className="flex flex-col p-2 rounded-md bg-black text-white absolute right-3 bottom-16 gap-2">
              <a
                href={downloadUrls + "&w=640&force=true"}
                rel="noopener noreferrer"
                download
                target="_blank"
                className="block  p-1 px-2 rounded-md opacity-75 hover:opacity-100"
                onClick={() => {
                  context.setIsDownloadActive(imageData);
                }}
              >
                Small <span className="font-light">(640 x 500)</span>
              </a>
              <a
                href={downloadUrls + "&w=1920&force=true"}
                rel="noopener noreferrer"
                download
                target="_blank"
                className="block  p-1 px-2 rounded-md opacity-75 hover:opacity-100"
                onClick={() => {
                  context.setIsDownloadActive(imageData);
                }}
              >
                Medium <span className="font-light">(1920 x 500)</span>
              </a>
              <a
                href={downloadUrls + "&w=2400&force=true"}
                rel="noopener noreferrer"
                download
                target="_blank"
                className="block  p-1 px-2 rounded-md opacity-75 hover:opacity-100"
                onClick={() => {
                  context.setIsDownloadActive(imageData);
                }}
              >
                High <span className="font-light">(2400 x 500)</span>
              </a>
              <hr />
              <a
                href={downloadUrls + "&force=true"}
                rel="noopener noreferrer"
                download
                target="_blank"
                className="block  p-1 px-2 rounded-md opacity-75 hover:opacity-100"
                onClick={() => {
                  context.setIsDownloadActive(imageData);
                }}
              >
                Original{" "}
                <span className="font-light">
                  ({`${size[0]} x ${size[1]}`})
                </span>
              </a>
            </div>
          ) : (
            ""
          )}
        </div>
        <PhotosList byUser={imageData.user.username}/>
      </div>
    </section>
  );
}

export default PhotoPreview;

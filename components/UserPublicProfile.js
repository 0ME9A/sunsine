import React, { useState, useContext } from "react";
import Image from "next/image";
import Link from "next/link";
import { MdVerified } from "react-icons/md";
import { BiWorld } from "react-icons/bi";
import { IoMdShareAlt } from "react-icons/io";
import { BsInstagram, BsTwitter } from "react-icons/bs";
import { RiArrowDownSLine } from "react-icons/ri";
import PhotosContext from "./Context/PhotosContext";

function UserPublicProfile(props) {
  const context = useContext(PhotosContext);
  const [isSocialHidden, setIsSocialHidden] = useState(0);
  const {
    name,
    username,
    bio,
    location,
    instagram_username,
    twitter_username,
    portfolio_url,
    badge,
    profile_image: { large },
    tags: { custom },
    ...a
  } = props.profileData;
  const badgeSet = badge ? badge.title : null;

  return (
    <>
      <div className="p-5 px-3 mt-10 flex-col mx-auto max-w-screen-lg md:flex-row flex 0 md:gap-8 relative justify-start items-start">
        <div className="w-40 aspect-square relative">
          <Image
            src={large}
            width={150}
            height={150}
            alt="imgofprofile"
            className="w-full h-full object-cover rounded-full bg-black border-4 hover:border-blue-800 ring"
          />
          {badgeSet === "Verified" && (
            <span className="absolute text-3xl text-blue-700 z-10 rounded-full top-2 right-2">
              <MdVerified />
            </span>
          )}
        </div>

        <div className="grid gap-1 max-w-3xl relative">
          <div className="h-3 md:h-14"></div>
          <h1 className="capitalize text-2xl ">{name}</h1>
          <div className="flex items-start flex-col gap-3">
            <p className="">
              {bio === null
                ? "Download free, beautiful high-quality photos curated by Bjorn."
                : bio}
            </p>
            {location && (
              <address className="flex gap-1 items-center">
                {/* <GrLocation className="text-lg" />{" "} */}
                <span className="font-normal not-italic ">
                  Location - {location}
                </span>
              </address>
            )}

            {portfolio_url != null &&
              twitter_username != null &&
              instagram_username != null && (
                <p
                  className="text-sm mt-3 flex items-center gap-2 cursor-pointer"
                  onClick={() =>
                    isSocialHidden === 0
                      ? setIsSocialHidden(1)
                      : setIsSocialHidden(0)
                  }
                >
                  Connect with {name} <RiArrowDownSLine className="text-lg" />
                </p>
              )}

            {isSocialHidden === 1 && (
              <div className="flex text-xl gap-5">
                {portfolio_url != null && (
                  <Link
                    href={portfolio_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${name}'s portfolio website click to open in new window`}
                    className=" hover:text-gray-500 duration-300 flex rounded-full gap-3 items-center justify-center"
                  >
                    <BiWorld />
                  </Link>
                )}
                {instagram_username != null && (
                  <Link
                    href={`https://www.instagram.com/${instagram_username}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${name}'s instagram click to open in new window`}
                    className=" hover:text-gray-500 duration-300 flex rounded-full gap-3 items-center justify-center"
                  >
                    <BsInstagram />
                  </Link>
                )}
                {twitter_username != null && (
                  <Link
                    href={`https://www.twitter.com/${twitter_username}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${name}'s twitter click to open in new window`}
                    className=" hover:text-gray-500 duration-300 flex rounded-full gap-3 items-center justify-center"
                  >
                    <BsTwitter />
                  </Link>
                )}
              </div>
            )}
          </div>

          <h2 className="font-normal text-sm mt-5">Intrests</h2>
          <ul className="py-2 flex gap-2 flex-wrap text-gray-500">
            {custom &&
              custom.map((item) => {
                return (
                  <li key={Math.random() * 50}>
                    <Link
                      href={`/photos?search=${item.title}`}
                      className="p-1 px-3 bg-gray-200 rounded-sm text-sm border-2"
                      aria-label={`Tags used by ${name}`}
                    >
                      {item.title}
                    </Link>
                  </li>
                );
              })}
          </ul>
        </div>

        <button
          className="flex absolute right-3 -top-5 text-xl gap-2 rounded-full p-1 px-3  hover:bg-black hover:text-white "
          title="share opener btn"
          aria-label="click to open share profile links"
          onClick={() => context.setIsShareDialogboxActive(username)}
        >
          <IoMdShareAlt />
          <span className="text-sm">share</span>
        </button>
      </div>
      <hr />
    </>
  );
}

export default UserPublicProfile;

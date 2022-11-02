import React from "react";
import Image from "next/image";

function UserProfileThumbnail(props) {
  return (
    <figure
      className={`flex items-center gap-3 ${props.styles} relative cursor-pointer bg-transparent`}
    >
      <Image
        src={props.img}
        alt=""
        width={40}
        height={40}
        className="w-10 aspect-square rounded-full border-spacing-1 border-2 border-transparent hover:border-blue-800"
      />
      <figcaption>
        {props.userName}{" "}
        <span className="text-xs block font-light">@{props.userId}</span>
      </figcaption>
    </figure>
  );
}

export default UserProfileThumbnail;

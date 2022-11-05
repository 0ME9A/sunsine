import React, {useContext} from "react";
import Image from "next/image";
import Link from "next/link";
import PhotosContext from "./Context/PhotosContext";


function UserProfileThumbnail(props) {
  const context = useContext(PhotosContext)

  return (
    <Link href={`/creators/@${encodeURIComponent(props.userId)}`} onClick={()=>context.setIsPreviewActive('')}>
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
    </Link>
  );
}

export default UserProfileThumbnail;

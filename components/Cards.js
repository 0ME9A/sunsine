import React, { useContext } from "react";
import Image from "next/image";
import { MdFileDownload } from "react-icons/md";
import UserProfileThumbnail from "./UserProfileThumbnail";
import PhotosContext from "./Context/PhotosContext";
import Link from "next/link";
import { useRouter } from "next/router";

function Cards(props) {
  const context = useContext(PhotosContext);

  const {
    id,
    likes,
    user: { username },
    user: { name },
    urls: { regular: image },
    user: {
      profile_image: { small },
    },
    color,
    links: { download: downloadUrls },
    alt_description,
    ...a
  } = props.imageData;

  const router = useRouter();
  return (
    <div className={`group w-full h-auto relative hover:bg-black/10`} id={id}>
      <Link
        href={`/photos/${id}`}
        target="_top"
        className="w-full h-auto relative cursor-zoom-in"
      >
        <Image
          alt={alt_description === null ? "Photo by" + name : alt_description}
          src={image}
          width={500}
          height={500}
          style={{ background: color }}
          className="w-full h-auto object-cover"
          sizes="(max-width: 768px) 100vw,
        (max-width: 1200px) 50vw,
        33vw"
        />
      </Link>

      <article className="w-full sm:h-full flex flex-col justify-between sm:opacity-0 pb-5 sm:p-0 sm:absolute top-0 left-0 hover:opacity-100 sm:card">
        <Link
          href={`/photos/${id}`}
          target="_top"
          className="w-full h-full cursor-zoom-in"
        ></Link>
        <div className="flex p-3 justify-between">
          <UserProfileThumbnail
            img={small}
            userName={name}
            userId={username}
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

import React from "react";
import Image from "next/image";
import {GrClose} from 'react-icons/gr'

function PhotoPreview(props) {
  const img = props.photoId.urls.regular;
  const id = props.photoId.id;
  const userName = props.photoId.user.name;
  const userImg = props.photoId.user.profile_image.small;
  const size = [props.photoId.width, props.photoId.height];
  return (
    <section
      className="w-full top-0 h-screen fixed bg-black/75 z-10 py-32 overflow-auto"
      
    >
      <div className="max-w-screen-2xl flex flex-col justify-center items-center h-auto border-2 mx-auto bg-white">
        <header className="p-3 w-full flex items-center justify-between">
          <figure className="flex items-center gap-3 relative">
            <Image
              src={userImg}
              alt=""
              width={40}
              height={40}
              className="w-10 aspect-square rounded-full border-spacing-1 border-2 border-transparent hover:border-blue-800"
            />
            <figcaption>{userName}</figcaption>
          </figure>
          <button className="p-2 border-2" onClick={() => props.setPhotoId("")}><GrClose/></button>
        </header>
        <figure className="bg-white w-full grid items-center justify-center ">
          <Image
            src={img}
            alt="Loading..."
            width={size[0]}
            height={size[1]}
            className={`${
              size[0] > size[1] ? "w-full h-auto" : "w-full h-auto sm:h-[70vh] sm:w-auto"
                // "w-full h-auto lg:h-[70vh] sm:w-auto"
                
            }`}
          />
          <figcaption className=" p-3 w-full bg-slate-400 hidden">{userName}</figcaption>
        </figure>

      </div>
    </section>
  );
}

export default PhotoPreview;

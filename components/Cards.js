import React from "react";
import Image from "next/image";

function Cards(props) {
  const img = props.allData.urls.regular;
  const id = props.allData.id;
  const userName = props.allData.user.name;
  const userImg = props.allData.user.profile_image.small;
  return (
    <div
      className="group w-full h-auto bg-slate-800 aspect-video relative overflow-hidden"
      id={id}
      onClick = {()=>props.setPhotoId(props.allData)}
    >
      <Image
        src={img}
        alt={id + "img"}
        fill
        className="w-full h-auto object-cover"
      />

      <article className="w-full h-full flex flex-col justify-between bg-black/75 absolute top-0 left-0 opacity-0 hover:opacity-100 ">
        <div></div>
        <figure className="p-3 flex items-center gap-3 text-white relative">
          <Image
            src={userImg}
            alt=""
            width={40}
            height={40}
            className="w-10 aspect-square rounded-full border-spacing-1 border-2 border-transparent hover:border-blue-800"
          />
          <figcaption>{userName}</figcaption>
        </figure>
      </article>
    </div>
  );
}

export default Cards;

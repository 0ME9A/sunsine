import React from "react";

function Cards(props) {
  // const Data = [...props.allData]
  const img = props.allData.urls.regular
  const id = props.allData.id
  const userName = props.allData.user.name
  const userImg = props.allData.user.profile_image.small
  return (
    <div className="group w-full bg-slate-800 aspect-video relative overflow-hidden" id={id}>
      <img src={img} alt={id+"img"} className="w-full h-auto"/>




      <article className="w-full h-full flex flex-col justify-between bg-black/75 absolute top-0 left-0 opacity-0 hover:opacity-100 ">
        <div></div>
        <figure className="p-3 flex items-center gap-3 text-white">
          <img src={userImg} alt="" className="w-10 rounded-full aspect-square border-spacing-1 border-2 border-transparent hover:border-blue-800"/>
          <figcaption>{userName}</figcaption>
        </figure>
      </article>
    </div>
  );
}

export default Cards;

// import React, { useMemo, useContext, useState, useEffect } from "react";
// import Image from "next/image";
// import { GrClose } from "react-icons/gr";
// import UserProfileThumbnail from "./UserProfileThumbnail";
// import { MdOutlineKeyboardArrowDown } from "react-icons/md";
// import PhotosList from "./PhotosList";
// import PhotosContext from "./Context/PhotosContext";
// import { SlCalender } from "react-icons/sl";
// import { HiOutlineShieldCheck } from "react-icons/hi";
// import { HiOutlineIdentification } from "react-icons/hi";
// import { useRouter } from "next/router";
// import Loading from "./Loading";
// import { MdFileDownload } from "react-icons/md";
// import Head from "next/head";

// function PhotoPreview(props) {
//   const context = useContext(PhotosContext);
//   const router = useRouter();
//   const [downloadLink, setDownloadLink] = useState(0);
//   const [photo, setPhoto] = useState("");
//   const [photoStatus, setPhotoStatus] = useState(0);
//   const routerQuery = router.query["id"] ? router.query["id"] : null;

//   const fetchPhoto = async (photoId) => {
//     if (photoId) {
//       const response = await fetch(
//         `https://api.unsplash.com/photos/${photoId}?client_id=QHOyNnBvywnhju854gRnrvXOZgcfLoxDOT8EEDMao3c`
//       );
//       if (response.status === 200) {
//         const data = await response.json();
//         setPhoto(data);
//         setPhotoStatus(200);
//       } else {
//         setPhotoStatus(404);
//       }
//     } else {
//       setPhotoStatus(404);
//     }
//   };

//   useEffect(() => {
//     router.isReady && fetchPhoto(routerQuery);
//   }, [router.isReady]);

//   if (photoStatus === 200) {
//     const {
//       id,
//       urls: { regular: image },
//       user: { name },
//       user: { username: userid },
//       user: {
//         profile_image: { small: profile_image },
//       },
//       width,
//       height,
//       created_at: date,
//       color,
//       links: { download: downloadUrls },
//       alt_description,
//       ...a
//     } = photo;

//     document.addEventListener("click", function (e) {
//       e.target.id === "download-arrow" || e.target.id === "download-arrow-2"
//         ? setDownloadLink(1)
//         : setDownloadLink(0);
//     });

//     return (
//       <>
//         <Head>
//           <title>{`Photo by ${name} | sunsine`}</title>
//         </Head>
//         <section className="w-full top-16 h-screen fixed bg-black/75 z-20 overflow-auto">
//           <div className="max-w-screen-2xl mx-auto bg-white 2xl:top-5 relative">
//             <header className="p-3 w-full flex  justify-between !text-black bg-white sticky top-0 z-20 ">
//               <UserProfileThumbnail
//                 img={profile_image}
//                 userName={name}
//                 userId={userid}
//               />
//               <button
//                 className="p-2 border-2 rounded-md aspect-square hover:shadow-xl hover:opacity-60"
//                 onClick={() => router.back()}
//               >
//                 <GrClose />
//               </button>
//             </header>
//             <div className="flex flex-col justify-center items-center h-auto pt-5 bg-white relative">
//               <Image
//                 src={image}
//                 alt={`photo by ${name}`}
//                 fill
//                 className="absolute opacity-50 top-0 left-0 object-cover z-0 blur-2xl"
//               />

//               <figure className=" w-full grid items-center justify-center">
//                 <Image
//                   src={image}
//                   alt={
//                     alt_description === null
//                       ? "Photo by" + name
//                       : alt_description
//                   }
//                   width={width}
//                   height={height}
//                   className={`${
//                     width > height
//                       ? "w-full h-auto"
//                       : "w-full h-auto sm:h-[70vh] sm:w-auto"
//                     // "w-full h-auto lg:h-[70vh] sm:w-auto"
//                   } relative z-10`}
//                   style={{ background: color }}
//                 />
//                 <figcaption className=" p-3 w-full bg-slate-400 hidden">
//                   {name}
//                 </figcaption>
//               </figure>
//               <div className="flex justify-between w-full p-3 items-start relative">
//                 <ul className="grid gap-2">
//                   <li className="font-light text-sm flex items-center">
//                     <HiOutlineIdentification className="inline mr-3 text-lg" />{" "}
//                     Photo id{" "}
//                     <span className="p-1 px-2 rounded-md bg-gray-100 shadow-lg ml-2">
//                       {id}
//                     </span>
//                   </li>
//                   <li className="font-light text-sm flex items-center">
//                     <SlCalender className="inline mr-3 text-lg" /> Published{" "}
//                     {date.split("T")[0]}
//                   </li>
//                   <li className="font-light text-sm flex items-center">
//                     <HiOutlineShieldCheck className="inline mr-3 text-lg" />
//                     Free to use under the{" "}
//                     <a
//                       href="https://unsplash.com/license"
//                       target="_blank"
//                       rel="noopener noreferrer"
//                       className="underline px-1"
//                     >
//                       Unsplash License
//                     </a>
//                   </li>
//                 </ul>
//                 <button
//                   id="download-btn"
//                   className="border-2 rounded-md  hover:shadow-md flex items-center overflow-hidden absolute right-3"
//                 >
//                   {window.innerWidth > 600 && (
//                     <a
//                       href={downloadUrls + "&force=true"}
//                       rel="noopener noreferrer"
//                       download
//                       target="_blank"
//                       className="w-full h-full block sm:p-1 sm:px-3"
//                       onClick={() => {
//                         context.setIsDownloadActive(photo);
//                       }}
//                     >
//                       Download
//                     </a>
//                   )}
//                   <span
//                     id="download-arrow"
//                     className="h-full aspect-square p-2 bg-gray-200 flex justify-center items-center"
//                   >
//                     {window.innerWidth < 600 ? (
//                       <MdFileDownload
//                         className="text-xl"
//                         id="download-arrow-2"
//                       />
//                     ) : (
//                       <MdOutlineKeyboardArrowDown
//                         className="text-xl"
//                         id="download-arrow-2"
//                       />
//                     )}
//                   </span>
//                 </button>
//                 {downloadLink ? (
//                   <div className="flex flex-col p-2 rounded-md bg-black text-white absolute right-3 bottom-16 gap-2">
//                     <a
//                       href={downloadUrls + "&w=640&force=true"}
//                       rel="noopener noreferrer"
//                       download
//                       target="_blank"
//                       className="block  p-1 px-2 rounded-md opacity-75 hover:opacity-100"
//                       onClick={() => {
//                         context.setIsDownloadActive(photo);
//                       }}
//                     >
//                       Small <span className="font-light">(640 x 500)</span>
//                     </a>
//                     <a
//                       href={downloadUrls + "&w=1920&force=true"}
//                       rel="noopener noreferrer"
//                       download
//                       target="_blank"
//                       className="block  p-1 px-2 rounded-md opacity-75 hover:opacity-100"
//                       onClick={() => {
//                         context.setIsDownloadActive(photo);
//                       }}
//                     >
//                       Medium <span className="font-light">(1920 x 500)</span>
//                     </a>
//                     <a
//                       href={downloadUrls + "&w=2400&force=true"}
//                       rel="noopener noreferrer"
//                       download
//                       target="_blank"
//                       className="block  p-1 px-2 rounded-md opacity-75 hover:opacity-100"
//                       onClick={() => {
//                         context.setIsDownloadActive(photo);
//                       }}
//                     >
//                       High <span className="font-light">(2400 x 500)</span>
//                     </a>
//                     <hr />
//                     <a
//                       href={downloadUrls + "&force=true"}
//                       rel="noopener noreferrer"
//                       download
//                       target="_blank"
//                       className="block  p-1 px-2 rounded-md opacity-75 hover:opacity-100"
//                       onClick={() => {
//                         context.setIsDownloadActive(photo);
//                       }}
//                     >
//                       Original{" "}
//                       <span className="font-light">
//                         ({`${width} x ${height}}`})
//                       </span>
//                     </a>
//                   </div>
//                 ) : (
//                   ""
//                 )}
//               </div>
//             </div>
//             <PhotosList byUser={userid} random={true} title={false} />
//           </div>
//         </section>
//       </>
//     );
//   } else {
//     return <Loading />;
//   }
// }

// export default PhotoPreview;

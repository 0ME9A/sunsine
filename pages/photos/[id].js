import React, { useState, useContext, useEffect } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import Head from "next/head";
import Link from "next/link";
import Loading from "../../components/Loading";
import PhotoPreview from "../../components/PhotoPreview";
import UserProfileThumbnail from "../../components/UserProfileThumbnail";
import PhotosContext from "../../components/Context/PhotosContext";
import { HiOutlineIdentification, HiOutlineShieldCheck } from "react-icons/hi";
import { MdOutlineKeyboardArrowDown, MdFileDownload } from "react-icons/md";
import { SlCalender } from "react-icons/sl";
import { GrClose } from "react-icons/gr";
import PhotosList from "../../components/PhotosList";
import PhotosList_II from "../../components/PhotosList_II";

function Img({ status, data }) {
  const [downloadLink, setDownloadLink] = useState(0);
  const [isWindow, setWindow] = useState(0);
  const context = useContext(PhotosContext);
  const router = useRouter();

  useEffect(() => {
    setWindow(1);
  }, []);
  if (status === 200) {
    const {
      id,
      urls: { regular: image },
      user: { name },
      user: { username: userid },
      user: {
        profile_image: { small: profile_image },
      },
      width,
      height,
      created_at: date,
      color,
      links: { download: downloadUrls },
      alt_description,
      ...a
    } = data;

    if (isWindow > 0) {
      document.addEventListener("click", function (e) {
        e.target.id === "download-arrow" || e.target.id === "download-arrow-2"
          ? setDownloadLink(1)
          : setDownloadLink(0);
      });
    }

    return (
      <>
        <Head>
          <title>{`Photo by ${name} | sunsine`}</title>
        </Head>
        <section className="w-full top-16 h-screen fixed bg-black/75 z-20 overflow-auto">
          <div className="max-w-screen-2xl mx-auto bg-white 2xl:top-5 relative">
            <header className="p-3 w-full flex  justify-between !text-black bg-white sticky top-0 z-20 ">
              <UserProfileThumbnail
                img={profile_image}
                userName={name}
                userId={userid}
              />
              <button
                className="p-2 border-2 rounded-md aspect-square hover:shadow-xl hover:opacity-60"
                onClick={() => router.back()}
              >
                <GrClose />
              </button>
            </header>
            <div className="flex flex-col justify-center items-center h-auto sm:pt-5 bg-white relative">
              <Image
                src={image}
                alt={`photo by ${name}`}
                fill
                className="absolute opacity-50 top-0 left-0 object-cover z-0 blur-2xl"
              />

              <figure className=" w-full grid items-center justify-center">
                <Image
                  src={image}
                  alt={
                    alt_description === null
                      ? "Photo by" + name
                      : alt_description
                  }
                  width={width}
                  height={height}
                  className={`${
                    width > height
                      ? "w-full h-auto"
                      : "w-full h-auto sm:h-[70vh] sm:w-auto"
                  } relative z-10`}
                  style={{ background: color }}
                />
                <figcaption className=" p-3 w-full bg-slate-400 hidden">
                  {name}
                </figcaption>
              </figure>
              <div className="flex justify-between flex-col gap-5 sm:gap-0 sm:flex-row w-full p-3 items-start relative">
                <ul className="grid gap-2">
                  <li className="font-light text-sm flex items-center">
                    <HiOutlineIdentification className="inline mr-3 text-lg" />{" "}
                    Photo id{" "}
                    <span className="p-1 px-2 rounded-md bg-gray-100 shadow-lg ml-2">
                      {id}
                    </span>
                  </li>
                  <li className="font-light text-sm flex items-center">
                    <SlCalender className="inline mr-3 text-lg" /> Published{" "}
                    {date.split("T")[0]}
                  </li>
                  <li className="font-light text-sm flex items-center">
                    <HiOutlineShieldCheck className="inline mr-3 text-lg" />
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
                  className="border-2 w-full sm:w-fit rounded-md hover:shadow-md flex items-center overflow-hidden"
                >
                  <Link
                    href={downloadUrls + "&force=true"}
                    rel="noopener noreferrer"
                    download
                    target="_blank"
                    className="w-full h-full block px-2 sm:px-3"
                    onClick={() => {
                      context.setIsDownloadActive(data);
                    }}
                  >
                    Download
                  </Link>
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
                  <div className="flex flex-col p-2 rounded-md bg-black text-white absolute right-3 bottom-16 gap-2 z-10">
                    <Link
                      href={downloadUrls + "&w=640&force=true"}
                      rel="noopener noreferrer"
                      download
                      target="_blank"
                      className="block  p-1 px-2 rounded-md opacity-75 hover:opacity-100"
                      onClick={() => {
                        context.setIsDownloadActive(data);
                      }}
                    >
                      Small <span className="font-light">(640 x 500)</span>
                    </Link>
                    <Link
                      href={downloadUrls + "&w=1920&force=true"}
                      rel="noopener noreferrer"
                      download
                      target="_blank"
                      className="block  p-1 px-2 rounded-md opacity-75 hover:opacity-100"
                      onClick={() => {
                        context.setIsDownloadActive(data);
                      }}
                    >
                      Medium <span className="font-light">(1920 x 500)</span>
                    </Link>
                    <Link
                      href={downloadUrls + "&w=2400&force=true"}
                      rel="noopener noreferrer"
                      download
                      target="_blank"
                      className="block  p-1 px-2 rounded-md opacity-75 hover:opacity-100"
                      onClick={() => {
                        context.setIsDownloadActive(data);
                      }}
                    >
                      High <span className="font-light">(2400 x 500)</span>
                    </Link>
                    <hr />
                    <Link
                      href={downloadUrls + "&force=true"}
                      rel="noopener noreferrer"
                      download
                      target="_blank"
                      className="block  p-1 px-2 rounded-md opacity-75 hover:opacity-100"
                      onClick={() => {
                        context.setIsDownloadActive(data);
                      }}
                    >
                      Original{" "}
                      <span className="font-light">
                        ({`${width} x ${height}`})
                      </span>
                    </Link>
                  </div>
                ) : (
                  ""
                )}
              </div>
            </div>
            {isWindow > 0 ? (
              <PhotosList_II type={"random"} title={null} query={userid} />
            ) : (
              <Loading />
            )}
          </div>
        </section>
      </>
    );
  } else {
    return <Loading />;
  }
}

export default Img;
export const getServerSideProps = async (args) => {
  const { id } = args.query;

  const response = await fetch(
    `https://api.unsplash.com/photos/${id}?client_id=QHOyNnBvywnhju854gRnrvXOZgcfLoxDOT8EEDMao3c`
  );

  if (response.status === 200) {
    const data = await response.json();
    return {
      props: {
        status: response.status,
        data,
      },
    };
  } else {
    return {
      props: {
        status: 404,
        data: "",
      },
    };
  }
};

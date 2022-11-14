import React, { useEffect, useState } from "react";
import UserPublicProfile from "../../components/UserPublicProfile";
import Loading from "../../components/Loading";
import PhotosList_II from "../../components/PhotosList_II";
import { IoMdPhotos } from "react-icons/io";
import Head from "next/head";

function Creators({ status, data }) {
  const [isWindow, setWindow] = useState(0)


  useEffect(()=>{
    setWindow(1)
  },[])
  if (status === 200) {
    return (
      <>
        <Head>
          <title>{`@${data.name} | Sunsine`}</title>
        </Head>
        <section className="max-w-screen-2xl mx-auto">
          <UserPublicProfile profileData={data} />
          <div className="p-2 px-3 border-t-2 border-black flex w-max items-center gap-2">
            <IoMdPhotos />
            <span className="text-sm"> Photos </span>
            <span className="font-light text-sm">{data.total_photos}</span>
          </div>
          {isWindow>0 ? (
            <PhotosList_II type={"user"} title={null} query={data.username} />
          ) : (
            "By"
          )}
        </section>
      </>
    );
  } else {
    return <Loading />;
  }
}

export default Creators;
export const getServerSideProps = async (args) => {
  const { creator } = args.query;
  let response = await fetch(
    `https://api.unsplash.com/users/${creator.replace(
      "@",
      ""
    )}?client_id=QHOyNnBvywnhju854gRnrvXOZgcfLoxDOT8EEDMao3c`
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

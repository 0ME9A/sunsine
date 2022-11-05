import React, { useEffect, useState } from "react";
import UserPublicProfile from "../../components/UserPublicProfile";
import { useRouter } from "next/router";
import Loading from "../../components/Loading";
import PhotosList from "../../components/PhotosList";
import { IoMdPhotos } from "react-icons/io";

function Creators(props) {
  const router = useRouter();
  const user = router.query["@"] && router.query["@"].replace("@", "");
  const [userProfile, setUserProfile] = useState("");
  const [userProfileState, setUserProfileState] = useState(0);

  const fetchUser = async (userid) => {
    if (userid) {
      let response = await fetch(
        `https://api.unsplash.com/users/${userid}?client_id=QHOyNnBvywnhju854gRnrvXOZgcfLoxDOT8EEDMao3c`
      );
      if (response.status === 200) {
        let data = await response.json();
        setUserProfile(data);
        setUserProfileState(200);
      } else {
        setUserProfileState(404);
      }
    } else {
      setUserProfileState(404);
    }
  };

  useEffect(() => {
    router.isReady && fetchUser(user);
  }, [router.isReady]);

  if (userProfileState === 200) {
    return (
      <section className="max-w-screen-2xl mx-auto">
        <UserPublicProfile profileData={userProfile} />
        <div className="p-2 px-3 border-t-2 border-black flex w-max items-center gap-2">
          <IoMdPhotos />
          <span className="text-sm"> Photos </span>
          <span className="font-light text-sm">{userProfile.total_photos}</span>
        </div>
        <PhotosList byUser={user} random={false} title={false} />
      </section>
    );
  } else {
    return <Loading />;
  }
}

export default Creators;

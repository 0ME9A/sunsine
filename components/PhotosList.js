import React, { useEffect, useRef, useState, useMemo } from "react";
import Cards from "./Cards";
import Loading from "./Loading";
import { ImCloudDownload } from "react-icons/im";
import { useRouter } from "next/router";

function PhotosList(props) {
  const [photos, setPhotos] = useState("");
  const [fetchStatus, setFetchStatus] = useState(0);
  const [page, setPage] = useState(1);
  const [winSize, setWinSize] = useState([]);
  const searchRef = useRef("");
  const router = useRouter("");

  const [gridsDesktopA, setGridsDesktopA] = useState([]);
  const [gridsDesktopB, setGridsDesktopB] = useState([]);
  const [gridsDesktopC, setGridsDesktopC] = useState([]);

  const [gridsTabA, setGridsTabA] = useState([]);
  const [gridsTabB, setGridsTabB] = useState([]);

  searchRef.current =
    (router.query.search != "" || router.query.search != undefined) &&
    router.query.search;

  const desktopGridSetter = (arr2) => {
    setGridsDesktopA(() => [
      ...gridsDesktopA,
      ...arr2.slice(0, arr2.length / 3),
    ]);
    setGridsDesktopB(() => [
      ...gridsDesktopB,
      ...arr2.slice(arr2.length / 3, (arr2.length / 3) * 2),
    ]);
    setGridsDesktopC(() => [
      ...gridsDesktopC,
      ...arr2.slice((arr2.length / 3) * 2),
    ]);
  };
  const tabGridSetter = (arr2) => {
    setGridsTabA(() => [...gridsTabA, ...arr2.slice(0, arr2.length / 2)]);
    setGridsTabB(() => [...gridsTabB, ...arr2.slice(arr2.length / 2)]);
  };

  const fetchImage = async (page = 1) => {
    const client_id = "QHOyNnBvywnhju854gRnrvXOZgcfLoxDOT8EEDMao3c";
    const bySearch = searchRef.current != "" && searchRef.current != undefined;

    const byUser = props.byUser != null;
    const random = props.random && "/random";
    let url = `https://api.unsplash.com/photos/?client_id=${client_id}&page=${page}&per_page=12`;

    if (bySearch) {
      url = `https://api.unsplash.com/search/photos?query=${searchRef.current}&client_id=${client_id}&page=${page}&per_page=12`;
    }
    if (byUser && random) {
      url = `https://api.unsplash.com/photos${random}?client_id=${client_id}&username=${props.byUser}&count=12`;
    }
    if (byUser && !random) {
      url = `https://api.unsplash.com/users/${props.byUser}/photos/?client_id=${client_id}&page=${page}&per_page=12`;
    }

    try {
      const response = await fetch(url);
      if (response.status === 200) {
        const data = await response.json();
        // console.log(response)
        if (data.results) {
          if (data.total > 0) {
            setPhotos((state) => [...photos, ...data.results]);
            desktopGridSetter(data.results);
            tabGridSetter(data.results);
            setFetchStatus(200);
          } else {
            setFetchStatus(404);
          }
        } else {
          setPhotos((state) => [...photos, ...data]);
          desktopGridSetter(data);
          tabGridSetter(data);
          setFetchStatus(200);
        }
      } else {
        setFetchStatus(response.status);
      }
    } catch (error) {
      console.log("");
    }
  };

  useMemo(() => {
    setTimeout(() => {
      fetchImage(page);
    }, 1000);
  }, [page]);

  function handleResize() {
    setWinSize([window.innerWidth, window.innerHeight]);
  }

  useEffect(() => {
    window.addEventListener("resize", handleResize());
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  });
  if (fetchStatus === 200) {
    return (
      <>
        {router.query.search != null && props.title === true && (
          <div>
            <header className="max-w-screen-2xl mx-auto p-3">
              <h1>{router.query.search}</h1>
            </header>
            <hr className="max-w-screen-2xl mx-auto" />
          </div>
        )}
        <div className="w-full flex flex-col items-center gap-5 md:gap-10 mt-5">
          {winSize[0] >= 1024 && (
            <div className="grid grid-cols-1 w-full sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 sm:gap-5 max-w-screen-2xl mx-auto sm:p-3">
              <div className="flex flex-col sm:gap-5">
                {gridsDesktopA &&
                  gridsDesktopA.map((item) => {
                    return (
                      <Cards
                        imageData={item}
                        key={item.id + Math.random() * 5000}
                      />
                    );
                  })}
              </div>
              <div className="flex flex-col sm:gap-5">
                {gridsDesktopB &&
                  gridsDesktopB.map((item) => {
                    return (
                      <Cards
                        imageData={item}
                        key={item.id + Math.random() * 5000}
                      />
                    );
                  })}
              </div>
              <div className="flex flex-col sm:gap-5">
                {gridsDesktopC &&
                  gridsDesktopC.map((item) => {
                    return (
                      <Cards
                        imageData={item}
                        key={item.id + Math.random() * 5000}
                      />
                    );
                  })}
              </div>
            </div>
          )}
          {winSize[0] >= 640 && winSize[0] < 1024 && (
            <div className="grid grid-cols-1 w-full sm:grid-cols-2 sm:gap-5 max-w-screen-2xl mx-auto sm:p-3">
              <div className="flex flex-col sm:gap-5">
                {gridsTabA &&
                  gridsTabA.map((item) => {
                    return (
                      <Cards
                        imageData={item}
                        key={item.id + Math.random() * 5000}
                      />
                    );
                  })}
              </div>
              <div className="flex flex-col sm:gap-5">
                {gridsTabB &&
                  gridsTabB.map((item) => {
                    return (
                      <Cards
                        imageData={item}
                        key={item.id + Math.random() * 5000}
                      />
                    );
                  })}
              </div>
            </div>
          )}
          {winSize[0] < 640 && (
            <div className="grid grid-cols-1 w-full sm:gap-5 max-w-screen-2xl mx-auto sm:p-3">
              <div className="flex flex-col sm:gap-5">
                {photos &&
                  photos.map((item) => {
                    return (
                      <Cards
                        imageData={item}
                        key={item.id + Math.random() * 5000}
                      />
                    );
                  })}
              </div>
            </div>
          )}
          <button
            onClick={() => setPage(page + 1)}
            className="p-3 px-5 border-b-2 border-transparent hover:border-blue-800 flex items-center gap-2"
          >
            Load More <ImCloudDownload className="text-lg" />
          </button>
        </div>
        <div className="h-5"></div>
      </>
    );
  } else {
    return <Loading />;
  }
}

export default PhotosList;

import { data } from "autoprefixer";
import { useRouter } from "next/router";
import Cards from "./Cards";
import React, { useEffect, useState } from "react";
import { ImCloudDownload } from "react-icons/im";
import Loading from "./Loading";

function PhotosList_II({ title, query, type, ...x }) {
  const router = useRouter();
  const [page, setPage] = useState(1);
  const [photos, setPhotos] = useState([]);
  const [fetchStatus, setFetchStatus] = useState(0);
  const [winWidth, setWinWidth] = useState();

  const [gridsDesktopA, setGridsDesktopA] = useState([]);
  const [gridsDesktopB, setGridsDesktopB] = useState([]);
  const [gridsDesktopC, setGridsDesktopC] = useState([]);

  const [gridsTabA, setGridsTabA] = useState([]);
  const [gridsTabB, setGridsTabB] = useState([]);


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

  const fetchPhotos = async (param = null) => {
    const key = "QHOyNnBvywnhju854gRnrvXOZgcfLoxDOT8EEDMao3c";
    let url;
    let response;
    let results;

    if (param != null) {
      switch (param.type) {
        case "user":
          url = `https://api.unsplash.com/users/${param.query}/photos/?client_id=${key}&page=${param.page}&per_page=12`;
          response = await fetch(url);
          if (response.status === 200) {
            results = await response.json();
            setPhotos((state) => [...photos, ...results]);
            desktopGridSetter(results);
            tabGridSetter(results);
            setFetchStatus(response.status);
          } else {
            setFetchStatus(response.status);
          }
          break;
        case "random":
          url = `https://api.unsplash.com/photos/random?client_id=${key}&username=${param.query}&count=12`;
          response = await fetch(url);
          response.status !== 200 && null;
          if (response.status === 200) {
            results = await response.json();
            setPhotos((state) => [...photos, ...results]);
            desktopGridSetter(results);
            tabGridSetter(results);
            setFetchStatus(response.status);
          } else {
            setFetchStatus(response.status);
          }
          break;
        case "search":
          url = `https://api.unsplash.com/search/photos?query=${param.query}&client_id=${key}&page=${param.page}&per_page=12`;
          response = await fetch(url);
          if (response.status === 200) {
            results = await response.json();
            !results.results.length > 0 && null;
            setPhotos((state) => [...photos, ...results.results]);
            desktopGridSetter(results.results);
            tabGridSetter(results.results);
            setFetchStatus(response.status);
          } else {
            setFetchStatus(response.status);
          }
          break;
        default:
          url = `https://api.unsplash.com/photos/?client_id=${key}&page=${param.page}&per_page=12`;
          response = await fetch(url);
          if (response.status === 200) {
            results = await response.json();
            setPhotos((state) => [...photos, ...results]);
            desktopGridSetter(results);
            tabGridSetter(results);
            setFetchStatus(response.status);
          } else {
            setFetchStatus(response.status);
          }
          break;
      }
    } else {
      console.log("404");
    }
  };

  const handleWinWidth =()=> {
    setWinWidth(window.innerWidth);
  }

  useEffect(()=>{
    window.addEventListener("resize", handleWinWidth)
    return ()=> window.removeEventListener('resize', handleWinWidth)
  })


  useEffect(() => {
    setWinWidth(window.innerWidth)
    router.isReady&&fetchPhotos({ type: type, query: query, page: page });
  }, [page, router.isReady]);

  if (fetchStatus === 200) {
    return (
      <>
        {title && (
          <div>
            <header className="max-w-screen-2xl mx-auto p-3">
              <h1>{title}</h1>
            </header>
            <hr className="max-w-screen-2xl mx-auto" />
          </div>
        )}

        <div className="w-full flex flex-col items-center gap-5 md:gap-10 mt-5">
          {winWidth >= 1024 && (
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
          {winWidth >= 640 && window.innerWidth < 1024 && (
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

          {winWidth < 640 && (
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
    return <Loading/>;
  }
}

export default PhotosList_II;

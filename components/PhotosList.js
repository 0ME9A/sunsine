import React, { useEffect, useRef, useState, useMemo } from "react";
import Cards from "./Cards";
import Loading from "./Loading";
import { ImCloudDownload } from "react-icons/im";

function PhotosList(props) {
  const [photos, setPhotos] = useState("");
  const [fetchStatus, setFetchStatus] = useState(0);
  const [page, setPage] = useState(1);

  const [gridsA, setGridsA] = useState([]);
  const [gridsB, setGridsB] = useState([]);
  const [gridsC, setGridsC] = useState([]);

  const gridSetter = (arr2) => {
    setGridsA(() => [...gridsA, ...arr2.slice(0, arr2.length / 3)]);
    setGridsB(() => [
      ...gridsB,
      ...arr2.slice(arr2.length / 3, (arr2.length / 3) * 2),
    ]);
    setGridsC(() => [...gridsC, ...arr2.slice((arr2.length / 3) * 2)]);
  };

  const fetchImage = async (page = 1) => {
    try {
      const response = await fetch(
        "https://api.unsplash.com/photos/?client_id=QHOyNnBvywnhju854gRnrvXOZgcfLoxDOT8EEDMao3c&page=" +
          page +
          "&per_page=12"
      );
      if (response.status === 200) {
        const data = await response.json();
        setPhotos((state) => [...photos, ...data]);
        gridSetter(data)
        setFetchStatus(200);
      } else {
        setFetchStatus(response.status);
      }
    } catch (error) {
      console.log("");
    }
  };


  useMemo(()=>{
    fetchImage(page);
  },[page])

  

  if (fetchStatus === 200) {
    return (
      <div className="w-full flex flex-col items-center gap-5 md:gap-10 mt-5">
        <div className="grid grid-cols-1 w-full sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 sm:gap-5 max-w-screen-2xl mx-auto sm:p-3">
          <div className="flex flex-col sm:gap-5">
            {gridsA&&gridsA.map((item) => {
              return (
                <Cards imageData={item} key={item.id + Math.random() * 5000} />
              );
            })}
          </div>
          <div className="flex flex-col sm:gap-5">
            {gridsB&&gridsB.map((item) => {
              return (
                <Cards imageData={item} key={item.id + Math.random() * 5000} />
              );
            })}
          </div>
          
          <div className="flex flex-col sm:gap-5">
            {gridsC&&gridsC.map((item) => {
              return (
                <Cards imageData={item} key={item.id + Math.random() * 5000} />
              );
            })}
          </div>
        </div>
        <button
          onClick={() => setPage(page + 1)}
          className="p-3 px-5 border-b-2 border-transparent hover:border-blue-800 flex items-center gap-2"
        >
          Load More <ImCloudDownload className="text-lg" />
        </button>
      </div>
    );
  } else {
    return <Loading />;
  }
}

export default PhotosList;

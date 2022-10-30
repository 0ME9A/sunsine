import React, { useEffect, useRef, useState } from "react";
import Cards from "./Cards";
import Loading from "./Loading";
import {ImCloudDownload} from 'react-icons/im'
import PhotoPreview from "./PhotoPreview";

function Content(props) {
  const [image, setImages] = useState("");
  const [fetchStatus, setFetchStatus] = useState(0);
  const pageNumber = useRef(200);
  const [photoId, setPhotoId] = useState('')

  const fetchImage1 = async (page = 1) => {
    const response = await fetch(
      "https://api.unsplash.com/photos/?client_id=QHOyNnBvywnhju854gRnrvXOZgcfLoxDOT8EEDMao3c&page=" +
      page
    );
    if (response.status === 200) {
      const data = await response.json();
      setImages((state) => [...image, ...data]);
      setFetchStatus(200)
      console.log("working")
    }
    else {
      alert(`Error ${response.statusText}:- ${response.status}`);
      setFetchStatus(response.status)
    }
  };
  const fetchData = () => {
    pageNumber.current = pageNumber.current + 1;
    fetchImage1(pageNumber.current);
  };
  useEffect(() => {
    fetchData();
  }, []);


  if (fetchStatus === 200) {
    return <div className="w-full flex flex-col items-center gap-5 md:gap-10 mt-5">
      <div className="grid grid-cols-1 w-full sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 max-w-screen-2xl mx-auto">
        {image.map((item) => {
          return <Cards allData={item} key={item.id} setPhotoId={setPhotoId}/>;
        })}
      </div>
      <button onClick={() => fetchData()} className="p-3 px-5 border-b-2 border-transparent hover:border-blue-800 flex items-center gap-2">Load More <ImCloudDownload className="text-lg"/></button>
      {photoId!==''&&<PhotoPreview photoId={photoId} setPhotoId={setPhotoId}/>}
    </div>
  } else {
    return <Loading />;
  }
}

export default Content;

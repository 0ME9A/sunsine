import React, { useEffect, useRef, useState } from "react";
import Cards from "./Cards";
import Loading from "./Loading";

function Content(props) {
  const [image, setImages] = useState("");
  const [fetchStatus, setFetchStatus] = useState(0);
  const pageNumber = useRef(200);

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
    return <div className="w-full flex flex-col items-center gap-5 md:gap-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 max-w-screen-2xl mx-auto">
        {image.map((item) => {
          // return <Cards img={item.urls.regular} id={item.id} key={item.id} />;
          return <Cards allData={item} key={item.id} />;
        })}
      </div>
      <button onClick={() => fetchData()} className="p-3 px-5 hover:shadow-lg">Load More</button>
    </div>
  } else {
    return <Loading />;
  }
}

export default Content;

import React, { useEffect, useState } from "react";

function Loading(props) {
  const [timeOut, setTimeOut] = useState("blue");

  useEffect(() => {
    setTimeout(() => {
      setTimeOut("red");
    }, 10000);
  }, []);

  return (
    <div className=" p-5 py-20 text-center w-full flex justify-center items-center gap-3 overflow-hidden">
      <span
        className={`w-8 aspect-square animate-spin rounded-full block`}
        style={{
          border: "3px solid rgb(250, 250, 250)",
          borderBottomColor: timeOut,
        }}
      ></span>
      {timeOut === "red" && "Loading Failed..."}
    </div>
  );
}

export default Loading;

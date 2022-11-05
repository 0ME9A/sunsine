import Head from "next/head";
import React, { useEffect, useState } from "react";
import Header from "./Header";
import PhotoPreview from "./PhotoPreview";
import PhotosContext from "./Context/PhotosContext";
import DownloadMessage from "./DownloadMessage";
import ShareDialogbox from "./ShareDialogbox";

function Layout({ children }) {
  const [isDownloadActive, setIsDownloadActive] = useState("");
  const [isShareDialogboxActive, setIsShareDialogboxActive] = useState("");

  return (
    <PhotosContext.Provider
      value={{
        isDownloadActive,
        setIsDownloadActive,
        isShareDialogboxActive,
        setIsShareDialogboxActive,
      }}
    >
      <Head>
        <title>Project Next</title>
      </Head>

      <Header />
      {isDownloadActive !== "" && (
        <DownloadMessage setIsDownloadActive={setIsDownloadActive} />
      )}
      {isShareDialogboxActive !== "" && (
        <ShareDialogbox setIsShareDialogboxActive={setIsShareDialogboxActive} />
      )}
      {children}
    </PhotosContext.Provider>
  );
}

export default Layout;

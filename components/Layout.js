import Head from "next/head";
import React, { useEffect, useState } from "react";
import Footer from "./Footer";
import Header from "./Header";
import PhotoPreview from "./PhotoPreview";
import PhotosContext from "./Context/PhotosContext";
import DownloadMessage from "./DownloadMessage";

function Layout({ children }) {
  const [isPreviewActive, setIsPreviewActive] = useState("");
  const [isDownloadActive, setIsDownloadActive] = useState("");

  return (
    <PhotosContext.Provider
      value={{
        isPreviewActive,
        setIsPreviewActive,
        isDownloadActive,
        setIsDownloadActive,
      }}
    >
      <Head>
        <title>Project Next</title>
      </Head>

      <Header />
      {isPreviewActive !== "" && (
        <PhotoPreview setIsPreviewActive={setIsPreviewActive} />
      )}
      {isDownloadActive !== "" && (
        <DownloadMessage setIsPreviewActive={setIsDownloadActive} />
      )}
      {children}
      <Footer />
    </PhotosContext.Provider>
  );
}

export default Layout;

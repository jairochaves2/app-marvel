import React from "react";
import { getUrlImage } from "../../../../helpers/MarvelApi.helper";
import { useComicDetail } from "../../../../hooks/contexts.hooks";

export default function ComicCover() {
  const { comicsDetail } = useComicDetail();

  return (
    <figure
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "black",
      }}
    >
      <img
        src={getUrlImage(comicsDetail, "portrait_uncanny")}
        className="App-logo"
        alt="logo"
      />
    </figure>
  );
}

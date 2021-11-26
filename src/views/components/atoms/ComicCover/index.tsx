import React from "react";
import { getUrlImage } from "../../../../helpers/MarvelApi.helper";
import { useComicDetail } from "../../../../hooks/contexts.hooks";

export default function ComicCover() {
  const { comicsDetail } = useComicDetail();

  return (
    <figure
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
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

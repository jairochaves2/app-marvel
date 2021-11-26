import { DialogContent, Typography } from "@mui/material";
import React from "react";
import { getUrlImage } from "../../../../helpers/MarvelApi.helper";
import { useComicDetail } from "../../../../hooks/contexts.hooks";

export default function DialogContentComic() {
  const { comicsDetail } = useComicDetail();

  return (
    <DialogContent>
      {comicsDetail && (
        <main
          style={{
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <header style={{ flex: 1 }}>
            <img
              src={getUrlImage(comicsDetail, "portrait_xlarge")}
              className="App-logo"
              alt="logo"
            />
          </header>
          <article style={{ flex: 4 }}>
            <section>
              <Typography variant="h6">{comicsDetail.title}</Typography>
            </section>
          </article>
        </main>
      )}
    </DialogContent>
  );
}

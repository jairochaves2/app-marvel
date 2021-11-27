import { DialogContent, Grid } from "@mui/material";
import React from "react";
import { useComicDetail } from "../../../../hooks/contexts.hooks";
import ComicCover from "../../atoms/ComicCover";
import ComicData from "../ComicData";

export default function DialogContentComic() {
  const { comicsDetail } = useComicDetail();

  return (
    <DialogContent>
      {comicsDetail && (
        <main
          style={{
            display: "flex",
            alignItems: "center",
            flexDirection: "row",
          }}
        >
          <Grid container >
            <Grid item xs={12} md={4}>
              <ComicCover />
            </Grid>
            <Grid item xs={12} md={8}>
              <ComicData />
            </Grid>
          </Grid>
        </main>
      )}
    </DialogContent>
  );
}

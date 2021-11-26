import { Dialog } from "@mui/material";
import React from "react";
import { useComicDetail } from "../../../../hooks/contexts.hooks";
import DialogActionComic from "../../molecules/DialogActionComic";
import DialogContentComic from "../../molecules/DialogContentComic";

export default function DialogDetail() {
  const { comicsDetail, setComicsDetail } = useComicDetail();

  return (
    <Dialog
      fullWidth
      scroll="paper"
      maxWidth="lg"
      onClose={() => {
        setComicsDetail(undefined);
      }}
      open={!!comicsDetail}
      // open={true}
    >
      <DialogContentComic />
      <DialogActionComic />
    </Dialog>
  );
}

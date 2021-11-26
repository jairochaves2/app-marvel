import { Button, DialogActions } from "@mui/material";
import React from "react";
import { useComicDetail } from "../../../../hooks/contexts.hooks";

export default function DialogActionComic() {
  const { setComicsDetail } = useComicDetail();

  return (
    <DialogActions>
      <Button
        color="error"
        onClick={() => {
          setComicsDetail(undefined);
        }}
      >
        Fechar
      </Button>
    </DialogActions>
  );
}

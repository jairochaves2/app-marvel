import { Button, DialogActions } from "@mui/material";
import React from "react";
import { useComicDetail } from "../../../../hooks/contexts.hooks";
import ButtonToggleSelectComic from "../../atoms/Buttons/ButtonToggleSelectComic/inxes";

export default function DialogActionComic() {
  const { setComicsDetail, comicsDetail } = useComicDetail();

  return (
    <DialogActions>
      <ButtonToggleSelectComic comic={comicsDetail} />
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

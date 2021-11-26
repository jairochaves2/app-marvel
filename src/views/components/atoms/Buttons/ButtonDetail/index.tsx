import Button from "@mui/material/Button";
import React from "react";
import { useComicDetail } from "../../../../../hooks/contexts.hooks";
import { Result } from "../../../../../interfaces/MarvelApi.interface";

interface Props {
  comic: Result;
}

export default function ButtonDetail({ comic }: Props) {
  const { setComicsDetail } = useComicDetail();
  return (
    <Button
      onClick={() => {
        setComicsDetail(comic);
      }}
      size="small"
      color="primary"
    >
      Detalhes
    </Button>
  );
}

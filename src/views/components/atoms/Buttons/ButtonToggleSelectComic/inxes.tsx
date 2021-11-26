import Button from "@mui/material/Button";
import React from "react";
import { hasComicInArray } from "../../../../../helpers/MarvelApi.helper";
import { useSelectedComics } from "../../../../../hooks/contexts.hooks";
import { Result } from "../../../../../interfaces/MarvelApi.interface";

interface Props {
  comic: Result | undefined;
}

export default function ButtonToggleSelectComic({ comic }: Props) {
  const { comicsSelect, setComicsSelect } = useSelectedComics();
  return (
    <Button
      onClick={() => {
        if (comic) {
          setComicsSelect({ id: comic.id, title: comic.title });
        }
      }}
      size="small"
      color="success"
      variant="outlined"
    >
      {hasComicInArray(comicsSelect, comic?.id ? comic.id : -1)
        ? "Remover"
        : "Adicionar"}
    </Button>
  );
}

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
  const hasComic = hasComicInArray(comicsSelect, comic?.id ? comic.id : -1);
  return (
    <Button
      onClick={() => {
        if (comic) {
          setComicsSelect({ id: comic.id, title: comic.title });
        }
      }}
      size="small"
      color={hasComic?"warning":"success"}
      variant={hasComic?"outlined":"contained"}
    >
      {hasComic ? "Remover" : "Adicionar"}
    </Button>
  );
}

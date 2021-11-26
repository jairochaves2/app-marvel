import { CardActions } from "@mui/material";
import { lightBlue } from "@mui/material/colors";
import React from "react";
import { hasComicInArray } from "../../../../helpers/MarvelApi.helper";
import { useSelectedComics } from "../../../../hooks/contexts.hooks";
import { Result } from "../../../../interfaces/MarvelApi.interface";
import ButtonDetail from "../../atoms/Buttons/ButtonDetail";
import ButtonToggleSelectComic from "../../atoms/Buttons/ButtonToggleSelectComic/inxes";

interface Props {
  comic: Result;
}
export default function CardActionComic({ comic }: Props) {
  const { comicsSelect } = useSelectedComics();

  return (
    <CardActions
      sx={{
        bgcolor: hasComicInArray(comicsSelect, comic.id)
          ? lightBlue[100]
          : "white",
        display: "flex",
        justifyContent: "space-between",
      }}
      disableSpacing={true}
    >
      <ButtonToggleSelectComic comic={comic} />
      <ButtonDetail comic={comic} />
    </CardActions>
  );
}

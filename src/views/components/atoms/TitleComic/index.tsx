import { Typography } from "@mui/material";
import React from "react";
import { Result } from "../../../../interfaces/MarvelApi.interface";

interface Props {
  comic: Result;
  cut?: boolean;
}

export default function TitleComic({ comic, cut = true }: Props) {
  return (
    <Typography variant="h6">
      {comic.title.length > 20 && cut
        ? `${comic.title.substring(0, 20)}...`
        : comic.title}
    </Typography>
  );
}

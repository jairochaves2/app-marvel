import { Tooltip, Typography } from "@mui/material";
import React from "react";
import { Result } from "../../../../interfaces/MarvelApi.interface";

interface Props {
  comic: Result;
  cut?: boolean;
}

export default function TitleComic({ comic, cut = true }: Props) {
  const isLarge = comic.title.length > 20;
  return (
    <Typography variant="h6">
      {isLarge && cut ? (
        <Tooltip title={comic.title}>
          <span>{`${comic.title.substring(0, 20)}...`}</span>
        </Tooltip>
      ) : (
        comic.title
      )}
    </Typography>
  );
}

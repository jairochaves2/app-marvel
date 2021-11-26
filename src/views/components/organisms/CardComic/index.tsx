import { Card, CardContent, CardMedia, Grid } from "@mui/material";
import { lightBlue } from "@mui/material/colors";
import React from "react";
import {
  getUrlImage,
  hasComicInArray,
} from "../../../../helpers/MarvelApi.helper";
import { useSelectedComics } from "../../../../hooks/contexts.hooks";
import { Result } from "../../../../interfaces/MarvelApi.interface";
import TitleComic from "../../atoms/TitleComic";
import CardActionComic from "../../molecules/CardActionComic";

interface Props {
  comic: Result;
}

const CardComic: React.FC<Props> = ({ comic }) => {
  const { comicsSelect } = useSelectedComics();

  return (
    <Grid item xs={12} sm={6} md={3}>
      <Card>
        <CardMedia
          component="img"
          height="140"
          image={getUrlImage(comic)}
          alt={comic.title}
        />
        <CardContent
          sx={{
            bgcolor: hasComicInArray(comicsSelect, comic.id)
              ? lightBlue[100]
              : "white",
          }}
        >
          <TitleComic comic={comic} />
        </CardContent>
        <CardActionComic comic={comic} />
      </Card>
    </Grid>
  );
};

export default CardComic;

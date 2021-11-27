import { Container, Grid } from "@mui/material";
import React from "react";
import { useLocation } from "react-router";
import { isSendMePage } from "../../../../helpers/MarvelApi.helper";
import {
  useComicList,
  useLoading,
  useSelectedComics,
} from "../../../../hooks/contexts.hooks";

import Loading from "../../atoms/Loading";
import CardComic from "../../organisms/CardComic";
import DialogDetail from "../../organisms/DialogDetail";
import DialogMaps from "../../organisms/DialogMaps";

export default function Main() {
  const { loading } = useLoading();
  const { comics } = useComicList();
  const { comicsSelect } = useSelectedComics();
  const { pathname } = useLocation();

  const isSendMe = isSendMePage(pathname);
  const comicsUse = isSendMe ? comicsSelect : comics;

  return (
    <main className={loading ? "App-Center" : ""}>
      {loading ? (
        <Loading />
      ) : (
        <Container>
          <Grid container spacing={2}>
            {comicsUse?.map((comic) => (
              <CardComic key={comic.id} comic={comic} />
            ))}
          </Grid>
        </Container>
      )}
      <DialogDetail />
      {isSendMe && <DialogMaps />}
    </main>
  );
}

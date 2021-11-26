import { Container, Grid } from "@mui/material";
import React from "react";
import { useComicList, useLoading } from "../../../../hooks/contexts.hooks";

import Loading from "../../atoms/Loading";
import CardComic from "../../organisms/CardComic";
import DialogDetail from "../../organisms/DialogDetail";

export default function Main() {
  const { loading } = useLoading();
  const { comics } = useComicList();

  return (
    <main className={loading ? "App-Center" : ""}>
      {loading ? (
        <Loading />
      ) : (
        <Container>
          <Grid container spacing={2}>
            {comics?.map((comic) => (
              <CardComic comic={comic} />
            ))}
          </Grid>
        </Container>
      )}
      <DialogDetail />
    </main>
  );
}

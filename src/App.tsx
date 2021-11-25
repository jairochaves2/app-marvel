import React from "react";
import {
  AppBar,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  Dialog,
  DialogActions,
  DialogContent,
  Grid,
  Input,
  Toolbar,
  Typography,
} from "@mui/material";
import { getUrlImage } from "./helpers";
import { Data, Result } from "./interfaces";
import MarvelApi from "./services/marvelApi";

function App() {
  const [comics, setComics] = React.useState<Result[]>();
  const [selectedComic, setSelectedComic] = React.useState<Result>();
  const [searchText, setSearchText] = React.useState<string>("");
  const [page, setPage] = React.useState(0);

  React.useEffect(() => {
    MarvelApi.getComics(page).then((res) => {
      const data: Data = res.data;
      setComics(data.results);
    });
  }, [searchText.length === 0, page]); // eslint-disable-line react-hooks/exhaustive-deps
  React.useEffect(() => {
    if (searchText) {
      MarvelApi.getComicsByTitle(searchText, page).then((res) => {
        const data: Data = res.data;
        setComics(data.results);
      });
    }
  }, [searchText, page]);
  return (
    <div className="App">
      <header className="">
        <AppBar position="relative" sx={{ mb: 1 }}>
          <Toolbar sx={{ display: "flex", justifyContent: "center" }}>
            <Grid item xs={12} md={6} lg={4}>
              <Input
                disableUnderline
                sx={{ bgcolor: "white", p: 1, borderRadius: "10px" }}
                placeholder="Buscar"
                fullWidth
                onChange={(event) => {
                  setSearchText(event.target.value);
                }}
              />
            </Grid>
          </Toolbar>
        </AppBar>
      </header>
      <main>
        <Container>
          <Grid container spacing={2}>
            {comics?.map((comic) => (
              <Grid item xs={12} sm={6} md={3}>
                <Card>
                  <CardMedia
                    component="img"
                    height="140"
                    image={getUrlImage(comic)}
                    alt={comic.title}
                  />
                  <CardContent>
                    <Typography variant="h6">
                      {comic.title.length > 20
                        ? `${comic.title.substring(0, 20)}...`
                        : comic.title}
                    </Typography>
                  </CardContent>
                  <CardActions disableSpacing={true}>
                    <Button size="small" color="secondary">
                      Selecionar
                    </Button>
                    <Button
                      onClick={() => {
                        setSelectedComic(comic);
                      }}
                      size="small"
                      color="primary"
                    >
                      Detalhes
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
      <footer className="App-footer"></footer>
      <Dialog
        fullWidth
        scroll="paper"
        maxWidth="lg"
        onClose={() => {
          setSelectedComic(undefined);
        }}
        open={!!selectedComic}
      >
        <DialogContent>
          {selectedComic && (
            <main
              style={{
                display: "flex",
                alignItems: "center",
                flexDirection: "column",
              }}
            >
              <header style={{ flex: 1 }}>
                <img
                  src={getUrlImage(selectedComic, "portrait_xlarge")}
                  className="App-logo"
                  alt="logo"
                />
              </header>
              <article style={{ flex: 4 }}>
                <section>
                  <Typography variant="h6">{selectedComic.title}</Typography>
                </section>
              </article>
            </main>
          )}
        </DialogContent>
        <DialogActions>
          <Button
            color="error"
            onClick={() => {
              setSelectedComic(undefined);
            }}
          >
            Fechar
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default App;

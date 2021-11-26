import React from "react";
import { LocationOn } from "@mui/icons-material";
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
  Hidden,
  Input,
  Pagination,
  Toolbar,
  Typography,
} from "@mui/material";
import { lightBlue } from "@mui/material/colors";
import "./App.css";
import { useComicDetail } from "./contexts/comics/ComicToDetail.context";
import { useSearchText } from "./contexts/comics/SearchText.context";
import { useSelectedComics } from "./contexts/comics/SelectionComics.context";
import { useTotalComics } from "./contexts/comics/TotalComics.context";
import { useLoading } from "./contexts/Loading.context";
import { usePage } from "./contexts/PageSelect.context";
import {
  getQuantidadePaginas,
  getUrlImage,
  hasComicInArray,
} from "./helpers/MarvelApi.helper";
import { Data } from "./interfaces/MarvelApi.interface";
import MarvelApi from "./services/MarvelApi.service";
import { useComicList } from "./contexts/comics/ComicList.context";

function Loading() {
  return <div>{<img src="/loading.gif" alt="Loading" />}</div>;
}
function App() {
  
  const { comics, setComics } = useComicList();
  const { comicsDetail, setComicsDetail } = useComicDetail();
  const { comicsSelect, setComicsSelect } = useSelectedComics();
  const { searchText, setSearchText } = useSearchText();
  const { totalComics, setTotalComics } = useTotalComics();

  const { page, setPage } = usePage();
  const { loading, setLoading } = useLoading();

  React.useEffect(() => {
    setLoading(true);
    MarvelApi.getComics(page)
      .then((res) => {
        const data: Data = res.data;

        setTotalComics(data.total);
        setComics(data.results);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [searchText.length === 0, page]); // eslint-disable-line react-hooks/exhaustive-deps
  React.useEffect(() => {
    console.log("searchText", searchText);
    if (searchText) {
      MarvelApi.getComicsByTitle(searchText, page).then((res) => {
        const data: Data = res.data;
        setTotalComics(data.total);
        setComics(data.results);
      });
    }
  }, [searchText, page]); // eslint-disable-line react-hooks/exhaustive-deps
  return (
    <div className="App">
      <header className="">
        <AppBar position="relative" sx={{ mb: 1 }}>
          <Toolbar
            sx={{
              display: "flex",
              justifyContent: "space-evenly",
              bgcolor: "#dddddd",
            }}
          >
            <Grid
              container
              spacing={1}
              alignItems="center"
              justifyContent="center"
            >
              <Grid item xs={7} sm={9} md={6} lg={4}>
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
              <Hidden xsUp={comicsSelect.length <= 0}>
                <Grid item xs={5} sm={3} md={2}>
                  <Button
                    startIcon={<LocationOn />}
                    fullWidth
                    color="info"
                    variant="outlined"
                  >
                    Envie-me
                  </Button>
                </Grid>
              </Hidden>
            </Grid>
          </Toolbar>
        </AppBar>
      </header>
      <main className={loading ? "App-Center" : ""}>
        {loading ? (
          <Loading />
        ) : (
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
                    <CardContent
                      sx={{
                        bgcolor: hasComicInArray(comicsSelect, comic.id)
                          ? lightBlue[100]
                          : "white",
                      }}
                    >
                      <Typography variant="h6">
                        {comic.title.length > 20
                          ? `${comic.title.substring(0, 20)}...`
                          : comic.title}
                      </Typography>
                    </CardContent>
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
                      <Button
                        onClick={() => {
                          setComicsSelect({ id: comic.id, title: comic.title });
                        }}
                        size="small"
                        color="success"
                        variant="outlined"
                      >
                        {hasComicInArray(comicsSelect, comic.id)
                          ? "Remover"
                          : "Adicionar"}
                      </Button>
                      <Button
                        onClick={() => {
                          setComicsDetail(comic);
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
        )}
      </main>
      {!loading && (
        <footer className="App-footer">
          <Pagination
            sx={{ bgcolor: "white", p: 1, borderRadius: "10px" }}
            count={getQuantidadePaginas(totalComics)}
            color="standard"
            variant="outlined"
            page={page}
            onChange={(_, value) => {
              setPage(value);
            }}
          />
        </footer>
      )}

      <Dialog
        fullWidth
        scroll="paper"
        maxWidth="lg"
        onClose={() => {
          setComicsDetail(undefined);
        }}
        open={!!comicsDetail}
      >
        <DialogContent>
          {comicsDetail && (
            <main
              style={{
                display: "flex",
                alignItems: "center",
                flexDirection: "column",
              }}
            >
              <header style={{ flex: 1 }}>
                <img
                  src={getUrlImage(comicsDetail, "portrait_xlarge")}
                  className="App-logo"
                  alt="logo"
                />
              </header>
              <article style={{ flex: 4 }}>
                <section>
                  <Typography variant="h6">{comicsDetail.title}</Typography>
                </section>
              </article>
            </main>
          )}
        </DialogContent>
        <DialogActions>
          <Button
            color="error"
            onClick={() => {
              setComicsDetail(undefined);
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

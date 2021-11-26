import React from "react";
import {
  useComicList,
  useLoading,
  usePage,
  useSearchText,
  useTotalComics,
} from "../../../hooks/contexts.hooks";
import { Data } from "../../../interfaces/MarvelApi.interface";
import MarvelApiService from "../../../services/MarvelApi.service";
import Footer from "../../components/templates/Footer";
import Header from "../../components/templates/Header";
import Main from "../../components/templates/Main";

export default function Home() {
  const { setLoading } = useLoading();
  const { page } = usePage();
  const { setTotalComics } = useTotalComics();
  const { setComics } = useComicList();
  const { searchText } = useSearchText();

  React.useEffect(() => {
    if (!searchText) {
      setLoading(true);
      MarvelApiService.getComics(page)
        .then((res) => {
          const data: Data = res.data;

          setTotalComics(data.total);
          setComics(data.results);
        })
        .finally(() => {
          setLoading(false);
        });
    }
  }, [searchText.length === 0, page]); // eslint-disable-line react-hooks/exhaustive-deps

  React.useEffect(() => {
    if (searchText) {
      MarvelApiService.getComicsByTitle(searchText, page).then((res) => {
        const data: Data = res.data;
        setTotalComics(data.total);
        setComics(data.results);
      });
    }
  }, [searchText, page]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div className="App">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

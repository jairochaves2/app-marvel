import React from "react";
import ComicToDetailContext from "../../contexts/comics/ComicToDetail.context";
import { Result } from "../../interfaces/MarvelApi.interface";

const ComicToDetailProvider: React.FC = ({ children }) => {
  const [comicsDetail, setComicsDetailState] = React.useState<Result>();
  const setComicsDetail = (comic: Result | undefined) => {
    setComicsDetailState(comic);
  };

  return (
    <ComicToDetailContext.Provider value={{ comicsDetail, setComicsDetail }}>
      {children}
    </ComicToDetailContext.Provider>
  );
};

export default ComicToDetailProvider;

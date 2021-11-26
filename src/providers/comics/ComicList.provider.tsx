import React from "react";
import ComicListContext from "./../../contexts/comics/ComicList.context";
import { Result } from "../../interfaces/MarvelApi.interface";

const ComicListProvider: React.FC = ({ children }) => {
  const [comics, setComicsState] = React.useState<Result[]>();
  const setComics = (comic: Result[]) => {
    setComicsState(comic);
  };

  return (
    <ComicListContext.Provider value={{ comics, setComics }}>
      {children}
    </ComicListContext.Provider>
  );
};

export default ComicListProvider;

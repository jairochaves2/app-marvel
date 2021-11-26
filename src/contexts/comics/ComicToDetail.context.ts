import { createContext, useContext } from "react";
import { ComicToDetailContextType } from "../../interfaces/contexts/comics/ComicToDetail.interface";

const ComicToDetailContext = createContext<ComicToDetailContextType>({
  comicsDetail: undefined,
  setComicsDetail: () => {},
});

export function useComicDetail(): ComicToDetailContextType {
  return useContext(ComicToDetailContext);
}

export default ComicToDetailContext;

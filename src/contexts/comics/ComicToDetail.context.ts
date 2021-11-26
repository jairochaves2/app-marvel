import { createContext } from "react";
import { ComicToDetailContextType } from "../../interfaces/contexts/comics/ComicToDetail.interface";

const ComicToDetailContext = createContext<ComicToDetailContextType>({
  comicsDetail: undefined,
  setComicsDetail: () => {},
});

export default ComicToDetailContext;

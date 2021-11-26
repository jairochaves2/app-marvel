import { createContext, useContext } from "react";
import { ComicListContextType } from "../../interfaces/contexts/comics/ComicList.interface";

const ComicListContext = createContext<ComicListContextType>({
  comics: undefined,
  setComics: () => {},
});

export function useComicList(): ComicListContextType {
  return useContext(ComicListContext);
}

export default ComicListContext;

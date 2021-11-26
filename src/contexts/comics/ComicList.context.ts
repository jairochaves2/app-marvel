import { createContext } from "react";
import { ComicListContextType } from "../../interfaces/contexts/comics/ComicList.interface";

const ComicListContext = createContext<ComicListContextType>({
  comics: undefined,
  setComics: () => {},
});

export default ComicListContext;

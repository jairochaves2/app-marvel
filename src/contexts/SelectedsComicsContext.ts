import { createContext, useContext } from "react";
import { ComicSelectContextType } from "../interfaces/ComicSelect";

const selectedContext = createContext<ComicSelectContextType>({
  comicsSelect: [],
  setComicsSelect: () => {},
});

export function useSelectedComics(): ComicSelectContextType {
  return useContext(selectedContext);
}

export default selectedContext;

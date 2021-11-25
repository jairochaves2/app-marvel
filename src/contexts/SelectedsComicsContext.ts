import { createContext, useContext } from "react";
import { ComicSelectContextType } from "../interfaces/ComicSelect";

const SelectedContext = createContext<ComicSelectContextType>({
  comicsSelect: [],
  setComicsSelect: () => {},
});

export function useSelectedComics(): ComicSelectContextType {
  return useContext(SelectedContext);
}

export default SelectedContext;

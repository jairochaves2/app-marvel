import { createContext, useContext } from "react";
import { ComicSelectContextType } from "../interfaces/ComicSelect.interface";

const SelectionContext = createContext<ComicSelectContextType>({
  comicsSelect: [],
  setComicsSelect: () => {},
});

export function useSelectedComics(): ComicSelectContextType {
  return useContext(SelectionContext);
}

export default SelectionContext;

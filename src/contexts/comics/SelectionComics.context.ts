import { createContext, useContext } from "react";
import { ComicSelectionContextType } from "../../interfaces/contexts/comics/ComicSelection.interface";

const SelectionContext = createContext<ComicSelectionContextType>({
  comicsSelect: [],
  setComicsSelect: () => {},
});

export function useSelectedComics(): ComicSelectionContextType {
  return useContext(SelectionContext);
}

export default SelectionContext;

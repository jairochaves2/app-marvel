import { createContext } from "react";
import { ComicSelectionContextType } from "../../interfaces/contexts/comics/ComicSelection.interface";

const SelectionContext = createContext<ComicSelectionContextType>({
  comicsSelect: [],
  setComicsSelect: () => {},
});

export default SelectionContext;

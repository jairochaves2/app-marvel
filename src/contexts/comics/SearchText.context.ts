import { createContext, useContext } from "react";
import { SearchContextType } from "../../interfaces/contexts/SearchText.interface";

const TotalComicsContext = createContext<SearchContextType>({
  searchText: "",
  setSearchText: () => {},
});

export function useTotalComics(): SearchContextType {
  return useContext(TotalComicsContext);
}

export default TotalComicsContext;

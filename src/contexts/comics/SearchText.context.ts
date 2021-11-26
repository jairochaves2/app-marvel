import { createContext, useContext } from "react";
import { SearchContextType } from "../../interfaces/contexts/SearchText.interface";

const SearchTextContext = createContext<SearchContextType>({
  searchText: "",
  setSearchText: () => {},
});

export function useSearchText(): SearchContextType {
  return useContext(SearchTextContext);
}

export default SearchTextContext;

import { createContext } from "react";
import { SearchContextType } from "../../interfaces/contexts/SearchText.interface";

const SearchTextContext = createContext<SearchContextType>({
  searchText: "",
  setSearchText: () => {},
});

export default SearchTextContext;

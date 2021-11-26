import React from "react";
import SearchTextContext from "../../contexts/comics/SearchText.context";

const SearchTextProvider: React.FC = ({ children }) => {
  const [searchText, setSearchTextState] = React.useState<string>("");
  const setSearchText = (text: string) => {
    setSearchTextState(text);
  };

  return (
    <SearchTextContext.Provider value={{ searchText, setSearchText }}>
      {children}
    </SearchTextContext.Provider>
  );
};

export default SearchTextProvider;

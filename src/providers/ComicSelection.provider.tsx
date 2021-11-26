import React from "react";
import SelectedContext from "../contexts/SelectionComics.context";
import ComicSelect from "../interfaces/contexts/ComicSelection.interface";

const SelectionProvider: React.FC = ({ children }) => {
  const [comicsSelect, setSelectedComics] = React.useState<ComicSelect[]>([]);
  const toggleComics = (comic: any) => {
    const data = comicsSelect;
    data.push(comic);
    setSelectedComics([...data]);
  };

  return (
    <SelectedContext.Provider
      value={{
        comicsSelect,
        setComicsSelect: toggleComics,
      }}
    >
      {children}
    </SelectedContext.Provider>
  );
};

export default SelectionProvider;

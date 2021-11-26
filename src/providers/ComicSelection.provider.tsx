import React from "react";
import SelectedContext from "../contexts/comics/SelectionComics.context";
import ComicSelect from "../interfaces/contexts/ComicSelection.interface";

const SelectionProvider: React.FC = ({ children }) => {
  const [comicsSelect, setSelectedComics] = React.useState<ComicSelect[]>([]);
  const toggleComics = (comic: ComicSelect) => {
    const data = comicsSelect;
    const index = data.findIndex((c) => c.id === comic.id);
    if (index === -1) {
      setSelectedComics([...data, comic]);
    } else {
      const newSelectedComics = [...data];
      newSelectedComics.splice(index, 1);
      setSelectedComics(newSelectedComics);
    }
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

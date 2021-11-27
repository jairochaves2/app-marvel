import React from "react";
import SelectedContext from "../../contexts/comics/SelectionComics.context";
import { Result } from "../../interfaces/MarvelApi.interface";

const SelectionProvider: React.FC = ({ children }) => {
  const [comicsSelect, setSelectedComics] = React.useState<Result[]>([]);
  const toggleComics = (comic: Result | undefined) => {
    if (!comic) {
      return setSelectedComics([]);
    }
    const data = comicsSelect;
    const index = data.findIndex((c) => c.id === comic?.id);
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

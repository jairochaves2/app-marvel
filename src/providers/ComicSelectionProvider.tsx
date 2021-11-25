import React from "react";
import SelectedContext from "../contexts/SelectedsComicsContext";
import ComicSelect from "../interfaces/ComicSelect";

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

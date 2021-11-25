import React from "react";
import SelectedComicsContext from "../contexts/SelectedsComicsContext";
import ComicSelect from "../interfaces/ComicSelect";

const ComicSelectionProvider: React.FC = ({ children }) => {
  const [selectedComics, setSelectedComics] = React.useState<ComicSelect[]>([]);
  //   React.useEffect(() => {
  //     api
  //       .get("produtos")
  //       .then(({ data }) => {
  //         setProducts(camelCase(data));
  //       })
  //       .catch((e) => console.log({ e }));
  //   }, [updateProducts]);

  const changeComic = (comic: ComicSelect) => {
    const index = selectedComics.findIndex((c) => c.id === comic.id);
    if (index === -1) {
      setSelectedComics([...selectedComics, comic]);
    } else {
      const newSelectedComics = [...selectedComics];
      newSelectedComics.splice(index, 1);
      setSelectedComics(newSelectedComics);
    }
  };
  return (
    <SelectedComicsContext.Provider
      value={{ comicsSelect: selectedComics, setComicsSelect: changeComic }}
    >
      {children}
    </SelectedComicsContext.Provider>
  );
};

export default ComicSelectionProvider;

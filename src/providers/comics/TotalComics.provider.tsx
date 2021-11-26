import React from "react";
import TotalComicsContext from "../../contexts/comics/TotalComics.context";

const TotalComicsProvider: React.FC = ({ children }) => {
  const [totalComics, setTotalComicsState] = React.useState<number>(0);
  const setTotalComics = (total: number) => {
    setTotalComicsState(total);
  };

  return (
    <TotalComicsContext.Provider value={{ totalComics, setTotalComics }}>
      {children}
    </TotalComicsContext.Provider>
  );
};

export default TotalComicsProvider;

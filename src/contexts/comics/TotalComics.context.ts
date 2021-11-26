import { createContext } from "react";
import { TotalComicsContextType } from "../../interfaces/contexts/comics/TotalComics.interface";

const TotalComicsContext = createContext<TotalComicsContextType>({
  totalComics: 0,
  setTotalComics: () => {},
});

export default TotalComicsContext;

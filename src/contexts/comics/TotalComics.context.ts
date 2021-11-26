import { createContext, useContext } from "react";
import { TotalComicsContextType } from "../../interfaces/contexts/comics/TotalComics.interface";

const TotalComicsContext = createContext<TotalComicsContextType>({
  totalComics: 0,
  setTotalComics: () => {},
});

export function useTotalComics(): TotalComicsContextType {
  return useContext(TotalComicsContext);
}

export default TotalComicsContext;

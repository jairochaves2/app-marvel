import { Result } from "../../MarvelApi.interface";

// export default interface ComicSelect {
//   id: number;
//   title: string;
// }

export interface ComicSelectionContextType {
  comicsSelect: Result[];
  setComicsSelect: (comic: Result) => void;
}

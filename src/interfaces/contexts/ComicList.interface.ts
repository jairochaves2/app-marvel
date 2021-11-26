import { Result } from "../MarvelApi.interface";

export interface ComicListContextType {
  comics: Result[] | undefined;
  setComics: (comic: Result[]) => void;
}

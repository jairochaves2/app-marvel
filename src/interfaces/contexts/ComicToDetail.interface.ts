import { Result } from "../MarvelApi.interface";

export interface ComicToDetailContextType {
  comicsDetail: Result | undefined;
  setComicsDetail: (comic: Result | undefined) => void;
}

export default interface ComicSelect {
  id: number;
  title: string;
}

export interface ComicSelectionContextType {
  comicsSelect: ComicSelect[];
  setComicsSelect: (comic: ComicSelect) => void;
}

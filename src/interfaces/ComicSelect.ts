export default interface ComicSelect {
  id: number;
  title: string;
}

export interface ComicSelectContextType {
  comicsSelect: ComicSelect[];
  setComicsSelect: (comic: ComicSelect) => void;
  
}

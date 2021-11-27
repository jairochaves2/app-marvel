import { AddressContextType } from './../interfaces/contexts/address/Address.interface';
import { useContext } from "react";
import ComicListContext from "../contexts/comics/ComicList.context";
import ComicToDetailContext from "../contexts/comics/ComicToDetail.context";
import SearchTextContext from "../contexts/comics/SearchText.context";
import SelectionContext from "../contexts/comics/SelectionComics.context";
import TotalComicsContext from "../contexts/comics/TotalComics.context";
import LoadingContext from "../contexts/Loading.context";
import PageSelectContext from "../contexts/PageSelect.context";
import { ComicListContextType } from "../interfaces/contexts/comics/ComicList.interface";
import { ComicSelectionContextType } from "../interfaces/contexts/comics/ComicSelection.interface";
import { ComicToDetailContextType } from "../interfaces/contexts/comics/ComicToDetail.interface";
import { TotalComicsContextType } from "../interfaces/contexts/comics/TotalComics.interface";
import { PageSelectContextType } from "../interfaces/contexts/PageSelect.interface";
import { SearchContextType } from "../interfaces/contexts/SearchText.interface";
import { LoadingContextType } from "../interfaces/Loading.interface";
import AddressContext from '../contexts/address/Address.context';

export function useLoading(): LoadingContextType {
  return useContext(LoadingContext);
}
export function usePage(): PageSelectContextType {
  return useContext(PageSelectContext);
}
export function useComicList(): ComicListContextType {
  return useContext(ComicListContext);
}
export function useComicDetail(): ComicToDetailContextType {
  return useContext(ComicToDetailContext);
}
export function useSearchText(): SearchContextType {
  return useContext(SearchTextContext);
}
export function useSelectedComics(): ComicSelectionContextType {
  return useContext(SelectionContext);
}
export function useTotalComics(): TotalComicsContextType {
  return useContext(TotalComicsContext);
}
export function useAddress(): AddressContextType {
  return useContext(AddressContext);
}

import md5 from "md5";
import { Result } from "../interfaces/marvel";
import { HashMarvel } from "../interfaces/hash";
import { ImagesVariants } from "../types";
import { ITEMS_PER_PAGE } from "../services/marvelApi";
import ComicSelect from "../interfaces/ComicSelect";

export function getUrlImage(
  comic: Result,
  type: ImagesVariants = "standard_fantastic"
): string {
  return `${comic.thumbnail.path}/${type}.${comic.thumbnail.extension}`;
}

export function getHashTsApiKey(): HashMarvel {
  const ts = Date.now();
  const apiKey = process.env.REACT_APP_MARVEL_PUBLIC_KEY;
  const hash = md5(`${ts}${process.env.REACT_APP_MARVEL_PRIVATE_KEY}${apiKey}`);
  return { ts, hash };
}
export function getOffset(page: number, itemsPerPage: number): number {
  const offset = (page - 1) * itemsPerPage;
  return offset < 0 ? 0 : offset;
}
export function getQuantidadePaginas(totalItems: number): number {
  if (totalItems <= 0) {
    return 1;
  }
  const quantidadePaginas = Math.ceil(totalItems / ITEMS_PER_PAGE);
  return quantidadePaginas;
}
export function hasComicInArray(comics: ComicSelect[], id: number): boolean {
  return comics.some((someComic) => someComic.id === id);
}

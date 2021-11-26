import md5 from "md5";
import { Result } from "../interfaces/MarvelApi.interface";
import { HashMarvel } from "../interfaces/Hash.interface";
import { ImagesVariants } from "../types/ImagesVariants.type";
import { ITEMS_PER_PAGE } from "../services/MarvelApi.service";
import ComicSelect from "../interfaces/contexts/ComicSelection.interface";

/**
 *
 * @param comic Quadrinho do qual se quer a url da imagem
 * @param type  Define o tipo de imagem que se quer, de acordo com as variações de portrait, standard, landscape
 * @returns Retorna a url da imagem baseado no comic thumbnail path e extension
 */
export function getUrlImage(
  comic: Result,
  type: ImagesVariants = "standard_fantastic"
): string {
  return `${comic.thumbnail.path}/${type}.${comic.thumbnail.extension}`;
}

/**
 *
 * @returns Retorna o hash e timestamp para acesso a API
 */
export function getHashTsApiKey(): HashMarvel {
  const ts = Date.now();
  const apiKey = process.env.REACT_APP_MARVEL_PUBLIC_KEY;
  const hash = md5(`${ts}${process.env.REACT_APP_MARVEL_PRIVATE_KEY}${apiKey}`);
  return { ts, hash };
}

/**
 *
 * @param page pagina a qual se quer acessar
 * @param itemsPerPage quantidade de itens por pagina
 * @returns retorna o offset para a paginação
 */
export function getOffset(page: number, itemsPerPage: number): number {
  const offset = (page - 1) * itemsPerPage;
  return offset < 0 ? 0 : offset;
}

/**
 *
 * @param totalItems quantidade total de quadrinhos
 * @returns retorna a quantidade de páginas
 */
export function getQuantidadePaginas(totalItems: number): number {
  if (totalItems <= 0) {
    return 1;
  }
  const quantidadePaginas = Math.ceil(totalItems / ITEMS_PER_PAGE);
  return quantidadePaginas;
}

/**
 *
 * @param comics lista de quadrinhos
 * @param id id do quadrinho que se quer buscar
 * @returns se o quadrinho existe na lista retorna true, caso contrário retorna false
 */
export function hasComicInArray(comics: ComicSelect[], id: number): boolean {
  return comics.some((someComic) => someComic.id === id);
}

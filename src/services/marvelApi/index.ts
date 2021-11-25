import axios from "axios";
import md5 from "md5";
import { getHashTsApiKey, getOffset } from "../../helpers";
import { RootObject } from "../../interfaces";

const api = axios.create({
  baseURL: "https://gateway.marvel.com/v1/public/",
});
const ITEMS_PER_PAGE = 2;

export default class MarvelApi {
  public static async getComics(page: number): Promise<any> {
    const { hash, ts } = getHashTsApiKey();
    const offset = getOffset(page, ITEMS_PER_PAGE);
    return api
      .get("comics", {
        params: {
          offset,
          limit: ITEMS_PER_PAGE,
          apikey: process.env.REACT_APP_MARVEL_PUBLIC_KEY,
          ts,
          hash,
        },
      })
      .then((res) => {
        const data: RootObject = res.data;

        return data;
      });
  }
  public static async getComicsByTitle(
    title: string = "",
    page: number
  ): Promise<any> {
    const { hash, ts } = getHashTsApiKey();
    const offset = getOffset(page, ITEMS_PER_PAGE);
    return api
      .get("comics", {
        params: {
          offset,
          limit: ITEMS_PER_PAGE,
          apikey: process.env.REACT_APP_MARVEL_PUBLIC_KEY,
          ts,
          hash,
          titleStartsWith: title,
        },
      })
      .then((res) => {
        const data: RootObject = res.data;
        return data;
      });
  }
}

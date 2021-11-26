import { createContext, useContext } from "react";
import { PageSelectContextType } from "../interfaces/contexts/PageSelect.interface";

const PageSelectContext = createContext<PageSelectContextType>({
  page: 1,
  setPage: () => {},
});

export function usePage(): PageSelectContextType {
  return useContext(PageSelectContext);
}

export default PageSelectContext;

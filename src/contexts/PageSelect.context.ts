import { createContext } from "react";
import { PageSelectContextType } from "../interfaces/contexts/PageSelect.interface";

const PageSelectContext = createContext<PageSelectContextType>({
  page: 1,
  setPage: () => {},
});

export default PageSelectContext;

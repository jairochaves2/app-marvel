import { createContext, useContext } from "react";
import { LoadingContextType } from "../interfaces/Loading.interface";

const LoadingContext = createContext<LoadingContextType>({
  loading: false,
  setLoading: () => {},
});

export function useLoading(): LoadingContextType {
  return useContext(LoadingContext);
}

export default LoadingContext;

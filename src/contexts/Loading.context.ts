import { createContext } from "react";
import { LoadingContextType } from "../interfaces/Loading.interface";

const LoadingContext = createContext<LoadingContextType>({
  loading: false,
  setLoading: () => {},
});

export default LoadingContext;

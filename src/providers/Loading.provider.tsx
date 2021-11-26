import React from "react";
import LoadingContext from "../contexts/Loading.context";

const LoadingProvider: React.FC = ({ children }) => {
  const [loading, setLoadingState] = React.useState<boolean>(false);
  const setLoading = (loadingValue: boolean) => {
    setLoadingState(loadingValue);
  };

  return (
    <LoadingContext.Provider value={{ loading, setLoading }}>
      {children}
    </LoadingContext.Provider>
  );
};

export default LoadingProvider;

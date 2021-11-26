import React from "react";
import PageSelectContext from "../contexts/PageSelect.context";

const PageSelectProvider: React.FC = ({ children }) => {
  const [page, setPageState] = React.useState<number>(1);
  const setPage = (page: number) => {
    setPageState(page);
  };

  return (
    <PageSelectContext.Provider value={{ page, setPage }}>
      {children}
    </PageSelectContext.Provider>
  );
};

export default PageSelectProvider;

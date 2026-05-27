import { createContext, useState } from "react";

/* CREATE CONTEXT */
export const PageContext = createContext({
  page: "Home",
  setPage: () => {},
});

/* PROVIDER COMPONENT */
function PageContextProvider({ children }) {
  const [page, setPage] = useState("Home");

  return (
    <PageContext.Provider value={{ page, setPage }}>
      {children}
    </PageContext.Provider>
  );
}

export default PageContextProvider;

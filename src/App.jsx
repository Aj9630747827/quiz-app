import { useContext } from "react";
import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import PageContextProvider, { PageContext } from "./store/PageContextProvider";
import MainPage from "./components/MainPage";

function App() {
  return (
    <>
      <PageContextProvider>
        <Header />
        <MainPage />
      </PageContextProvider>
    </>
  );
}

export default App;

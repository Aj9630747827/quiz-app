import { useContext } from "react";
import { PageContext } from "../store/PageContextProvider";
import Home from "./Home";
import QuizPage from "./QuizPage";

function MainPage() {
  const { page } = useContext(PageContext);
  return <div>{page == "Home" ? <Home /> : <QuizPage />}</div>;
}
export default MainPage;

import { useContext } from "react";
import { PageContext } from "../store/PageContextProvider";
import Home from "./Home";
import QuizPage from "./QuizPage";
import ScoreContextProvider from "../store/ScoreContextProvider";
import ScorePage from "./ScorePage";

function MainPage() {
  const { page } = useContext(PageContext);
  return (
    <ScoreContextProvider>
      <div>
        {page == "Home" ? (
          <Home />
        ) : page === "Score" ? (
          <ScorePage />
        ) : (
          <QuizPage />
        )}
      </div>
    </ScoreContextProvider>
  );
}
export default MainPage;

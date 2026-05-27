import { useContext } from "react";
import { ScoreContext } from "../store/ScoreContextProvider";
import { PageContext } from "../store/PageContextProvider";

function ScorePage() {
  const { score, setScore } = useContext(ScoreContext);
  const { page, setPage } = useContext(PageContext);

  //   console.log(score);
  function handleSubmit() {
    setScore(0);
    setPage("Quiz");
  }
  return (
    <>
      <div class="bg-dark text-secondary px-4 py-5 text-center mt-5 d-flex justify-content-center align-items-center custom-scorepage">
        {" "}
        <div class="py-5">
          {" "}
          <h1 class="display-5 fw-bold text-white">
            Your Final Score is: {score}🎉🎉
          </h1>{" "}
          <div class="col-lg-6 mx-auto">
            {" "}
            <p class="fs-5 mb-4">Thank You for taking quiz</p>{" "}
            <div class="d-grid gap-2 d-sm-flex justify-content-sm-center">
              {" "}
              <button
                type="button"
                class="btn btn-outline-light btn-lg px-4 retake-btn"
                onClick={handleSubmit}
              >
                Retake Quiz
              </button>{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
      </div>
    </>
  );
}
export default ScorePage;

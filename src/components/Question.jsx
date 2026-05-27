import { useEffect, useState } from "react";

function Question({ questionList, index, score, setScore }) {
  const [selectedOption, setSelectedOption] = useState(null);

  const currentQuestion = questionList[index];

  /* RESET SELECTED OPTION WHEN QUESTION CHANGES */
  useEffect(() => {
    setSelectedOption(null);
  }, [index]);

  /* HANDLE OPTION CLICK */
  function handleOptionClick(option) {
    // Prevent multiple clicks
    if (option === currentQuestion.answer) {
      setScore(score + 1);
    } else {
      setScore(Math.max(0, score - 1));
    }
    if (selectedOption) return;

    setSelectedOption(option);
  }

  /* BUTTON COLOR LOGIC */
  function getButtonClass(option) {
    let classes = "btn btn-outline-light btn-lg w-100 option-btn";

    // No option selected yet
    if (!selectedOption) {
      return classes;
    }

    // Correct answer becomes green
    if (option === currentQuestion.answer) {
      return "btn btn-success btn-lg w-100 option-btn";
    }

    // Wrong selected option becomes red
    if (
      option === selectedOption &&
      selectedOption !== currentQuestion.answer
    ) {
      return "btn btn-danger btn-lg w-100 option-btn";
    }

    return classes;
  }

  return (
    <div className="d-flex justify-content-center align-items-center custom-question">
      <div className="px-4 pt-3 my-5 text-center d-flex flex-column align-items-center w-100 justify-content-center min-vw-100">
        {/* QUESTION NUMBER */}
        <h1 className="display-4 fw-bold text-light mb-4">Q{index + 1}</h1>

        <div className="col-lg-6 mx-auto">
          {/* QUESTION */}
          <p className="lead mb-5 text-light fw-semibold">
            {currentQuestion.question}
          </p>

          {/* OPTIONS */}
          <div className="container text-center">
            {/* ROW 1 */}
            <div className="row g-3">
              <div className="col-md-6">
                <button
                  type="button"
                  className={getButtonClass(currentQuestion.options[0])}
                  onClick={() => handleOptionClick(currentQuestion.options[0])}
                >
                  {currentQuestion.options[0]}
                </button>
              </div>

              <div className="col-md-6">
                <button
                  type="button"
                  className={getButtonClass(currentQuestion.options[1])}
                  onClick={() => handleOptionClick(currentQuestion.options[1])}
                >
                  {currentQuestion.options[1]}
                </button>
              </div>
            </div>

            {/* ROW 2 */}
            <div className="row g-3 mt-1">
              <div className="col-md-6">
                <button
                  type="button"
                  className={getButtonClass(currentQuestion.options[2])}
                  onClick={() => handleOptionClick(currentQuestion.options[2])}
                >
                  {currentQuestion.options[2]}
                </button>
              </div>

              <div className="col-md-6">
                <button
                  type="button"
                  className={getButtonClass(currentQuestion.options[3])}
                  onClick={() => handleOptionClick(currentQuestion.options[3])}
                >
                  {currentQuestion.options[3]}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Question;

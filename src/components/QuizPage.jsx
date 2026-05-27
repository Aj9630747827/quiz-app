import { useContext, useState } from "react";
import Question from "./Question";
import { ScoreContext } from "../store/ScoreContextProvider";
import { PageContext } from "../store/PageContextProvider";

function QuizPage() {
  const { page, setPage } = useContext(PageContext);
  const questionList = [
    {
      question: "What is the capital city of Australia?",
      options: ["Sydney", "Melbourne", "Canberra", "Perth"],
      answer: "Canberra",
      index: 0,
    },
    {
      question: "Who is known as the Father of Computers?",
      options: ["Alan Turing", "Charles Babbage", "Bill Gates", "Steve Jobs"],
      answer: "Charles Babbage",
      index: 1,
    },
    {
      question: "Which planet is called the Red Planet?",
      options: ["Earth", "Mars", "Jupiter", "Venus"],
      answer: "Mars",
      index: 2,
    },
    {
      question: "Which country won the FIFA World Cup 2022?",
      options: ["Brazil", "France", "Argentina", "Germany"],
      answer: "Argentina",
      index: 3,
    },
    {
      question: "What is the chemical symbol for Gold?",
      options: ["Ag", "Au", "Gd", "Go"],
      answer: "Au",
      index: 4,
    },
    {
      question: "Who wrote the national anthem of India?",
      options: [
        "Mahatma Gandhi",
        "Rabindranath Tagore",
        "Subhash Chandra Bose",
        "Bankim Chandra Chatterjee",
      ],
      answer: "Rabindranath Tagore",
      index: 5,
    },
    {
      question: "Which is the largest ocean on Earth?",
      options: [
        "Indian Ocean",
        "Atlantic Ocean",
        "Pacific Ocean",
        "Arctic Ocean",
      ],
      answer: "Pacific Ocean",
      index: 6,
    },
    {
      question: "Which gas do plants absorb from the atmosphere?",
      options: ["Oxygen", "Nitrogen", "Carbon Dioxide", "Hydrogen"],
      answer: "Carbon Dioxide",
      index: 7,
    },
    {
      question: "Who invented the telephone?",
      options: [
        "Thomas Edison",
        "Alexander Graham Bell",
        "Nikola Tesla",
        "Isaac Newton",
      ],
      answer: "Alexander Graham Bell",
      index: 8,
    },
    {
      question: "Which is the smallest continent in the world?",
      options: ["Europe", "Australia", "Antarctica", "South America"],
      answer: "Australia",
      index: 9,
    },
  ];
  const [index, setIndex] = useState(0);
  const { score, setScore } = useContext(ScoreContext);
  // const [score, setScore] = useState(0);
  function handleNext() {
    if (index > 9) return;
    setIndex(index + 1);
  }
  // function handlePrev() {
  //   if (index < 1) return;
  //   setIndex(index - 1);
  // }
  function handleSubmit() {
    setPage("Score");
    setIndex(0);
  }
  return (
    <>
      <h1 className="display-4 fw-bold text-light mb-4 d-flex justify-content-center py-5">
        Score: {score}
      </h1>
      <div className="custom-quizpage">
        <Question
          questionList={questionList}
          index={index}
          setIndex={setIndex}
        />
      </div>
      <div className="container text-center mt-5">
        <div className="row">
          <div className="col">
            {index < 9 ? (
              <button
                type="button"
                className={`btn btn-primary btn-lg w-100 ${index === 9 ? "disabled" : ""}`}
                onClick={handleNext}
              >
                NEXT
              </button>
            ) : (
              <button
                type="button"
                className={"btn btn-success btn-lg w-100"}
                onClick={handleSubmit}
              >
                Submit
              </button>
            )}
          </div>

          {/* <div className="col">
            <button
              type="button"
              className={`btn btn-secondary btn-lg w-100 ${index === 0 ? "disabled" : ""}`}
              onClick={handlePrev}
            >
              PREV
            </button>
          </div> */}
        </div>
      </div>
    </>
  );
}
export default QuizPage;

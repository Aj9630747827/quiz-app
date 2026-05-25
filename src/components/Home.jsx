import logo from "../assets/logo.png";
function Home() {
  return (
    <>
      <div class="px-4 text-center custom-hero">
        {" "}
        <img
          class="d-block mx-auto mb-4"
          src={logo}
          alt="Logo"
          width="220"
          height="180"
        />{" "}
        <h1 class="display-5 fw-bold text-color-light mb-4">
          {" "}
          General Knowledge Quiz Application
        </h1>{" "}
        <div class="col-lg-6 mx-auto">
          {" "}
          <p class="lead mb-4">
            Welcome to the General Knowledge Quiz Application — a fun,
            interactive, and educational platform designed to test and improve
            your knowledge across a wide variety of subjects. This quiz
            application is created for learners, students, competitive exam
            aspirants, and anyone who enjoys solving interesting questions and
            challenging their thinking abilities. The application contains
            carefully selected multiple-choice questions from different
            categories such as science, history, geography, sports, technology,
            entertainment, literature, politics, and current affairs. The main
            purpose of this quiz platform is not only entertainment but also
            learning and self-improvement. Whether you want to practice daily,
            compete with friends, improve your memory, or prepare for
            examinations, this quiz application provides an engaging environment
            where learning becomes enjoyable.
          </p>{" "}
          <div class="d-grid gap-2 d-sm-flex justify-content-sm-center">
            {" "}
            <button
              type="button"
              class="btn btn-success btn-lg px-4 gap-3 custom-btn"
            >
              Start Quiz
            </button>{" "}
          </div>{" "}
        </div>{" "}
      </div>
    </>
  );
}
export default Home;

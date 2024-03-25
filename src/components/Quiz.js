import { useState } from "react";
import './Quiz.css'
import QuizData from "./data/Quizdata";
function Quiz() {
  const [activequestion, setactivequestion] = useState(0);
  const [correctanswer, setcorrectanswer] = useState(0);
  const [selectedanswer, setselectedanswer] = useState([]);
  const { questions } = QuizData;
  function handlenextquestion() {
    if (!selectedanswer[activequestion]) {
      alert("Please select an answer.");
    } else {
      setactivequestion((prev) => prev + 1);
    }
  }
  function handlepreviousquestion() {
    setactivequestion((prev) => prev - 1);
  }
  function changehandler(choice) {
    setselectedanswer(prevanswer=>{
      const updatedAnswers = [...prevanswer];
      updatedAnswers[activequestion] = choice;
      return updatedAnswers;
    });  
    if (choice === questions[activequestion].correctAnswer) {
      setcorrectanswer((prev) => prev + 1);
    }
  }
  return (
    <div className="quiz">
      <h1>Quiz</h1>
      <div>
        <p> {activequestion<questions.length?`Question Number ${activequestion + 1}`:``} </p>
        <p>{`Total questions ${QuizData.totalQuestions}`}</p>
        {activequestion < questions.length && (
          <div className="question-answer">
            <h3 className="questions">{questions[activequestion].question}</h3>
            <div className="choice">
              {questions[activequestion].choices.map((choice, index) => (
                <div key={index} className="choices">
                  <input
                    type="radio"
                    value={choice}
                    name="choices"
                    id={`choice${index}`}
                    checked={selectedanswer[activequestion] === choice}
                    onChange={() => changehandler(choice)}
                  />
                  <label htmlFor={`choice${index}`}>{choice}</label>
                </div>
              ))}
            </div>
            <div className="buttons">
              {activequestion > 0 && (
                <button className="button" onClick={handlepreviousquestion}>
                  Previous question
                </button>
              )}
              <button onClick={handlenextquestion} className="button">
                {activequestion === questions.length - 1
                  ? "Submit Quiz"
                  : "Next Question"}
              </button>
            </div>
          </div>
        )}

        {activequestion === questions.length && (
          <div>
            <p>{`Your score is ${correctanswer*QuizData.perQuestionScore}`}</p>
          </div>
        )}
      </div>
    </div>
  );
}
export default Quiz;

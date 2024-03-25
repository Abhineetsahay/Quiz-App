import './Startquiz.css'
import { useState } from "react";
import Quiz from "./Quiz";
function Startquiz(){
 const[startquiz,setstartquiz]=useState(false);
 function quizhandler(){
          setstartquiz(true);
 }
 return (
          <div className='starting-quiz'>
                    {
                              startquiz&&(
                                        <Quiz/>
                              )
                    }
                    <button onClick={quizhandler} className={startquiz?`startquiz`:`startquizstyling`}>Start Quiz</button>
          </div>
 )
}
export default Startquiz;
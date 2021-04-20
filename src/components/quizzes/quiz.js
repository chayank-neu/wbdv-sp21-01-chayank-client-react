import React, {useState, useEffect} from "react";
import {useParams} from 'react-router-dom'
import Question from "./questions/question";
import api from "../../services/questions-service"
import quizApi from "../../services/quiz-service"

const submit=(quizId,questions,setGrade)=>{
    quizApi.submitQuiz(quizId,questions)
        .then(p=>
            {
                setGrade(p.score)
            }
        )


}
const Quiz = () => {
    const {courseId, quizId} = useParams();
    const [questions, setQuestions] = useState([]);
    const [grade,setGrade]=useState(null);
    useEffect(() => {
       api.findQuestionsForQuiz(quizId)
            .then(questions => setQuestions(questions))
    },[])

    return(
        <div>
            <h2>Quiz {quizId}</h2>
            <h2>Grade: {grade}</h2>
            <h5>Refresh for re-attempt</h5>
            <ul>
                {
                    questions.map(question =>
                        <li>
                            <Question question={question}
                            />
                        </li>
                    )
                }

            </ul>
            <div className="card">
                <div className="card-body text-center">

                    <button className="btn btn-success " onClick={()=>{
                        if(questions.find(q=>q.answer === undefined)){
                            alert("enter all answers")
                            return
                        }else{

                            submit(quizId,questions,setGrade)

                        }
                    }}>Submit</button>

                </div>
            </div>
        </div>
    );
}

export default Quiz;
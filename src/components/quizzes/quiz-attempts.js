import React, {useState, useEffect} from "react";
import {Link, useParams} from "react-router-dom";
import api from "../../services/quiz-service"

const AttemptList = () => {
    const {quizId} = useParams();
    const [quiz,setQuiz]=useState(null)
    const [attempts, setAttempts] = useState([])
    useEffect(() => {
        if(quizId === undefined)
        {

        }else{
            api.findAllAttemptsForQuiz(quizId)
                .then(a=>{
                    console.log(a)
                    setAttempts(a)})
        }

    }, [])
    return(
        <div>
            <h2>Attempts for quiz {quizId}- </h2>
            <ol className="list-group list-group-numbered">
                {
                    attempts.map( a => {
                        return(
                            <li className="list-group-item" key={quizId}>
                                <div className="row">

                                    <div className="col-4">
                                        Attempt
                                    </div>


                                    <div className="col-4 ">
                                        Score: {a.score}

                                    </div>
                                </div>


                            </li>

                        )
                    })
                }
            </ol>
        </div>
    )
}

export default AttemptList;
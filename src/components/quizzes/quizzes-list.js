import React, {useState, useEffect} from "react";
import {Link, useParams} from "react-router-dom";
import api from "../../services/quiz-service"

const QuizzesList = () => {
    const {courseId} = useParams();
    const [quizzes, setQuizzes] = useState([])
    useEffect(() => {
        api.findAllQuizzes()
            .then((quizzes) => {
                setQuizzes(quizzes)
            })
    }, [])
    return(
        <div>
            <h2>Quizzes</h2>
            <div className="list-group">
                {
                    quizzes.map((quiz) => {
                        return(
                            <li className="list-group-item" key={quiz._id}>
                                <Link
                                    to={`/courses/${courseId}/quizzes/${quiz._id}`}
                                     key={quiz._id}>
                                    {quiz.title}
                                </Link>

                                <div className="float-right">
                                    <Link

                                        to={`/courses/${courseId}/quizzes/${quiz._id}`}

                                        className="btn btn-primary " key={quiz._id}>
                                        Start
                                    </Link>

                                 </div>


                            </li>

                        )
                    })
                }
            </div>
        </div>
    )
}

export default QuizzesList;
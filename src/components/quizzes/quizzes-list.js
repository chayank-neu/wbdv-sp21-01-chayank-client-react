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
                                <div className="row">

                                <div className="col-4">
                                    <Link
                                        to={`/courses/${courseId}/quizzes/${quiz._id}`}
                                        key={quiz._id}>
                                        {quiz.title}
                                    </Link>
                                </div>


                                <div className="col-4">

                                    <Link
                                        to={`/quizzes/${quiz._id}/attempts`}>
                                        All Attempts for {quiz.title}
                                    </Link>

                                </div>

                                <div className="col-4 ">
                                    <Link

                                        to={`/courses/${courseId}/quizzes/${quiz._id}`}

                                        className="btn btn-primary float-right" key={quiz._id}>
                                        Start
                                    </Link>

                                 </div>
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
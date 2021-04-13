import React, {useState} from "react";

const MultipleChoiceQuestion = ({question}) => {
    const [answer, setAnswer] = useState('')
    const [correct, setCorrect] = useState(false)
    const [showAnswers, setShowAnswers] = useState(false)
    return(
        <div>
            <h3>{question.question}
                {
                    showAnswers&&
                    (
                        question.correct === answer?<i  className="fas fa-check float-right"></i>:<i  className="fas fa-times float-right"></i>
                    )
                }

                {
                    correct&&
                    (
                        question.correct === answer?<i  className="fas fa-check float-right"></i>:<i  className="fas fa-times float-right"></i>
                    )
                }
            </h3>
            {/*{question.correct}*/}
            <br/>
            <ul className="list-group">

                {
                    question.choices.map((choice) => {
                        return(
                            <li className={`list-group-item 
                                ${ showAnswers &&
                            (question.correct===choice?'list-group-item-success':
                                answer===choice?'list-group-item-danger':'')
                                } ${ correct &&
                                     (question.correct === choice?'list-group-item-success':'')
                                }
                                `}

                                key={question._id}>

                                <label>
                                    <input type="radio"
                                           onClick={() => setAnswer(choice)}
                                           name={question._id}/>
                                    &nbsp; &nbsp; {choice}
                                </label>

                                {
                                    showAnswers&&
                                    (question.correct  === choice?
                                        <i  className="fas fa-check float-right"></i>:
                                        answer===choice?<i  className="fas fa-times float-right"></i>:'')
                                }

                                {
                                    correct &&
                                    (question.correct === choice?<i  className="fas fa-check float-right"></i>:'')
                                }
                            </li>

                        )
                    })
                }
            </ul>
            <br/>
            Your Answer: {answer}
            <br/>
            <br/>
            <button className="btn btn-success"
            onClick={
                ()=> {

                    if(answer === question.correct)
                    {
                        setCorrect(true)
                        setShowAnswers(false)
                    }else{

                        setCorrect(false)
                        setShowAnswers(true)
                    }

                }
            }>Grade</button>

        </div>
    )
}

export default MultipleChoiceQuestion;
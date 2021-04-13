import React from "react";
import TrueFalseQuestion from "./true-false-question";
import MultipleChoiceQuestion from "./multiple-choice-question";

const Question = ({question}) => {
    return(

        <div className="card">
                <div className="card-body">
                    <div>
                        {
                            question.type === "TRUE_FALSE" &&
                            <TrueFalseQuestion
                                question={question}/>
                        }
                        {
                            question.type === "MULTIPLE_CHOICE" &&
                            <MultipleChoiceQuestion
                                question={question}/>
                        }
                    </div>
                </div>
        </div>

    )
}

export default Question;
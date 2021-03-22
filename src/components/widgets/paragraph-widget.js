import React, {useState, useEffect} from 'react'
import {Link} from "react-router-dom";

const ParagraphWidget = (
    {
        widget,
        deleteWidget,
        updateWidget,
        topicId
    }) =>
{


    const [editing, setEditing] = useState(false)
    const [cachedWidget, setCahedWidget] = useState(widget)
    return (
        <>
            {
                !editing &&
                <>
                    <div className="mb-3 row">
                        <div className="col-9">
                            <p>
                                {widget.text}
                            </p>
                        </div>
                        <div className="col-3">
                            <i onClick={() => setEditing(true)} className="fas fa-cog float-right"></i>
                        </div>

                    </div>
                </>
            }
            {
                editing &&
                <>
                    <div className=" mb-3 row">
                        <div className="col-9">
                            <select className="form-control"
                                    onChange={(e) =>
                                        setCahedWidget({
                                            ...cachedWidget,
                                            type: e.target.value
                                        })}
                                    value={cachedWidget.type} >
                                <option value={"HEADING"}>Heading</option>
                                <option value={"PARAGRAPH"}>Paragraph</option>
                            </select>
                        </div>

                        <div className="col-3">
                            <i onClick={() => deleteWidget(widget, topicId)} className="fas fa-trash float-right"></i>
                            <i onClick={() => {
                                setEditing(false)
                                updateWidget(cachedWidget)
                            }} className="fas fa-check float-right fmargin"></i>
                        </div>

                    </div>
                    <div className=" mb-3 row">
                        <div className="col-9">
                            <textarea
                                onChange={(e) =>
                                    setCahedWidget({
                                        ...cachedWidget,
                                        text: e.target.value
                                    })}
                                value={cachedWidget.text}
                                className="form-control"></textarea>
                        </div>
                    </div>
                </>
            }
        </>
    )
}

export default ParagraphWidget
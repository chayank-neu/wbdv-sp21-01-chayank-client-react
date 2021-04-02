import React, {useState} from 'react'
import {Link} from "react-router-dom";


const ListWidget = (
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
                            {
                                (widget.widgetOrder === 1)&&
                                <ol>
                                    {
                                        widget.text.split("\n").map(item => {
                                            return(
                                                <li>{item}</li>
                                            )
                                        })
                                    }
                                </ol>
                            }
                            {
                                !(widget.widgetOrder === 1) &&
                                <ul>
                                    {
                                        widget.text.split("\n").map(item => {
                                            return(
                                                <li>{item}</li>
                                            )
                                        })
                                    }
                                </ul>
                            }
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
                                <option value={"LIST"}>List</option>
                                <option value={"IMAGE"}>Image</option>
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
                            <input type="checkbox"
                                   onChange={(e) =>
                                   {
                                       setCahedWidget({
                                           ...cachedWidget,
                                           widgetOrder: (e.target.checked)? 1:0
                                       });
                                       let x=e.target.value;

                                   }}
                                   checked={ (cachedWidget.widgetOrder === 1)}/> Ordered
                        </div>
                    </div>
                    <div className=" mb-3 row">
                        <div className="col-9">
                            <textarea
                                rows={10}
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

export default ListWidget




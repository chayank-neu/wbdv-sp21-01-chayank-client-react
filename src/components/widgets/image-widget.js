import React, {useState} from 'react'
import {Link} from "react-router-dom";

const ImageWidget = (
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
                    <div className="row">
                        <div className="col-9">
                            <img
                                src={widget.url}
                                width={widget.width}
                                height={widget.height}
                            />
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
                    <div className="mb-3 row">
                        <div className="col-9">
                            <label> Image URL</label>

                            <input
                                id="url"
                                className="form-control"
                                onChange={(e) =>
                                    setCahedWidget({
                                        ...cachedWidget,
                                        url: e.target.value
                                    })}
                                value={cachedWidget.url}
                            placeholder="Image URL"/>
                        </div>

                    </div>

                    <div className="mb-3 row">
                        <div className="col-9">
                            <label> Image Width</label>
                            <input
                                className="form-control"
                                onChange={(e) =>
                                    setCahedWidget({
                                        ...cachedWidget,
                                        width: e.target.value
                                    })}
                                value={cachedWidget.width}
                                placeholder="Image width"/>
                        </div>

                    </div>

                    <div className="mb-3 row">
                        <div className="col-9">
                            <label> Image Height</label>
                            <input
                                className="form-control"
                                onChange={(e) =>
                                    setCahedWidget({
                                        ...cachedWidget,
                                        height: e.target.value
                                    })}
                                value={cachedWidget.height}
                                placeholder="Image height"/>
                        </div>

                    </div>




                </>
            }
        </>
    )
}



export default ImageWidget
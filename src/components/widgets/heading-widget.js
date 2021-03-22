import React, {useState} from 'react'
import {Link} from "react-router-dom";

const HeadingWidget = (
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
                            { widget.size ===1 && <h1>{widget.text}</h1>}
                            { widget.size ===2 && <h2>{widget.text}</h2>}
                            { widget.size ===3 && <h3>{widget.text}</h3>}
                            { widget.size ===4 && <h4>{widget.text}</h4>}
                            { widget.size ===5 && <h5>{widget.text}</h5>}
                            { widget.size ===6 && <h6>{widget.text}</h6>}
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
                    <div className="mb-3 row">
                        <div className="col-9">
                            <input
                                className="form-control"
                                onChange={(e) =>
                                    setCahedWidget({
                                        ...cachedWidget,
                                        text: e.target.value
                                    })}
                                value={cachedWidget.text}/>
                        </div>

                    </div>

                    <div className="row">
                        <div className="col-9">
                            <select
                                className="form-control"
                                onChange={(e) =>
                                    setCahedWidget({
                                        ...cachedWidget,
                                        size: parseInt(e.target.value)
                                    })}
                                    value={cachedWidget.size} >
                                <option value={1}>Heading 1</option>
                                <option value={2}>Heading 2</option>
                                <option value={3}>Heading 3</option>
                                <option value={4}>Heading 4</option>
                                <option value={5}>Heading 5</option>
                                <option value={6}>Heading 6</option>
                            </select>
                        </div>

                    </div>




                </>
            }
        </>
    )
}

// <div className="container">
//         <h2>Heading {widget.size} {widget.id}</h2>
//
//         { widget.size ===1 && <h1>{widget.text}</h1>}
//         { widget.size ===2 && <h2>{widget.text}</h2>}
//         { widget.size ===3 && <h3>{widget.text}</h3>}
//         { widget.size ===4 && <h4>{widget.text}</h4>}
//         { widget.size ===5 && <h5>{widget.text}</h5>}
//         { widget.size ===6 && <h6>{widget.text}</h6>}
//
//         {
//             editing &&
//             <div>
//                 <i onClick={() => deleteWidget(_widget.id)} className="fas fa-trash float-right"></i>
//                 <i onClick={() => {
//                     updateWidget(_widget.id, widget)
//                 }} className="fas fa-check float-right fmargin"></i>

//
//                 <div className="mb-3 row">
//                     <input onChange={(e) => setWidget(widget => ({...widget, text: e.target.value}))} value={widget.text} className="form-control"/>
//                 </div>
//
//                 <div className="mb-3 row">
//                     <select onChange={(e) => setWidget(widget => ({...widget, size: parseInt(e.target.value)}))} value={widget.size} className="form-control">
//                         <option value={1}>Heading 1</option>
//                         <option value={2}>Heading 2</option>
//                         <option value={3}>Heading 3</option>
//                         <option value={4}>Heading 4</option>
//                         <option value={5}>Heading 5</option>
//                         <option value={6}>Heading 6</option>
//                     </select>
//                 </div>
//
//             </div>
//         }
//     </div>

export default HeadingWidget
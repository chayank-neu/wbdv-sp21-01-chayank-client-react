import React, {useState} from 'react'
import {Link} from "react-router-dom";

const EditableItem = (
    {
        to="/somewhere/to/go",
        deleteItem,
        updateItem,
        active,
        item,
        parentItem,
    }) => {
    const [editing, setEditing] = useState(false)
    const [cachedItem, setCahedItem] = useState(item)
    return (
        <>
            {
                !editing &&
                <>
                        <div className={`nav-link ${active ? 'active' : ''}`}>
                            <Link className="link"    to={to}>
                                {item.title}
                            </Link>
                            &nbsp;
                            <i onClick={() => setEditing(true)} className="fas fa-edit float-right"></i>

                        </div>


                </>
            }
            {
                editing &&
                <>
                    <div className="container row">
                        <div className="col-9">
                            <input
                                className="form-control"
                                onChange={(e) =>
                                    setCahedItem({
                                        ...cachedItem,
                                        title: e.target.value
                                    })}
                                value={cachedItem.title}/>
                        </div>
                        <div className="col-3">
                            <i onClick={() => {
                                setEditing(false)
                                updateItem(cachedItem)
                            }} className="fas fa-check"></i>

                            &nbsp;
                            <i onClick={() => deleteItem(item, parentItem)} className="fas fa-times"></i>

                        </div>
                    </div>


                </>
            }
        </>
    )
}

export default EditableItem
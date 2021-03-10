import React, {useState} from 'react'
import {Link} from "react-router-dom";

const CourseRow = (
    {
        course,
        lastModified="1/1/2021",
        owner="who knows?",
        deleteCourse,
        updateCourse
    }) => {
    const [editing, setEditing] = useState(false)
    const [title, setTitle] = useState(course.title)

    const saveCourse = () => {
        setEditing(false)
        const newCourse = {
            ...course,
            title: title
        }
        updateCourse(newCourse)
    }

    return(
        <tr>
            <td>
                {
                    !editing &&
                    <Link to={`/courses/table/edit/${course._id}`}>
                        <i className="fa fa-file"></i> {course.title}
                    </Link>
                }
                {
                    editing &&
                    <input
                        className="form-control"
                        onChange={(e) => setTitle(e.target.value)}
                        value={title}/>
                }
            </td>
            <td className="d-none d-md-table-cell" >{course.owner}</td>
            <td className="d-none d-lg-table-cell">{course.lastModified}</td>
            <td>

                {/*<i onClick={() => setEditing((prevEditing) => !prevEditing)} className="fas fa-edit"></i>*/}

                {
                    editing &&
                        <div className="float-right">
                            <button className="btn btn-success " onClick={() => saveCourse()}><i  className="fas fa-check"></i></button>&nbsp;
                            <button className="btn btn-danger " onClick={() => deleteCourse(course)}><i  className="fas fa-times"></i></button>
                        </div>

                }

                {
                    !editing &&
                    <button className="btn btn-primary float-right"onClick={() => setEditing(true)} ><i  className="fas fa-edit"></i></button>
                }


            </td>
        </tr>)
}

export default CourseRow
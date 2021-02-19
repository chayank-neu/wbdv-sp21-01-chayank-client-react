import {Link} from "react-router-dom";
import React, {useState} from "react";

const CourseCard = (
        {
            course,
            lastModified="1/1/2021",
            owner="who knows?",
            deleteCourse,
            updateCourse
        }
    ) => {
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
        <div className="card h-100" style={{width: "18rem", margin: "15px"}}>
            <img src="https://www.valuecoders.com/blog/wp-content/uploads/2016/08/react.png" className="card-img-top" alt="..."/>
            <div className="card-body">
                {

                    !editing &&
                    <Link to="/editor">
                        <h5 className="card-title">{course.title}</h5>
                    </Link>
                }
                {
                    editing &&
                    <input
                        className="form-control"
                        onChange={(e) => setTitle(e.target.value)}
                        value={title}/>
                }

                <p className="card-text">Some quick example text to build on the card title and make up the bulk of
                    the card's content.</p>
                <Link to="/editor" className="btn btn-primary">
                    {course.title}
                </Link>
                <br/>
                <br/>

                {
                    !editing &&
                    <div className="row float-right">
                        <button className="btn btn-primary card-link " onClick={() => setEditing(true)} ><i  className="fas fa-edit"></i></button> &nbsp;&nbsp;
                    </div>
                }



                {
                    editing &&
                    <div className="my-controls-at-top-right">
                        <button className="btn btn-success " onClick={() => saveCourse()} ><i  className="fas fa-check"></i></button>&nbsp;
                        <button className="btn btn-danger " onClick={() => deleteCourse(course)} ><i  className="fas fa-times"></i></button>
                    </div>
                }
                {
                    editing &&
                    <div className="row float-right invisible">
                        <button className="btn btn-primary card-link " onClick={() => setEditing(true)} ><i  className="fas fa-edit"></i></button> &nbsp;&nbsp;
                    </div>
                }



            </div>
        </div>
    )
}


export default CourseCard
import React, {useEffect} from 'react'
import {connect} from 'react-redux'
import {useParams} from "react-router-dom";
import courseService from "../../services/course-service"


// <ul className = "nav nav-tabs" >
//     <li className = "nav-item" >
//     <a className = "nav-link active" aria-current = "page" href = "#" > Active < /a></li>
// <li className="nav-item">
// <a className="nav-link" href="#">Link</a>
// </li>
// <li className="nav-item">
// <a className="nav-link" href="#">Link</a>
// </li>
//
// </ul>
const CourseDetails = (
    {
        course={},
        findCourseForCourseId
    }) => {
    const {layout, courseId, moduleId} = useParams();
    useEffect(() => {
        // alert(courseId)
        findCourseForCourseId(courseId)
    }, [])
    return(
        <>
            {course.title}
        </>
        )}


const stpm = (state) => {
    return {
        course: state.couseEditorReducer.course
    }
}
const dtpm = (dispatch) => {
    return {
        findCourseForCourseId: (courseId) => {
            courseService.findCourse(courseId)
                .then(course => dispatch({
                    type: "FIND_COURSE_FOR_COURSE_ID",
                    course: course
                }))
        }
    }
}
export default connect(stpm, dtpm)
(CourseDetails)
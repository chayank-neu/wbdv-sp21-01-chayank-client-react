import React from 'react'
import CourseCard from "./course-card";
import {Link} from "react-router-dom";



const CourseGrid = (props) =>
{

    return (
    <div>

        <table className="table">
            <thead>
            <tr>
                <th>Recent Documents</th>
                <th className="d-none d-lg-table-cell"></th>
                <th className="d-none d-lg-table-cell"></th>
                <th className="d-none d-lg-table-cell">Owned by me<i className="fa fa-caret-down"></i></th>
                <th className="">
                    <div className="float-right">
                        <Link><i className="fas fa-folder fa-2x"></i></Link>&nbsp;&nbsp;
                        <Link><i className="fas fa-sort-alpha-down fa-2x"></i></Link>&nbsp;&nbsp;
                        <Link to="/courses/table">
                            <i className="fas fa-2x fa-list float-right"></i>
                        </Link>
                    </div>

                </th>
            </tr>
            </thead>
        </table>

        <div className="row">
            {
                props.courses.map(course =>
                    <CourseCard
                        key={course._id}
                        deleteCourse={props.deleteCourse}
                        updateCourse={props.updateCourse}
                        course={course}
                        title={course.title}
                        lastModified={course.lastModified}
                        owner={course.owner}
                    />
                )
            }
        </div>

    </div>);
}


export default CourseGrid
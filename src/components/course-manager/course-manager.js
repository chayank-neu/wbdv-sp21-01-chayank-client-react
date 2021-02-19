import React, {useState} from 'react'
import CourseTable from "../course-table/course-table";
import CourseGrid from "../course-grid/course-grid";
import {Link, Route} from "react-router-dom";
import courseService, {findAllCourses, deleteCourse} from "../../services/course-service";
import './course-manager.css';

export default class CourseManager
    extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            courses: []
        }

        this.input = React.createRef();
    }

    componentDidMount() {
        courseService.findAllCourses()
            .then(courses => this.setState({courses}))
        // .then(courses => this.setState({courses: courses}))
    }

    updateCourse = (course) => {
        if(course.title===''){
            alert('please enter a title name. :)')
            return;
        }
        courseService.updateCourse(course._id, course)
            .then(status => {
                this.setState((prevState) => {
                    let nextState = {...prevState}
                    nextState.courses = prevState.courses.map(c => {
                        if(c._id === course._id) {
                            return course
                        } else {
                            return c
                        }
                    })
                    return nextState
                })
            })
    }

    deleteCourse = (course) => {
        // alert("delete course " + course._id)
        courseService.deleteCourse(course._id)
            .then(status => {
                // this.setState({
                //   courses: this.state.courses.filter(c => c._id !== course._id)
                // })
                this.setState((prevState) => ({
                    courses: prevState.courses.filter(c => c._id !== course._id)
                }))
            })
    }

    addCourse = (title='New Course') => {

        if(title===''){
            alert('please enter a title name. :)')
            return;
        }
        // alert('add course')
        const newCourse = {
            title: title,
            owner: "me",
            lastModified: "2/10/2021"
        }
        this.input.current.value='';
        courseService.createCourse(newCourse)
            .then(actualCourse => {
                this.state.courses.push(actualCourse)
                this.setState(this.state)
            })


    }

    render() {
        return(
            <div>

                <nav className="navbar navbar-dark bg-light">
                    <div className="container-fluid  ">
                        <div className="col-1 ">
                            <i className="fa fa-bars fa-2x float-left"></i>
                        </div>
                        <div className="col-2">
                            <h5 className="brand-visibility">Course Manager</h5>
                        </div>
                        <div className="col-7 ">
                            <input
                                placeholder="New Course title"
                                className="form-control"
                                ref={this.input}
                                />
                        </div>
                        <div className="col-1 ">
                            <button className="btn float-left" onClick={() => this.addCourse(this.input.current.value)}><i className="fa fa-plus-circle fa-2x"></i></button>

                        </div>
                        <div className="col-1">

                        </div>

                    </div>
                </nav>

                <Route path="/courses/table" exact={true} >
                    <CourseTable
                        updateCourse={this.updateCourse}
                        deleteCourse={this.deleteCourse}
                        courses={this.state.courses}/>
                </Route>

                <Route path="/courses/grid" exact={true} >
                    <CourseGrid
                        updateCourse={this.updateCourse}
                        deleteCourse={this.deleteCourse}
                        courses={this.state.courses}/>
                </Route>

                <button className="float" onClick={() => this.addCourse(this.input.current.value)}>
                    <i className="fa fa-plus my-float" ></i>
                </button>
            </div>
        )
    }
}
// export default CourseManager
import React,{useState} from 'react'
import {Link, useParams} from "react-router-dom";
import moduleReducer from "../../reducers/module-reducer";
import lessonReducer from "../../reducers/lesson-reducer";
import topicReducer from "../../reducers/topic-reducer";
import widgetReducer from "../../reducers/widget-reducer";
import couseEditorReducer from "../../reducers/course-reducer";
import {combineReducers, createStore} from "redux";
import {Provider,connect} from "react-redux";
import ModuleList from "./module-list";
import LessonTabs from "./lesson-tabs";
import TopicTabs from "./topic-tabs";
import WidgetList from "../widgets/widget-list";
import CourseDetails from "./course-details";
import courseService,{findCourse} from "../../services/course-service";
import './course-editor.css';

const reducer = combineReducers({
    moduleReducer: moduleReducer,
    lessonReducer: lessonReducer,
    topicReducer: topicReducer,
    widgetReducer: widgetReducer,
    couseEditorReducer: couseEditorReducer
})

// const findCourseById = (courseId) => {
//
//     let x={
//         title:""
//     }
//
//     courseService.findCourse(courseId).then(course => {
//         x.title=course.title
//     })
//
//     return x
//
// }

// const store = createStore(moduleReducer)
// const store = createStore(lessonReducer)
const store = createStore(reducer)

const CourseEditor = (props) => {
    const {layout, courseId, moduleId, topicId} = useParams()

    // const [courseState,setCourseState] =useState(props.course)
    // setCourseState(props.findCourse(courseId))
    return (
        <Provider store={store}>
            <div>
                <br/>
                <div className="row editor-layout">
                    <div className="col-3">
                        <h2>
                            <Link to={`/courses/${layout}`}>
                                <i className="fas fa-times float-left"></i>
                            </Link>
                             &nbsp;
                            <CourseDetails/>
                            {/*<i onClick={() => props.history.goBack()}*/}
                            {/*   className="fas fa-times float-right"></i>*/}
                        </h2>
                    </div>
                    <div className="col-9">

                    </div>
                </div>

                <div className="row editor-layout">
                    <div className="col-3">
                        <ModuleList/>
                    </div>
                    <div className="col-9 bg-white ">
                        <br/>
                        <div className="row container"><LessonTabs/></div>
                        <br/>
                        <div className="row container"><TopicTabs/></div>
                        <br/>
                        <div className="row container"><WidgetList/></div>
                        <br/>
                    </div>
                </div>
            </div>
        </Provider>)}

export default CourseEditor
import React, {useEffect} from 'react'
import {connect} from 'react-redux'
import EditableItem from "./editable-item";
import {useParams} from "react-router-dom";
import moduleService from "../../services/module-service"


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
const ModuleList = (
    {
        modules=[],
        createModule,
        deleteModule,
        updateModule,
        findModulesForCourse
    }) => {
    const {layout, courseId, moduleId} = useParams();
    useEffect(() => {
        // alert(courseId)
        findModulesForCourse(courseId)
    }, [])
    return(
        <div>
            <ul className="list-group">
                {
                    modules.map(module =>
                        <li className={`list-group-item ${module._id === moduleId ? 'active' : ''}`} key={module._id}>
                            <EditableItem
                                to={`/courses/${layout}/edit/${courseId}/modules/${module._id}`}
                                updateItem={updateModule}
                                deleteItem={deleteModule}
                                active={true}
                                item={module}/>
                        </li>
                    )
                }
                <li className="list-group-item text-center list-group-item-success">
                    <i onClick={() => createModule(courseId)} className="fas fa-plus fa-2x"></i>
                </li>
            </ul>
        </div>)}


const stpm = (state) => {
    return {
        modules: state.moduleReducer.modules
    }
}
const dtpm = (dispatch) => {
    return {
        createModule: (courseId) => {
            moduleService.createModuleForCourse(courseId, {title: "New Module"})
                .then(theActualModule => dispatch({
                    type: "CREATE_MODULE",
                    module: theActualModule
                }))
        },
        updateModule: (newItem) => {
            moduleService.updateModule(newItem._id, newItem)
                .then(status => dispatch({type: "UPDATE_MODULE", updateModule: newItem}))
        },
        deleteModule: (moduleToDelete) => {
            moduleService.deleteModule(moduleToDelete._id)
                .then(status => dispatch({type: "DELETE_MODULE", moduleToDelete: moduleToDelete}))
        },
        findModulesForCourse: (courseId) => {
            moduleService.findModulesForCourse(courseId)
                .then(modules => dispatch({
                    type: "FIND_MODULES_FOR_COURSE",
                    modules: modules
                }))
        }
    }
}

export default connect(stpm, dtpm)
(ModuleList)
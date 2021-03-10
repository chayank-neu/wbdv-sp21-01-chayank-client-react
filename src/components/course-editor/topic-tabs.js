import React, {useEffect} from 'react'
import {connect} from "react-redux";
import EditableItem from "./editable-item";
import {useParams} from "react-router-dom";
import topicService from '../../services/topic-service'

const TopicTabs = (
    {
        topics=[],
        findTopicsForLesson,
        createTopicForLesson,
        updateTopic,
        deleteTopic=(item) => alert("delete " + item._id)

    }) => {
    const {layout, courseId, moduleId, lessonId, topicId} = useParams();
    useEffect(() => {
        console.log("LOAD TOPICS FOR LESSON: " + lessonId)
        findTopicsForLesson(lessonId)
    }, [lessonId])
    return(
        <div className="bg-white">
            <ul className="nav nav-pills nav-fill">
                {
                    topics.map(topic =>
                        <li className={`nav-item ${topic._id === topicId ? 'active' : ''}`}  key={topic._id}>
                            <EditableItem
                                active={topic._id === topicId}
                                to={`/courses/${layout}/edit/${courseId}/modules/${moduleId}/lessons/${lessonId}/topics/${topic._id}`}
                                updateItem={updateTopic}
                                deleteItem={deleteTopic}
                                item={topic}
                                parentItem={lessonId}/>
                        </li>
                    )
                }
                <li className="nav-item">
                    <i onClick={() => createTopicForLesson(lessonId)} className="nav-link fas fa-plus"></i>
                </li>
            </ul>
        </div>)}

const stpm = (state) => ({
    topics: state.topicReducer.topics
})
const dtpm = (dispatch) => ({
    findTopicsForLesson: (lessonId) => {
        console.log("LOAD TOPICS FOR LESSON:")
        console.log(lessonId)
        topicService.findTopicsForLesson(lessonId)
            .then(topics => dispatch({
                type: "FIND_TOPICS",
                topics
            }))
    },
    createTopicForLesson: (lessonId) => {
        if(Object.is(lessonId, "undefined") || Object.is(lessonId, undefined))
        {
            alert('please select a lesson')
            return
        }

        console.log("CREATE TOPIC FOR LESSON: " + lessonId)
        topicService
            .createTopicForLesson(lessonId, {title: "New Topic"})
            .then(topic => dispatch({
                type: "CREATE_TOPIC",
                topic
            }))
    },
    deleteTopic: (item, parentItemId) =>{
        if(Object.is(parentItemId, "undefined") || Object.is(parentItemId, undefined))
        {

            alert('please select a lesson')
            return
        }

        topicService.deleteTopic(item._id)
            .then(status => dispatch({
                type: "DELETE_TOPIC",
                topicToDelete: item
            }))
    },
    updateTopic: (topic) =>

        topicService.updateTopic(topic._id, topic)
            .then(status => dispatch({
                type: "UPDATE_TOPIC",
                topic
            })),
})

export default connect(stpm, dtpm)(TopicTabs)
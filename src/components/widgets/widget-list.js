import React, {useEffect} from 'react'
import {connect} from 'react-redux'
import HeadingWidget from "./heading-widget";
import ParagraphWidget from "./paragraph-widget";
import {useParams} from "react-router-dom"
import widgetActions from "../../actions/widget-actions";

const WidgetList = (
    {
        widgets=[],
        createWidget,
        deleteWidget,
        updateWidget,
        findWidgetsForTopic
    }) => {
    const {topicId} = useParams()

    console.log(widgets)

    useEffect(() => {
        console.log("LOAD widgets FOR topic: " + topicId)
            findWidgetsForTopic(topicId)
    }, [topicId])

    return(
        <div className="container">
            <i onClick={()=>createWidget(topicId)} className="fas fa-plus float-right fa-2x"></i>
            <h1>Widget List </h1>
            {/*{widget.id}*/}

            <ul className="list-group">
                {
                    widgets.map(_widget =>
                        <li  className="list-group-item" key={_widget.id}>
                            {
                                _widget.type === "HEADING" &&
                                <HeadingWidget
                                    updateWidget={updateWidget}
                                    deleteWidget={deleteWidget}
                                    widget={_widget}
                                    topicId={topicId}
                                />
                            }
                            {
                                _widget.type === "PARAGRAPH" &&
                                <ParagraphWidget
                                    updateWidget={updateWidget}
                                    deleteWidget={deleteWidget}
                                    widget={_widget}
                                    topicId={topicId}
                                />
                            }
                        </li>
                    )
                }
            </ul>
        </div>
    )
}


const stpm = (state) => ({
    widgets: state.widgetReducer.widgets
})
const dtpm = (dispatch) => ({
    createWidget: (topicId) => widgetActions.createWidget(dispatch, topicId),
    updateWidget: (newItem) => widgetActions.updateWidget(dispatch, newItem),
    deleteWidget: (widgetToDelete) => widgetActions.deleteWidget(dispatch, widgetToDelete),
    findWidgetsForTopic: (topicId) => widgetActions.findWidgetsForTopic(dispatch, topicId)
})

export default connect(stpm, dtpm)(WidgetList)
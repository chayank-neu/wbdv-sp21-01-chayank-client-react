const initialState = {
    course: {
        title:""
    }
}

const courseEditorReducer = (state=initialState, action) => {
    switch (action.type) {
        case "FIND_COURSE_FOR_COURSE_ID":
            return {
                ...state,
                course: action.course
            }
        default:
            return state
    }
}
export default courseEditorReducer
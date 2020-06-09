const initialState = {
    lessons: [
        {_id: '123', title: 'lesson 123'},
        {_id: '234', title: 'lesson 234'},
        {_id: '345', title: 'lesson 345'}
    ]
};

const lessonReducer = (state=initialState, event) => {
    switch(event.type) {
        case "CREATE_LESSON":
            return {
                ...state,
                lessons: [...state.lessons, event.newLesson]
            };
        case "DELETE_LESSON":
            return {
                ...state,
                lessons: state.lessons.filter(lesson => lesson._id !== event.lessonId)
            };
        case "UPDATE_LESSON":
            return {
                ...state,
                lessons: state.lessons.map(
                    lesson => lesson._id === event.updatedLesson._id ?
                        event.updatedLesson : lesson )
            };
        case "FIND_LESSON":
            return {
                ...state,
                lessons: state.lessons.filter(lesson => lesson._id === event.lessonId)
            };
        case "FIND_LESSONS_FOR_MODULE":
            return {
                ...state,
                lessons: event.actualLessons
            };
        default:
            return state
    }
};

export default lessonReducer

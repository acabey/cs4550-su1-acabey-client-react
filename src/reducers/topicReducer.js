const initialState = {
    topics: [
        {_id: '123', title: 'topic 123'},
        {_id: '234', title: 'topic 234'},
        {_id: '345', title: 'topic 345'}
    ]
};

const topicReducer = (state=initialState, event) => {
    switch(event.type) {
        case "CREATE_TOPIC":
            return {
                ...state,
                topics: [...state.topics, event.newTopic]
            };
        case "DELETE_TOPIC":
            return {
                ...state,
                topics: state.topics.filter(topic => topic._id !== event.topicId)
            };
        case "UPDATE_TOPIC":
            return {
                ...state,
                topics: state.topics.map(
                    topic => topic._id === event.updatedTopic._id ?
                        event.updatedTopic : topic )
            };
        case "FIND_TOPIC":
            return {
                ...state,
                topics: state.topics.filter(topic => topic._id === event.topicId)
            };
        case "FIND_TOPICS_FOR_LESSON":
            return {
                ...state,
                topics: event.actualTopics
            };
        default:
            return state
    }
};

export default topicReducer

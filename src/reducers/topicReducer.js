const initialState = {
    topics: [],
    selectedTopicId: ''
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
                topics: event.topics
            };
        default:
            return state
    }
};

export default topicReducer

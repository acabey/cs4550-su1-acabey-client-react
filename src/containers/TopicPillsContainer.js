import {connect} from "react-redux";
import TopicPillsComponent from "../components/TopicPillsComponent";
import topicReducer from "../reducers/topicReducer";
import TopicService from "../services/TopicService";

const stateToPropertyMapper = (state, ownProps) => {
    return {
        topics: state.topicReducer.topics,
        selectedTopicId: state.topicReducer.selectedTopicId,
        params: ownProps.params,
    }
};

const dispatchToPropertyMapper = (dispatch) => {
    return {
        findTopicsForLesson: (lessonId) =>  {
            TopicService.findTopicsForLesson(lessonId)
                .then(topicsForLesson => dispatch({
                    type: 'FIND_TOPICS_FOR_LESSON',
                    topics: topicsForLesson
                }))
        },
        findAllTopics: () => {
            TopicService.findAllTopics()
                .then(actualTopics => dispatch({
                    type: 'FIND_ALL_TOPICS',
                    topics: actualTopics
                }))
        },
        updateTopic: (topicId, newTopicData) => {
            TopicService.updateTopic(topicId, newTopicData)
                .then(status => dispatch({
                    type: 'UPDATE_TOPIC',
                    updatedTopic: newTopicData
                }))
        },
        createTopic: (lessonId, newTopic) => {
            TopicService.createTopic(lessonId, newTopic)
                .then(actualNewTopic => dispatch({
                    type: "CREATE_TOPIC",
                    newTopic: actualNewTopic
                }))
        },
        deleteTopic: (topicId) => {
            TopicService.deleteTopic(topicId)
                .then(status => dispatch({
                    type: "DELETE_TOPIC",
                    topicId: topicId
                }))
        },
        selectTopic: (topicId) => {
            dispatch({
                type: "SELECT_TOPIC",
                topicId: topicId
            })
        }
    }
};

const TopicPillsContainer = connect
(stateToPropertyMapper, dispatchToPropertyMapper)
(TopicPillsComponent);

export default TopicPillsContainer

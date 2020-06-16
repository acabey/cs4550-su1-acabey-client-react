import React from "react";
import {faPlus} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import TopicPillsItemComponent from "./TopicPillsItemComponent";
import LessonTabItemComponent from "./LessonTabItemComponent";

class TopicPillsComponent extends React.Component {

    state = {
        newTopicTitle: 'New Topic',
    };

    componentDidMount = () => {
        if (this.props.match.params.lessonId) {
            this.props.findTopicsForLesson(this.props.match.params.lessonId);
        }
    };


    componentDidUpdate = (prevProps, prevState, snapshot) => {
        if(prevProps.match.params.lessonId !== this.props.match.params.lessonId) {
            this.props.findTopicsForLesson(this.props.match.params.lessonId)
        }
    };

    selectTopic = (topicId) => {
        this.props.history.push(
            `/editor/${this.props.match.params.courseId}/modules/${this.props.match.params.moduleId}/lessons/${this.props.match.params.lessonId}/topics/${topicId}`);
        this.props.selectTopic(topicId);
    };

    createTopic = () => {
        if (!this.props.match.params.lessonId) {
            return;
        }
        this.props.createTopic(
            this.props.match.params.lessonId, {
                title: this.state.newTopicTitle
            });
    };

    render = () =>
        <ul className="nav nav-pills wbdv-topic-pill-list">
            {
                this.props.topics.map((topic, i) =>
                    <TopicPillsItemComponent
                        topic={topic}
                        selectTopic={this.selectTopic}
                        selectedTopicId={this.props.selectedTopicId}
                        updateTopic={this.props.updateTopic}
                        deleteTopic={this.props.deleteTopic}
                        key={topic._id}/>
                )
            }
            <li className="nav-item">
                <button className="btn wbdv-topic-add-btn"
                        onClick={this.createTopic}>
                    <FontAwesomeIcon icon={faPlus}/>
                </button>
            </li>
        </ul>

}

export default TopicPillsComponent;

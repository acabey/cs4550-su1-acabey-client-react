import React from "react";
import LessonTabItemComponent from "./LessonTabItemComponent";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPlus} from "@fortawesome/free-solid-svg-icons";

class LessonTabsComponent extends React.Component {

    state = {
        newLessonTitle: 'New Lesson',
    };


    componentDidMount = () => {
        if (this.props.match.params.moduleId) {
            this.props.findLessonsForModule(this.props.match.params.moduleId);
        }
    };


    componentDidUpdate = (prevProps, prevState, snapshot) => {
        if(prevProps.match.params.moduleId !== this.props.match.params.moduleId) {
            this.props.findLessonsForModule(this.props.match.params.moduleId)
        }
    };

    createLesson = () => {
        if (!this.props.match.params.moduleId) {
            return;
        }
        this.props.createLesson(
            this.props.match.params.moduleId, {
                title: this.state.newLessonTitle
            });
    };

    deleteLesson = (lessonId) => {
        this.props.history.push(`/editor/${this.props.match.params.courseId}/modules/${this.props.match.params.moduleId}`);
        this.props.deleteLesson(lessonId);
    };

    selectLesson = (lessonId) => {
        if (lessonId !== this.props.match.params.lessonId) {
            this.props.history.push(`/editor/${this.props.match.params.courseId}/modules/${this.props.match.params.moduleId}/lessons/${lessonId}`);
        }
    };

    render = () => (
        <ul className="nav nav-tabs wbdv-lesson-tabs">
            {
                this.props.lessons.map((lesson, i) =>
                    <LessonTabItemComponent
                        lesson={lesson}
                        selectLesson={this.selectLesson}
                        selectedLessonId={this.props.match.params.lessonId}
                        updateLesson={this.props.updateLesson}
                        deleteLesson={this.deleteLesson}
                        key={lesson._id}/>)
            }
            <li className="nav-item">
                <button
                    className="btn wbdv-lessons-add-btn"
                    onClick={this.createLesson}>
                    <FontAwesomeIcon icon={faPlus}/>
                </button>
            </li>
        </ul>
    )
}

export default LessonTabsComponent
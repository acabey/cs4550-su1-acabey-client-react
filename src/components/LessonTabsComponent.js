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

    render = () => (
        <ul className="nav nav-tabs wbdv-lesson-tabs">
            {
                this.props.lessons.map((lesson, i) => <LessonTabItemComponent lesson={lesson} key={lesson._id}/>)
            }
            <li className="nav-item">
                <button
                    className="btn wbdv-lessons-add-btn"
                    onClick={this.props.createLesson()}>
                    <FontAwesomeIcon icon={faPlus}/>
                </button>
            </li>
        </ul>
    )
}

export default LessonTabsComponent
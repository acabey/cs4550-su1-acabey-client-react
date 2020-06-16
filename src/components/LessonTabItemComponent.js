import React from "react";

class LessonTabItemComponent extends React.Component {

    render = () =>
        <li className="nav-item mr-1">
            <div
                className={`nav-link bg-light ${this.props.selectedLessonId === this.props.lesson._id && 'active'}`}
                onClick={() => this.props.selectLesson(this.props.lesson._id)}>
                {this.props.lesson.title}
            </div>
        </li>

}

export default LessonTabItemComponent;
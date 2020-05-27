import React from "react";

class LessonTabItemComponent extends React.Component {

    state = {
        isActive: false
    };

    render = () =>
        <li className="nav-item mr-1">
            <button className={`nav-link ${this.state.isActive && 'active'}`}>{this.props.lesson.title}</button>
        </li>

}

export default LessonTabItemComponent;
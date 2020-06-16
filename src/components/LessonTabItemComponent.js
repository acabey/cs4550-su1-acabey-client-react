import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBan, faCheck, faPencilAlt, faTimes} from "@fortawesome/free-solid-svg-icons";

class LessonTabItemComponent extends React.Component {

    state = {
        isEditing: false,
        updatedTitle: ''
    };

    render = () =>
        <li className="nav-item mr-1">
            {
                !this.state.isEditing &&
                <div
                    className={`nav-link ${this.props.selectedLessonId === this.props.lesson._id && 'bg-primary'}`}
                    onClick={() => this.props.selectLesson(this.props.lesson._id)}>
                    <strong>{this.props.lesson.title}</strong>

                    <button
                        className="btn wbdv-lesson-item-edit-btn"
                        onClick={() => this.setState({
                            isEditing: true,
                            updatedTitle: this.props.lesson.title
                        })}>
                        <FontAwesomeIcon icon={faPencilAlt}/>
                    </button>

                    <button
                        className="btn wbdv-lesson-item-delete-btn"
                        onClick={() => this.props.deleteLesson(this.props.lesson._id)}>
                        <FontAwesomeIcon icon={faTimes}/>
                    </button>
                </div>
            }

            {
                this.state.isEditing &&
                <div
                    className={`nav-link ${this.props.selectedLessonId === this.props.lesson._id && 'bg-primary'}`}
                    onClick={() => this.props.selectLesson(this.props.lesson._id)}>

                    <input
                        onChange={(e) => {
                            this.setState({updatedTitle: e.target.value})
                        }}
                        value={this.state.updatedTitle}/>

                    <button
                        className={"btn wbdv-lesson-item-cancel-btn"}
                        onClick={() => this.setState({isEditing: false})}>
                        <FontAwesomeIcon icon={faBan}/>
                    </button>
                    <button
                        className={"btn wbdv-lesson-item-update-btn"}
                        onClick={() => {
                            this.props.updateLesson(
                                this.props.lesson._id,
                                {...this.props.lesson, title: this.state.updatedTitle}
                            );
                            this.setState({isEditing: false})}}>
                        <FontAwesomeIcon icon={faCheck}/>
                    </button>
                </div>
            }
        </li>

}

export default LessonTabItemComponent;
import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBan, faCheck, faFile, faPencilAlt, faTrash} from "@fortawesome/free-solid-svg-icons";
import {Link} from "react-router-dom";
import CourseListCourseComponent from "./CourseListCourseComponent";

class CourseTableRowComponent extends CourseListCourseComponent {

    render = () =>
        <tr className={`wbdv-row wbdv-course ${this.state.isSelected && 'bg-primary'}`}
            onClick={() => this.toggleSelected()}>
            {!this.state.isEditing &&
            <td>
                <FontAwesomeIcon icon={faFile} className={"wbdv-row wbdv-icon mr-2"}/>
                <Link to={`/editor/${this.props.course._id}`}
                      className={"text-dark"}>
                    {this.props.course.title}
                </Link>
            </td>
            }
            {this.state.isEditing &&
            <td>
                <input
                    type={"text"}
                    placeholder={"New course title"}
                    value={this.state.updatedTitle}
                    className={'form-control'}
                    onChange={(event) => this.updateTitleEventHandler(event)}/>
            </td>
            }

            <td className="wbdv-row wbdv-owner d-none d-md-table-cell">{this.props.course.owner}</td>
            <td className="wbdv-row wbdv-modified-date d-none d-lg-table-cell">{this.props.course.modified}</td>

            {!this.state.isEditing &&
            <td>
                <div className={"float-right"}>

                    <button
                        className="btn wbdv-row wbdv-button wbdv-edit"
                        onClick={() => this.toggleEditing()}>
                        <FontAwesomeIcon icon={faPencilAlt}/>
                    </button>
                    <button
                        className="float-right btn wbdv-row wbdv-button wbdv-delete"
                        onClick={() => this.props.deleteCourse(this.props.course)}>
                        <FontAwesomeIcon icon={faTrash}/>
                    </button>
                </div>
            </td>
            }
            {this.state.isEditing &&
            <td>
                <div className={"float-right"}>
                    <button
                        className="btn wbdv-row wbdv-button wbdv-edit"
                        onClick={() => this.cancelCourseChanges()}>
                        <FontAwesomeIcon icon={faBan}/>
                    </button>
                    <button
                        className="btn wbdv-row wbdv-button wbdv-delete"
                        onClick={() => this.saveCourseChanges()}>
                        <FontAwesomeIcon icon={faCheck}/>
                    </button>
                </div>
            </td>
            }
        </tr>
}

export default CourseTableRowComponent;
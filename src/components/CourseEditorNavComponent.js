import React from "react";
import {Link} from "react-router-dom";
import {faPlus} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const CourseEditorNavComponent = ({course}) =>

    <nav className="navbar navbar-expand navbar-light bg-white fixed-top wbdv-navbar">
        <Link className="navbar-brand fa fa-times wbdv-course-editor wbdv-close" to="/table/courses"></Link>
        <span className="navbar-brand wbdv-course-title d-none d-md-inline">{course.title}</span>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                    <a className="nav-link" href="#">Build<span className="sr-only">(current)</span></a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Pages</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Themes</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Store</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Apps</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Settings</a>
                </li>
            </ul>

            <button className={"btn wbdv-lesson-add-btn"}><FontAwesomeIcon icon={faPlus} size={'2x'}/></button>
        </div>
    </nav>

export default CourseEditorNavComponent;

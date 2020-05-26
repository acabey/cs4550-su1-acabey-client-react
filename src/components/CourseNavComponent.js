import React from "react";
import { faList } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const CourseNavComponent = ({}) =>
    <nav className="navbar navbar-expand navbar-light bg-white justify-content-between fixed-top wbdv-navbar">
        <div className="collapse navbar-collapse">
            <ul className="navbar-nav">
                <li className="nav-item dropdown">
                    <a className="navbar-brand nav-link dropdown-toggle"
                       href="#"
                       id="managerDropdown"
                       role="button"
                       data-toggle="dropdown"
                       aria-haspopup="true"
                       aria-expanded="false">
                        <span className="wbdv-field wbdv-hamburger"></span><FontAwesomeIcon icon={faList} size={2}/>
                        <span className="wbdv-label wbdv-course-manager d-none d-md-inline">Course Manager</span>
                    </a>
                    <div className="dropdown-menu">
                        <a href="#" className="dropdown-item active">Course List</a>
                        <a href="/course-editor/course-editor.template.client.html"
                           className="dropdown-item">Course Editor</a>
                    </div>
                </li>
            </ul>

            <input className="form-control mr-4 bg-transparent-0 rounded-0 wbdv-field wbdv-new-course"
                   type="text"
                   placeholder="New Course"
                   aria-label="New Course"/>

            <div className="navbar-light navbar-nav">
                <a href="#" className="nav-link fa fa-plus fa-2x wbdv-button wbdv-add-course"></a>
            </div>

            <div className="nav-item navbar-light navbar-nav dropdown">
                <a className="nav-link dropdown-toggle fa far fa-user-circle fa-2x"
                   href="#"
                   id="navbarDropdown"
                   role="button"
                   data-toggle="dropdown"
                   aria-haspopup="true"
                   aria-expanded="false">
                </a>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                    <a className="dropdown-item" href="/profile/profile.template.client.html">Profile</a>
                    <a className="dropdown-item" href="/login/login.template.client.html">Login</a>
                </div>
            </div>
        </div>
    </nav>

export default CourseNavComponent

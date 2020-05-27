import React from "react";
import LessonTabItemComponent from "./LessonTabItemComponent";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPlus} from "@fortawesome/free-solid-svg-icons";

const LessonTabsComponent = ({lessons}) =>
    <ul className="nav nav-tabs wbdv-lesson-tabs">
        {
            lessons.map((lesson, i) => <LessonTabItemComponent lesson={lesson}/>)
        }
        <li className="nav-item">
            <button className="btn wbdv-lessons-add-btn">
                <FontAwesomeIcon icon={faPlus}/>
            </button>
        </li>
    </ul>;

export default LessonTabsComponent
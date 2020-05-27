import React from "react";
import LessonTabItemComponent from "./LessonTabItemComponent";

const LessonTabsComponent = (lessons) =>
    <ul className="nav nav-tabs wbdv-lesson-tabs">
        {
            lessons.map((lesson, i) => <LessonTabItemComponent lesson={lesson}/>)
        }
        <li className="nav-item">
            <a className="fa fa-plus btn wbdv-lessons-add-btn" href="#"></a>
        </li>
    </ul>;

export default LessonTabsComponent
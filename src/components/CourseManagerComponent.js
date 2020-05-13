"use strict";
import React;
import {Component} from "react";
import CourseServiceClient from "../services/CourseService";

class CourseManagerComponent extends Component {

    state = {
        listView: 'table',
        courses: [],
    };

    constructor(props) {
        super(props);

        this.courseServiceClient = new CourseServiceClient();

        this.state = {
            toggle : 'table',
            courses: []
        };

        this.courseServiceClient.findAllCourses().then((new_courses) => {
            this.state.courses = [...new_courses];
        });
    }

}

export default CourseManagerContainer

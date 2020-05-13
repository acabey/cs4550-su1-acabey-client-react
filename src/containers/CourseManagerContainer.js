"use strict";
import React, {Component} from "react";
import CourseServiceClient from "../services/CourseService";
import CourseTableComponent from "../components/CourseTableComponent";
import CourseNavComponent from "../components/CourseNavComponent";

class CourseManagerContainer extends Component {

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

    render() {
        return  (
            <>
                <CourseNavComponent/>
                <CourseTableComponent/>
            </>
            );
    }

}

export default CourseManagerContainer

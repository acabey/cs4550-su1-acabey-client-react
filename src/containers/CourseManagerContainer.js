import React from "react";
import CourseTableComponent from "../components/CourseTableComponent";
import CourseGridComponent from "../components/CourseGridComponent";
import CourseServiceClient from "../services/CourseService";
import CourseNavComponent from "../components/CourseNavComponent";
import {Container} from "react-bootstrap";

import './CourseManagerContainer.css'

class CourseManagerContainer extends React.Component {

    state = {
        layout: this.props.match.params.layout,
        courses: [],
        newCourseTitle: 'New Title ABC'
    };


    constructor(props) {
        super(props);

        this.courseServiceClient = new CourseServiceClient();

    }

    componentDidMount() {
        this.courseServiceClient.findAllCourses()
            .then(actualArrayOfCourses =>
                this.setState({
                    courses: actualArrayOfCourses
                }))
    };

    componentDidUpdate(prevProps, prevState, snapshot) {
        if(prevProps.match.params.layout !== this.props.match.params.layout) {
            this.setState({
                layout: this.props.match.params.layout
            })
        }
    };

    setLayout = (layout) => {
        this.props.history.push(`/${layout}/courses`)
    };

    deleteCourse = (courseToDelete) =>
        this.courseServiceClient.deleteCourse(courseToDelete._id)
            .then(status => this.setState(prevState => ({
                courses: prevState
                    .courses.filter(course => course !== courseToDelete)
            })));

    updateCourse = (courseToUpdate, updatedCourse) =>
        this.courseServiceClient.updateCourse(courseToUpdate._id, updatedCourse)
            .then(returnedCourse => {
                this.setState(prevState => ({
                    courses: prevState.courses.map(course => course._id !== returnedCourse._id ? course : returnedCourse)
                    })
                );
            });

    addCourse = (title) =>
        this.courseServiceClient.createCourse({
            title: title,
            owner: 'me',
            modified: (new Date()).toDateString()
        })
            .then(theActualNewCourse =>
                this.setState((prevState) => {
                    return {
                        courses: [
                            ...prevState.courses,
                            theActualNewCourse
                        ]
                    }
                }));

    courseTitleInputHandler = (event) => {
        this.setState({
            newCourseTitle: event.target.value
        })
    };

    courseAddInputHandler = (event) => {
        this.addCourse(this.state.newCourseTitle);
    };

    layoutToggleInputHandler = (event) => {
        if (this.state.layout === 'grid') {
            this.setLayout('table');
        } else if (this.state.layout === 'table') {
            this.setLayout('grid');
        }
    };

    render() {

        return(
            <Container fluid={true}>
                <CourseNavComponent
                    courseTitleInputHandler={this.courseTitleInputHandler}
                    courseAddInputHandler={this.courseAddInputHandler}/>
                {
                    this.state.layout === 'table' &&
                    <CourseTableComponent
                        courses={this.state.courses}
                        deleteCourse={this.deleteCourse}
                        updateCourse={this.updateCourse}
                        toggleLayout={this.layoutToggleInputHandler}/>
                }
                {
                    this.state.layout === 'grid' &&
                    <CourseGridComponent
                        courses={this.state.courses}
                        deleteCourse={this.deleteCourse}
                        updateCourse={this.updateCourse}
                        toggleLayout={this.layoutToggleInputHandler}/>
                }
            </Container>
        )
    }
}

export default CourseManagerContainer

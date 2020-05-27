import React from "react";

class CourseListCourseComponent extends React.Component {

    state = {
        isEditing: false,
        updatedTitle: this.props.course.title,
        isSelected: false
    };

    toggleSelected = () => {
        if (!this.state.isEditing) {
            this.setState((prevState) => ({
                isSelected: !prevState.isSelected
            }))
        } else {
            this.setState((prevState) => ({
                isSelected: prevState.isEditing
            }))
        }
    };

    toggleEditing = () => {
        this.setState((prevState) => ({
            isEditing: !prevState.isEditing,
        }))
    };

    updateTitleEventHandler = (event) => {
        this.setState({
            updatedTitle: event.target.value
        })
    };

    cancelCourseChanges = () => {
        this.setState({
            isEditing: false,
            updatedTitle: this.props.course.title
        })
    };

    saveCourseChanges = () => {

        // Send updateCourse request up through handlers to service
        this.props.updateCourse(this.props.course, {
            title: this.state.updatedTitle
        });

        this.setState({
            isEditing: false
        });
    };

}

export default CourseListCourseComponent;
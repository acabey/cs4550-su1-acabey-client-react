import React from "react";
import LessonTabsComponent from "../components/LessonTabsComponent";
import TopicPillsComponent from "../components/TopicPillsComponent";
import CourseEditorNavComponent from "../components/CourseEditorNavComponent";
import {findCourseById} from "../services/CourseService";
import ModuleListContainer from "./ModuleListContainer";
import WidgetListComponent from "../components/WidgetListComponent";
import LessonTabsContainer from "./LessonTabsContainer";
import TopicPillsContainer from "./TopicPillsContainer";
import WidgetListContainer from "./WidgetListContainer";

class CourseEditorContainer extends React.Component {

    state = {
        course: {},
    };

    componentDidMount = () => {
        findCourseById(this.props.match.params.courseId).then(course => {
            this.setState({
                course: course
            });
        })
    };

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.match.params.courseId !== this.props.match.params.courseId) {
            findCourseById(this.props.match.params.courseId).then(course => {
                this.setState({
                    course: course
                });
            });
        }
    }

    render = () =>
        <div className="container-fluid">

            <CourseEditorNavComponent course={this.state.course}/>

            <div className="row">
                <div className="col-4">
                    <ModuleListContainer
                        course={this.state.course}
                        match={this.props.match}
                        history={this.props.history}/>
                </div>
                <div className="col-8">
                    <div className="row">
                        {
                            this.props.match.params.moduleId &&
                            <>
                                <span>Lessons</span>
                                <LessonTabsContainer
                                    match={this.props.match}
                                    history={this.props.history}/>
                            </>
                        }
                    </div>

                    <div className="row mt-2">
                        {
                            this.props.match.params.lessonId &&
                            <>
                                <span>Topics</span>
                                <TopicPillsContainer
                                    match={this.props.match}
                                    history={this.props.history}/>
                            </>
                        }
                    </div>

                    <div className="row mt-2">
                        {
                            this.props.match.params.topicId &&
                            <>
                                <span>Widgets</span>
                                <WidgetListContainer
                                    match={this.props.match}
                                    history={this.props.history}/>
                            </>
                        }
                    </div>
                </div>
            </div>
        </div>
}

export default CourseEditorContainer;
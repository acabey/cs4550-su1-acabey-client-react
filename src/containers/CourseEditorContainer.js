import React from "react";
import LessonTabsComponent from "../components/LessonTabsComponent";
import TopicPillsComponent from "../components/TopicPillsComponent";
import CourseEditorNavComponent from "../components/CourseEditorNavComponent";
import {findCourseById} from "../services/CourseService";
import ModuleListContainer from "./ModuleListContainer";
import WidgetListComponent from "../components/WidgetListComponent";

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
                        <span>Lessons</span>
                        <LessonTabsComponent lessons={[]}/>
                    </div>

                    <div className="row mt-2">
                        <span>Topics</span>
                        <TopicPillsComponent topics={[]}/>
                    </div>

                    <div className="row mt-2">
                        <span>Widgets</span>
                        <WidgetListComponent widgets={[]}/>
                    </div>
                </div>
            </div>
        </div>
}

export default CourseEditorContainer;
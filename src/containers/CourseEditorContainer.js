import React from "react";
import LessonTabsComponent from "../components/LessonTabsComponent";
import TopicPillsComponent from "../components/TopicPillsComponent";
import CourseEditorNavComponent from "../components/CourseEditorNavComponent";
import {findCourseById} from "../services/CourseService";
import {findModulesForCourse} from "../services/ModuleService";
import {findLessonsForModule} from "../services/LessonService";
import ModuleListContainer from "./ModuleListContainer";

class CourseEditorContainer extends React.Component {

    state = {
        course: {
            title: 'Example Course'
        },
    };

    componentDidMount = () => {
        findCourseById(this.props.match.params.courseId).then(course => {
            this.setState({
                course: course
            })
        })
    };

    render = () =>
        <div className="container-fluid">

            <CourseEditorNavComponent course={this.state.course}/>

            <div className="row">
                <div className="col-4">
                    <ModuleListContainer course={this.state.course}/>
                </div>
                <div className="col-8">
                    <div className="row">
                        {/*<LessonTabsComponent/>*/}
                    </div>

                    <div className="row mt-2">
                        {/*<TopicPillsComponent/>*/}
                    </div>
                </div>
            </div>
        </div>
}

export default CourseEditorContainer;
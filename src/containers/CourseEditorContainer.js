import React from "react";
import ModuleListComponent from "../components/ModuleListComponent";
import LessonTabsComponent from "../components/LessonTabsComponent";
import TopicPillsComponent from "../components/TopicPillsComponent";
import CourseEditorNavComponent from "../components/CourseEditorNavComponent";
import {findCourseById} from "../services/CourseService";
import {findModuleForCourse} from "../services/ModuleService";
import {findLessonsForModule} from "../services/LessonService";

class CourseEditorContainer extends React.Component {

    state = {
        course: {
        },
        modules: [
            {title: 'Example Module 1'},
            {title: 'Example Module 2'},
            {title: 'Example Module 3'},
        ],
        selectedModule: {
            lessons: [
                {title: 'Example Lesson 1'},
                {title: 'Example Lesson 2'},
                {title: 'Example Lesson 3'},
            ]
        },
        selectedLesson: {
            topics: [
                {title: 'Example Topic 1'},
                {title: 'Example Topic 2'},
                {title: 'Example Topic 3'},
            ]
        }
    };

    componentDidMount = () => {
        this.setState({
            course: findCourseById(this.props.match.params.courseId),
        });
        this.setState((prevState) => ({
            modules: findModuleForCourse(prevState.course._id)
        }));
        this.setState((prevState) => ({
            selectedModule: prevState.modules[0] ? prevState.modules[0] : null
        }));
        this.setState((prevState) => ({
            lessons: prevState.selectedModule ? findLessonsForModule(prevState.selectedModule._id) : null
        }));
        this.setState((prevState) => ({
            selectedLesson: prevState.lessons[0] ? prevState.lessons[0] : null
        }));
    };

    render = () =>
        <div className="container-fluid">

            <CourseEditorNavComponent course={this.state.course}/>

            <div className="row">
                <div className="col-4">
                    <ModuleListComponent modules={this.state.modules}/>
                </div>
                <div className="col-8">
                    <div className="row">
                        <LessonTabsComponent lessons={this.state.selectedModule.lessons}/>
                    </div>

                    <div className="row mt-2">
                        <TopicPillsComponent topics={this.state.selectedLesson.topics}/>
                    </div>
                </div>
            </div>
        </div>
}

export default CourseEditorContainer;
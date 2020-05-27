import React from "react";
import ModuleListComponent from "../components/ModuleListComponent";
import LessonTabsComponent from "../components/LessonTabsComponent";
import TopicPillsComponent from "../components/TopicPillsComponent";
import CourseEditorNavComponent from "../components/CourseEditorNavComponent";

class CourseEditorContainer extends React.Component {

    state = {
        course: {
            title: 'CS4550 - Web Development',
            _id: this.props.match.params.courseId
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

    render = () => {
        console.log(this.state);
        return (
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
        )
    }
}

export default CourseEditorContainer;
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
            {title: 'Module 1'},
            {title: 'Module 2'},
            {title: 'Module 3'},
        ],
        selectedModule: {
            lessons: [
                {title: 'Lesson 1'},
                {title: 'Lesson 2'},
                {title: 'Lesson 3'},
            ]
        },
        selectedLesson: {
            topics: [
                {title: 'Topic 1'},
                {title: 'Topic 2'},
                {title: 'Topic 3'},
            ]
        }
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
import React from 'react'
import CourseTableHeadComponent from "./CourseTableHeadComponent";
import CourseTableRowComponent from "./CourseTableRowComponent";
import CourseListComponent from "./CourseListComponent";

class CourseTableComponent extends CourseListComponent {

    render = () =>
        <div>
            <div className="row justify-content-center">
                <div className="col-md-10 col-12">
                    <table className="table table-striped">
                        <thead>
                        <CourseTableHeadComponent
                            sortState={this.state.sortDescription}
                            toggleSort={this.toggleSort}
                            toggleLayout={this.props.toggleLayout}/>
                        </thead>

                        <tbody>
                        {
                            this.sortCourses(this.props.courses).map(course =>
                                <CourseTableRowComponent
                                    course={course}
                                    deleteCourse={this.props.deleteCourse}
                                    updateCourse={this.props.updateCourse}
                                    key={course._id}/>
                            )
                        }
                        </tbody>

                        <tfoot>
                        </tfoot>
                    </table>
                </div>
            </div>
        </div>
}


export default CourseTableComponent

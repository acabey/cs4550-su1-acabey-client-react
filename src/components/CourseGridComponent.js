import React from 'react'
import CourseGridCardComponent from "./CourseGridCardComponent";
import CourseListComponent from "./CourseListComponent";
import CourseTableRowComponent from "./CourseTableRowComponent";

/**
 * xs | 1
 * sm | 2
 * md | 3
 * lg | 4
 * xl | 6
 */
class CourseGridComponent extends CourseListComponent {

    render = () =>
        <div className="ml-2 mr-2">
            <div className="row">
                {
                    this.sortCourses(this.props.courses).map(course =>
                        <CourseGridCardComponent
                            course={course}
                            deleteCourse={this.props.deleteCourse}
                            updateCourse={this.props.updateCourse}
                            key={course._id}/>
                    )
                }
            </div>
        </div>

}
export default CourseGridComponent

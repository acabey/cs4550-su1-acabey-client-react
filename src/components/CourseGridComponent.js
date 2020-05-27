import React from 'react'
import CourseGridCardComponent from "./CourseGridCardComponent";
import CourseListComponent from "./CourseListComponent";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faFolder, faList, faSortAlphaDown, faSortAlphaUp} from "@fortawesome/free-solid-svg-icons";

/**
 * xs | 1
 * sm | 2
 * md | 3
 * lg | 4
 * xl | 6
 */
class CourseGridComponent extends CourseListComponent {

    render = () =>
        <div>
            <div className="row justify-content-center">
                <div className="col-4">
                    <h5>Recent Documents</h5>
                </div>
                <div className="col-4">
                    <h5>Owned by me</h5>
                </div>
                <div className="col-2">
                    <button className={"btn wbdv-btn"}
                            onClick={() => this.props.toggleLayout()}>
                        <FontAwesomeIcon icon={faList} size={'1x'}/>
                    </button>
                    <button className={"btn wbdv-btn"}
                            onClick={() => this.toggleSort()}>
                        <FontAwesomeIcon icon={sortState === "AZ_DESC" ? faSortAlphaDown : faSortAlphaUp} size={'1x'}/>
                    </button>
                    <button className={"btn wbdv-btn"}>
                        <FontAwesomeIcon icon={faFolder} size={'1x'}/>
                    </button>
                </div>
            </div>

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
        </div>

}
export default CourseGridComponent

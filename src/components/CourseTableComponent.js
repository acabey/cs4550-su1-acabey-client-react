import React from 'react'
import CourseTableHeadComponent from "./CourseTableHeadComponent";
import CourseTableRowComponent from "./CourseTableRowComponent";

class CourseTableComponent extends React.Component {

    state = {
        sortDescription: 'AZ_ASC'
    };

    toggleSort() {
        this.setState({
            sortDescription: this.state.sortDescription === 'AZ_ASC' ? 'AZ_DESC' : 'AZ_ASC'
        })
    }

    sortCourses(courses) {
        if (this.state.sortDescription === 'AZ_ASC') {
            return this.sortAZasc(courses);
        } else {
            return this.sortAZdesc(courses);
        }
    }

    sortAZdesc(courses) {
        return courses.sort((a, b) => a.title.localeCompare(b.title))
    }

    sortAZasc(courses) {
        return courses.sort((a, b) => b.title.localeCompare(a.title))
    }

    render() {

        return (
            <div className="row justify-content-center">
                <div className="col-md-10 col-12">
                    <table className="table table-striped">
                        <thead>
                        <CourseTableHeadComponent
                            sort={this.state.sortDescription}
                            toggleSort={this.toggleSort}
                            toggleLayout={this.props.toggleLayout}
                            />
                        </thead>

                        <tbody>

                        {
                            this.sortCourses(this.props.courses).map(course =>
                                <CourseTableRowComponent
                                course={course}
                                deleteCourse={this.props.deleteCourse}
                                updateCourse={this.props.updateCourse}
                                />
                            )
                        }

                        </tbody>

                        <tfoot>
                        </tfoot>
                    </table>
                </div>
            </div>
    )


    }

}


export default CourseTableComponent

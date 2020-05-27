import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash, faPencilAlt } from '@fortawesome/free-solid-svg-icons'

const CourseGridCardComponent = ({deleteCourse, course}) =>

    <div className="col-xs-12 col-sm-6 col-md-4 col-lg-3 col-xl-2 mb-2">
        <div className="card">
            <img className="card-img-top" src="..." alt="Card image cap"/>
            <div className="card-body">
                <h5 className="card-title">{course.title}</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the
                    card's content.</p>
                <a href="#" onClick={(event) => deleteCourse(course)} className="wbdv-button wbdv-edit float-left">
                    <FontAwesomeIcon icon={faPencilAlt}/>
                </a>
                <a href="#" onClick={(event) => deleteCourse(course)} className="wbdv-button wbdv-delete float-right">
                    <FontAwesomeIcon icon={faTrash}/>
                </a>
            </div>
        </div>
    </div>

export default CourseGridCardComponent

import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faFolder, faList, faSortAlphaDown, faSortAlphaUp} from "@fortawesome/free-solid-svg-icons";

const CourseGridHeadComponent = ({sortState, toggleSort, toggleLayout}) =>
    <div className="row justify-content-center">
        <div className="col-4">
            <h5>Recent Documents</h5>
        </div>
        <div className="col-4">
            <h5>Owned by me</h5>
        </div>
        <div className="col-2">
            <button className={"btn wbdv-btn"}
                    onClick={() => toggleLayout()}>
                <FontAwesomeIcon icon={faList} size={'1x'}/>
            </button>
            <button className={"btn wbdv-btn"}
                    onClick={() => toggleSort()}>
                <FontAwesomeIcon icon={sortState === "AZ_DESC" ? faSortAlphaDown : faSortAlphaUp} size={'1x'}/>
            </button>
            <button className={"btn wbdv-btn"}>
                <FontAwesomeIcon icon={faFolder} size={'1x'}/>
            </button>
        </div>
    </div>

export default CourseGridHeadComponent;

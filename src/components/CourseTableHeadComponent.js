import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSortAlphaDown, faTh} from "@fortawesome/free-solid-svg-icons";

const CourseTableHeadComponent = (sort, toggleSort, toggleLayout) => {
    return (
        <tr className="table-dark">
            <th className="wbdv-header wbdv-title">Title</th>
            <th className="wbdv-header wbdv-owner d-none d-md-table-cell">Owned</th>
            <th className="wbdv-header wbdv-last-modified d-none d-md-table-cell">Modified</th>
            <th>
                <FontAwesomeIcon icon={faSortAlphaDown} className={"wbdv-header wbdv-sort"}/>
                <FontAwesomeIcon icon={faTh} className={"wbdv-button wbdv-grid-layout"}/>
            </th>
        </tr>
    )
};

export default CourseTableHeadComponent;

import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSortAlphaDown, faSortAlphaUp, faTh} from "@fortawesome/free-solid-svg-icons";

const CourseTableHeadComponent = ({sortState, toggleSort, toggleLayout}) => {
    return (
        <tr className="table-dark">
            <th className="wbdv-header wbdv-title">Title</th>
            <th className="wbdv-header wbdv-owner d-none d-md-table-cell">Owned</th>
            <th className="wbdv-header wbdv-last-modified d-none d-lg-table-cell">Last Modified</th>
            <th>
                <div className={"float-right"}>
                    <button className={"btn wbdv-header wbdv-sort text-white"}
                            onClick={() => toggleSort()}>
                        <FontAwesomeIcon icon={sortState === "AZ_DESC" ? faSortAlphaDown : faSortAlphaUp} />
                    </button>
                    <button className={"btn wbdv-button wbdv-grid-layout text-white"}
                            onClick={() => toggleLayout()}>
                        <FontAwesomeIcon icon={faTh}/>
                    </button>
                </div>
            </th>
        </tr>
    )
};

export default CourseTableHeadComponent;

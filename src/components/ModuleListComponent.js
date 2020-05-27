import React from "react";
import ModuleListItemComponent from "./ModuleListItemComponent";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPlus} from "@fortawesome/free-solid-svg-icons";

const ModuleListComponent = ({modules}) =>
    <div className="list-group ml-2 mr-2 wbdv-module-list">
        {
            modules.map((module, i) => <ModuleListItemComponent module={module} i={i}/>)
        }
        <div className="row list-group-item bg-transparent border-0">
            <button className="btn float-right wbdv-module-item-add-btn">
                <FontAwesomeIcon icon={faPlus}/>
            </button>
        </div>
    </div>;

export default ModuleListComponent
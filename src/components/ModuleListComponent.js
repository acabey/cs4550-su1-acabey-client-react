import React from "react";
import ModuleListItemComponent from "./ModuleListItemComponent";

const ModuleListComponent = ({modules}) =>
    <div className="list-group ml-2 mr-2 wbdv-module-list">
        {
            modules.map((module, i) => <ModuleListItemComponent module={module} i={i}/>)
        }
        <div className="row list-group-item bg-transparent border-0">
            <button className="btn float-right wbdv-module-item-add-btn fa fa-plus"/>
        </div>
    </div>;

export default ModuleListComponent
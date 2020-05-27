import React from "react";

const ModuleListItemComponent = ({module, i}) =>
    <div className="row list-group-item wbdv-module-item">
        <span className="wbdv-module-item-title">{`Module ${i + 1} - ${module.title}`}</span>
        <button className="btn float-right wbdv-module-item-delete-btn">X</button>
    </div>

export default ModuleListItemComponent;
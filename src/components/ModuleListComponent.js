import React from "react";
import ModuleListItemComponent from "./ModuleListItemComponent";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPlus} from "@fortawesome/free-solid-svg-icons";

class ModuleListComponent extends React.Component {
    state = {
        newModuleTitle: 'New Module',
        editingModule: {_id : null}
    };

    componentDidMount = () => {
        this.props.findModulesForCourse(this.props.course._id);
    };

    render = () => {
        return(
            <div>
                <span>Modules ({this.props.modules.length})</span>

                <div className="list-group ml-2 mr-2 wbdv-module-list">
                    {
                        this.props.modules.map((module, i) =>
                            <ModuleListItemComponent
                                module={module}
                                updateModule={this.props.updateModule}
                                deleteModule={this.props.deleteModule}
                                course={this.props.course}
                                i={i}/>)
                    }
                    <div className="row list-group-item bg-transparent ">
                        <div className={"input-group"}>

                            <input
                                className={"form-control"}
                                onChange={(event) =>
                                    this.setState({
                                        newModuleTitle: event.target.value
                                    })}
                                aria-describedby={"add-module-btn"}
                                value={this.state.newModuleTitle}/>
                            <div className={"input-group-append"}>
                                <button
                                    className="btn float-right wbdv-module-item-add-btn"
                                    onClick={() => this.props.createModule(
                                        this.props.course._id,
                                        {
                                            title: this.state.newModuleTitle
                                        })}
                                    id={"add-module-btn"}>
                                    <FontAwesomeIcon icon={faPlus}/>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}

export default ModuleListComponent

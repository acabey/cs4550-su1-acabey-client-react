import React from "react";
import ModuleListItemComponent from "./ModuleListItemComponent";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPlus} from "@fortawesome/free-solid-svg-icons";

class ModuleListComponent extends React.Component {
    state = {
        newModuleTitle: 'some other module',
        editingModule: {}
    };

    componentDidMount = () => {
        this.props.findModulesForCourse(this.props.course._id);
    };

    render = () => {
        return(
            <div>
                <h1>Modules ({this.props.modules.length})</h1>

                <div className="list-group ml-2 mr-2 wbdv-module-list">
                    {
                        this.props.modules.map((module, i) => <ModuleListItemComponent module={module} i={i}/>)
                    }
                    <div className="row list-group-item bg-transparent border-0">
                        <input onChange={(event) =>
                            this.setState({
                                newModuleTitle: event.target.value
                            })}
                               value={this.state.newModuleTitle}/>
                        <button
                            className="btn float-right wbdv-module-item-add-btn"
                            onClick={() => this.props.createModule(
                                this.props.course._id,
                                {
                                    title: this.state.newModuleTitle
                                })}>
                            <FontAwesomeIcon icon={faPlus}/>
                        </button>
                    </div>
                </div>

            </div>
        )
    }
}

export default ModuleListComponent

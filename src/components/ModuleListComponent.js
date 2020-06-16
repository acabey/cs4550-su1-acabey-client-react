import React from "react";
import ModuleListItemComponent from "./ModuleListItemComponent";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPlus} from "@fortawesome/free-solid-svg-icons";

class ModuleListComponent extends React.Component {


    state = {
        newModuleTitle: 'New Module',
    };


    componentDidMount = () => {
        this.props.findModulesForCourse(this.props.match.params.courseId)
    };


    componentDidUpdate = (prevProps, prevState, snapshot) => {
        if(prevProps.match.params.courseId!== this.props.match.params.courseId) {
            this.props.findModulesForCourse(this.props.match.params.courseId)
        }
    };

    render = () => {
        return(
            <div className={'mr-2'}>
                <span>Modules</span>

                <div className="list-group rbdv-module-list">
                    {
                        this.props.modules.map((module, i) =>
                            <ModuleListItemComponent
                                module={module}
                                updateModule={this.props.updateModule}
                                deleteModule={this.props.deleteModule}
                                selectModule={(moduleId) => {
                                    this.props.history.push(`/editor/${this.props.match.params.courseId}/modules/${moduleId}`);
                                    this.props.selectModule(moduleId);
                                }}
                                selectedModuleId={this.props.selectedModuleId}
                                course={this.props.course}
                                key={module._id}
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

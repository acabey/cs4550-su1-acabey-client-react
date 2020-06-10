import React from "react";
import {Link} from "react-router-dom";
import {faBan, faCheck, faPencilAlt, faTimes} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

class ModuleListItemComponent extends React.Component {

    state = {
        isEditing: false,
        editingModule: {}
    };

    componentDidMount() {
        this.setState({
            isEditing: false,
            updatedTitle: ''
        })
    }

    render = () =>
        <div>

            <div className="row list-group-item wbdv-module-item">
                {
                    !this.state.isEditing &&
                    <div>
                        <Link className="wbdv-module-item-title text-black"
                              to={`/editor/${this.props.course._id}/modules/${this.props.module._id}`}>
                            {this.props.module.title}
                        </Link>

                        <div className={"float-right"}>

                            <button
                                className="btn wbdv-module-item-edit-btn"
                                onClick={() => this.setState({
                                    isEditing: true,
                                    updatedTitle: this.props.module.title
                                })}>
                                <FontAwesomeIcon icon={faPencilAlt}/>
                            </button>

                            <button
                                className="btn wbdv-module-item-delete-btn"
                                onClick={() => this.props.deleteModule(this.props.module._id)}>
                                <FontAwesomeIcon icon={faTimes}/>
                            </button>

                        </div>
                    </div>
                }
                {
                    this.state.isEditing &&
                    <div>

                        <input
                            onChange={(e) => {
                                this.setState({updatedTitle: e.target.value})
                            }}
                            value={this.state.updatedTitle}/>

                        <div className={"float-right"}>
                            <button
                                className={"btn wbdv-module-item-cancel-btn"}
                                onClick={() => this.setState({isEditing: false})}>
                                <FontAwesomeIcon icon={faBan}/>
                            </button>
                            <button
                                className={"btn wbdv-module-item-update-btn"}
                                onClick={() => {
                                this.props.updateModule(
                                    this.props.module._id,
                                    {...this.props.module, title: this.state.updatedTitle}
                                );
                                this.setState({isEditing: false})}}>
                                <FontAwesomeIcon icon={faCheck}/>
                            </button>
                        </div>

                    </div>
                }
            </div>

        </div>
}


export default ModuleListItemComponent;
import React from "react";
import {Link} from "react-router-dom";
import {faBan, faCheck, faPencilAlt} from "@fortawesome/free-solid-svg-icons";
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
                    <span>
                    <span className="wbdv-module-item-title">
                        <Link to={`/editor/${this.props.course._id}/modules/${this.props.module._id}`}>
                            {this.props.module.title}
                        </Link>
                    </span>

                    <button onClick={() => this.setState({
                        isEditing: true,
                        updatedTitle: this.props.module.title
                    })}>
                      <FontAwesomeIcon icon={faPencilAlt}/>
                    </button>

                <button
                    className="btn float-right wbdv-module-item-delete-btn"
                    onClick={() => this.props.deleteModule(this.props.module._id)}>X</button>
                  </span>
                }
                {
                    this.state.isEditing &&
                    <span>

                    <input
                        onChange={(e) => {
                            this.setState({updatedTitle: e.target.value})
                        }}
                        value={this.state.updatedTitle}/>
                    <button onClick={() => this.setState({isEditing: false})}>
                      <FontAwesomeIcon icon={faBan}/>
                    </button>
                    <button onClick={() => {
                        this.props.updateModule(
                            this.props.module._id,
                            {...this.props.module, title: this.state.updatedTitle}
                        );
                        this.setState({isEditing: false})
                    }}>
                      <FontAwesomeIcon icon={faCheck}/>
                    </button>
                    </span>
                }
            </div>

        </div>
}


export default ModuleListItemComponent;
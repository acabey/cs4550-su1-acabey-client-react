import React from "react";
import {Link} from "react-router-dom";

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
            <li key={this.props.module._id}>
                {
                    !this.state.isEditing &&
                    <span>
                    <Link to={`/editor/${this.props.params.courseId}/modules/${this.props.module._id}`}>
                      {this.props.module.title}
                    </Link>
                    <button onClick={() => this.setState({
                        isEditing: true,
                        updatedTitle: this.props.module.title
                    })}>
                      Edit
                    </button>
                    <button onClick={() => this.props.deleteModule(this.props.module._id)}>
                      Delete
                    </button>
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
                      Cancel
                    </button>
                    <button onClick={() => {
                        this.props.updateModule(
                            this.props.module._id,
                            {...this.props.module, title: this.state.updatedTitle}
                            );
                        this.setState({isEditing: false})
                    }}>
                      Save
                    </button>
                    </span>
                }
            </li>

            <div className="row list-group-item wbdv-module-item">
                <span className="wbdv-module-item-title">{`Module ${this.props.i + 1} - ${this.props.module.title}`}</span>
                <button className="btn float-right wbdv-module-item-delete-btn">X</button>
            </div>

        </div>
}


export default ModuleListItemComponent;
import React from "react";
import {Link} from "react-router-dom";

class ModuleListItemComponent extends React.Component {
   // = ({module, i}) =>

   // This assumes it is a part of ModuleListComponent, rather than its own component.
   // Editing state will need to be kept here

   render = () =>
      <div>
         <li key={module._id}>
            {
               this.state.editingModule._id === module._id &&
               <span>
                    <button onClick={() => this.props.deleteModule(module._id)}>
                      Delete
                    </button>
                    <button onClick={() => {
                       this.props.updateModule(this.state.editingModule._id, this.state.editingModule)
                       this.setState({editingModule: {}})
                    }}>
                      Save
                    </button>
                    <input onChange={(e) => {
                       const newTitle = e.target.value
                       this.setState(prevState => ({
                          editingModule: {
                             ...prevState.editingModule,
                             title: newTitle
                          }
                       }))
                    }}
                           value={this.state.editingModule.title}/>
                    </span>
            }
            {
               this.state.editingModule._id !== module._id &&
               <span>
                    <button onClick={() => this.setState({editingModule: module})}>
                      Edit
                    </button>
                    <Link to={`/editor/${this.props.params.courseId}/modules/${module._id}`}>
                      {module.title}
                    </Link>
                  </span>
            }
         </li>

         <div className="row list-group-item wbdv-module-item">
            <span className="wbdv-module-item-title">{`Module ${i + 1} - ${module.title}`}</span>
            <button className="btn float-right wbdv-module-item-delete-btn">X</button>
         </div>

      </div>
}


export default ModuleListItemComponent;
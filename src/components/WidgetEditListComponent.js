import React from "react";
import WidgetViewComponent from "./WidgetViewComponent";
import WidgetEditAbstractComponent from "./WidgetEditAbstractComponent";

class WidgetEditListComponent extends WidgetEditAbstractComponent {

    render = () => (
        <div className={'col-12 border'}>

            <div className={'m-2'}>

                {this.widgetMetaRow}

                <div className={'row p-1'}>
                    <textarea className={'form-control'}
                              placeholder={''}
                              onChange={(e) => this.setState({updatedWidget: {text: e.target.value}})}
                              value={this.state.text}/>
                </div>

                <div className={'row p-1'}>
                    <select className="custom-select form-control"
                            value={this.state.value}
                            onChange={(e) => this.setState({value: e.target.value})}>
                        <option value="OL">Ordered List</option>
                        <option value="UL">Unordered List</option>
                    </select>
                </div>

                <div className={'row p-1'}>
                    <input className={'form-control'}
                           placeholder={'Widget name'}
                           value={this.state.name}
                           onChange={(e) => this.setState({name: e.target.value})}
                    />
                </div>

                <div className={'row p-1'}>
                    <h3>Preview</h3>
                </div>

                <div className={'row p-1'}>
                    <WidgetViewComponent widget={this.state}/>
                </div>

            </div>
        </div>
    )

}

export default WidgetEditListComponent;
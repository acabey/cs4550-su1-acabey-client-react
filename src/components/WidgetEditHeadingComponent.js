import React from "react";
import WidgetViewComponent from "./WidgetViewComponent";
import WidgetEditAbstractComponent from "./WidgetEditAbstractComponent";
import WidgetEditMetaRowComponent from "./WidgetEditMetaRowComponent";

class WidgetEditHeadingComponent extends WidgetEditAbstractComponent {

    render = () => (
        <div className={'col-12 border'}>

            <div className={'m-2'}>

                <WidgetEditMetaRowComponent
                    name={this.state.name}
                    type={this.state.type}
                    incrementWidget={this.incrementWidget}
                    decrementWidget={this.decrementWidget}
                    updateWidget={this.updateWidget}
                    updateType={this.updateType}/>


                <div className={'row p-1'}>
                    <input className={'form-control'}
                           placeholder={'Heading text'}
                           onChange={(e) => this.setState({text: e.target.value})}
                           value={this.state.text}
                    />
                </div>

                <div className={'row p-1'}>
                    <select className="custom-select form-control"
                            value={this.state.size}
                            onChange={(e) => this.setState({size: e.target.value})}>
                        <option value="H1">H1</option>
                        <option value="H2">H2</option>
                        <option value="H3">H3</option>
                        <option value="H4">H4</option>
                        <option value="H5">H5</option>
                    </select>
                </div>

                <div className={'row p-1'}>
                    <input className={'form-control'}
                           placeholder={'Widget name'}
                           value={this.state.name}
                           onChange={(e) => this.setState({name: e.target.value})}/>
                </div>

                <div className={'row p-1'}>
                    <h3>Preview</h3>
                </div>

                <div className={'row p-1'}>
                    <WidgetViewComponent widget={this.props.widget}/>
                </div>

            </div>
        </div>
    )

}

export default WidgetEditHeadingComponent;
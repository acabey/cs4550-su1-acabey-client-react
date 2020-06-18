import React from "react";
import WidgetViewComponent from "./WidgetViewComponent";
import WidgetEditAbstractComponent from "./WidgetEditAbstractComponent";
import WidgetEditMetaRowComponent from "./WidgetEditMetaRowComponent";

class WidgetEditImageComponent extends WidgetEditAbstractComponent {

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
                           placeholder={'Image url'}
                           onChange={(e) => this.setState({url: e.target.value})}
                           value={this.state.url}/>
                </div>

                <div className={'row p-1'}>
                    <input className={'form-control'}
                           placeholder={'Widget name'}
                           onChange={(e) => this.setState({name: e.target.value})}
                           value={this.state.name}/>
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

export default WidgetEditImageComponent;
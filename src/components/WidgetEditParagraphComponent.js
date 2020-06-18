import React from "react";
import WidgetViewComponent from "./WidgetViewComponent";
import WidgetEditAbstractComponent from "./WidgetEditAbstractComponent";
import WidgetEditMetaRowComponent from "./WidgetEditMetaRowComponent";

class WidgetEditParagraphComponent extends WidgetEditAbstractComponent {

    render = () => (
        <div className={'col-12 border'}>

            <div className={'m-2'}>

                <WidgetEditMetaRowComponent
                    name={this.state.name}
                    type={this.state.type}
                    updateType={this.updateType}
                    incrementWidget={this.incrementWidget}
                    decrementWidget={this.decrementWidget}
                    updateWidget={this.updateWidget}
                    deleteWidget={this.deleteWidget}/>

                <div className={'row p-1'}>
                    <input className={'form-control'}
                           placeholder={'Paragraph text'}
                           onChange={(e) => this.setState({text: e.target.value})}
                           value={this.state.text}/>
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

export default WidgetEditParagraphComponent;
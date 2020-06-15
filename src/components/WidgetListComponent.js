import React from "react";
import WidgetEditComponent from "./WidgetEditComponent";

class WidgetListComponent extends React.Component {


    render = () => (
        <div className={'col-12 p-0'}>
            {
                // Save and preview items
                <div className={'row justify-content-end pr-2'}>
                    <button className={'btn btn-primary d-inline mr-2'}>Save</button>
                    <div className="btn-group btn-group-toggle d-inline-block mr-4" data-toggle="buttons">
                        <label className="btn btn-secondary active">
                            <input type="radio" name="options" id="widgetEdit" autoComplete="off" checked/> Edit
                        </label>
                        <label className="btn btn-secondary">
                            <input type="radio" name="options" id="widgetPreview" autoComplete="off"/> Preview
                        </label>
                    </div>
                </div>
            }
            {
                this.props.widgets.map((widget, i) =>
                    <WidgetEditComponent widget={widget}/>
                )
            }
            {
                // Add widget button
            }
        </div>
    )

}

export default WidgetListComponent
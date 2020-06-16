import React from "react";
import WidgetEditComponent from "./WidgetEditComponent";

class WidgetListComponent extends React.Component {

    exampleWidgets =  [
        {
            id: '5ee7f9f3a8454d00175d978b',
            name: 'Widget name!',
            type: 'HEADING',
            widgetOrder: '1000',
            text: 'Big Heading',
            url: 'http://example.com',
            size: '1',
            width: 0,
            height: 0,
            cssClass: '',
            style: '',
            value: '',
            topicId: 'abc'
        },
        {
            id: '5ee7f9f3a8454d00175d978c',
            name: 'Widget name!',
            type: 'PARAGRAPH',
            widgetOrder: '1000',
            text: 'Paragraoh',
            url: 'http://example.com',
            size: '1',
            width: 0,
            height: 0,
            cssClass: '',
            style: '',
            value: '',
            topicId: 'abc'
        }
    ];


    render = () => (
        <div className={'col-12 p-0 pr-2'}>
            {
                // Save and preview items
                <div className={'row justify-content-end pr-2 pb-2'}>
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
                //this.props.widgets.map((widget, i) =>
                this.exampleWidgets.map((widget, i) =>
                    <WidgetEditComponent widget={widget} key={widget._id}/>
                )
            }
            {
                // Add widget button
            }
        </div>
    )

}

export default WidgetListComponent
import React from "react";
import WidgetEditComponent from "./WidgetEditComponent";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPlusCircle} from "@fortawesome/free-solid-svg-icons";

class WidgetListComponent extends React.Component {

    state = {
    };

    componentDidMount = () => {
        if (this.props.match.params.topicId) {
            this.props.findWidgetsForTopic(this.props.match.params.topicId);
        }
    };


    componentDidUpdate = (prevProps, prevState, snapshot) => {
        if(prevProps.match.params.topicId !== this.props.match.params.topicId) {
            this.props.findWidgetsForTopic(this.props.match.params.topicId)
        }
    };

    createWidget = () => {
        if (!this.props.match.params.topicId) {
            return;
        }
        this.props.createWidget(
            this.props.match.params.topicId, {
                name: '',
                type: 'HEADING',
                widgetOrder: '1000',
                text: '',
                url: '',
                size: '1',
                width: 0,
                height: 0,
                cssClass: '',
                style: '',
                value: '',
            });
    };

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
                this.props.widgets.map((widget, i) =>
                    <WidgetEditComponent widget={widget} key={widget._id}/>
                )
            }
            {
                <button className={'btn float-right'}
                        onClick={this.createWidget}>
                    <FontAwesomeIcon icon={faPlusCircle} size={'2x'} className={''}/>
                </button>
            }
        </div>
    )

}

export default WidgetListComponent
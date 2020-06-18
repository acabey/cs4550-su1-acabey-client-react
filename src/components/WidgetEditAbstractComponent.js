import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowDown, faArrowUp, faTimes} from "@fortawesome/free-solid-svg-icons";

class WidgetEditAbstractComponent extends React.Component {

    state = {
        id: this.props.widget.id,
        name: this.props.widget.name, // Optional name of the widget
        type: this.props.widget.type, // Type of the widget, e.g., Heading, List, Paragraph, Image, YouTube, HTML, Link
        widgetOrder: this.props.widget.widgetOrder,//  Order with respect to widgets in the same list
        text: this.props.widget.text, // Plain text useful for heading text, paragraph text, link text, etc
        url: this.props.widget.url,// Absolute or relative URL referring to online resource
        size: this.props.widget.size,// Useful to represent size of widget, e.g., heading size
        width: this.props.widget.width,
        height: this.props.widget.height, // Widget's horizontal & vertical size, e.g., Image's or YouTube's width & height
        cssClass: this.props.widget.cssClass, // CSS class implementing some CSS rule and transformations configured in some CSS rule
        style: this.props.widget.style, // CSS transformations applied to the widget
        value: this.props.widget.value, // Some arbitrary initial value interpreted by the widget
        topicId: this.props.widget.topicId, // Unique ID of parent topic
    };

    updateWidget = () => {
        this.props.updateWidget(this.props.widget.id, this.state)
    };

    widgetMetaRow = (
        <div className={"row p-1"}>
            <div className={"col-4"}>
                <h3>{this.state.name}</h3>
            </div>

            <div className={"col-8"}>
                <div className={'row justify-content-end'}>
                    <button className={"btn btn-warning mr-1"}
                            onClick={() => this.props.updateWidget(this.props.widget.id, {
                                ...this.props.widget,
                                widgetOrder: this.props.widget.widgetOrder + 1
                            })}>
                        <FontAwesomeIcon icon={faArrowUp}/>
                    </button>

                    <button className={"btn btn-warning mr-1"}
                            onClick={() => this.props.updateWidget(this.props.widget.id, {
                                ...this.props.widget,
                                widgetOrder: this.props.widget.widgetOrder - 1
                            })}>
                        <FontAwesomeIcon icon={faArrowDown}/>
                    </button>
                    <div className={'d-inline-block mr-1'}>
                        <select className="custom-select form-inline"
                                onChange={(e) => this.props.updateWidget(this.props.widget.id, {
                                    ...this.props.widget,
                                    type: e.target.value
                                })}
                                value={this.state.type}>
                            <option value="HEADING">Heading</option>
                            <option value="PARAGRAPH">Paragraph</option>
                            <option value="LIST">List</option>
                            <option value="IMAGE">Image</option>
                        </select>
                    </div>
                    <button className={'btn btn-primary d-inline mr-1'}
                            onClick={this.updateWidget}>Save</button>
                    <button className={"btn btn-danger"}
                            onClick={() => this.props.deleteWidget(this.props.widget.id)}>
                        <FontAwesomeIcon icon={faTimes}/>
                    </button>
                </div>
            </div>
        </div>
    );

}

export default WidgetEditAbstractComponent;
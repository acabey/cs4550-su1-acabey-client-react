import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowDown, faArrowUp, faTimes} from "@fortawesome/free-solid-svg-icons";

class WidgetEditAbstractComponent extends React.Component {

    state = {
        updatedName: this.props.widget.name, // Optional name of the widget
        updatedType: this.props.widget.type, // Type of the widget, e.g., Heading, List, Paragraph, Image, YouTube, HTML, Link
        updatedWidgetOrder: this.props.widget.widgetOrder,//  Order with respect to widgets in the same list
        updatedText: this.props.widget.text, // Plain text useful for heading text, paragraph text, link text, etc
        updatedUrl: this.props.widget.url,// Absolute or relative URL referring to online resource
        updatedSize: this.props.widget.size,// Useful to represent size of widget, e.g., heading size
        updatedWidth: this.props.widget.width,
        updatedHeight: this.props.widget.height, // Widget's horizontal & vertical size, e.g., Image's or YouTube's width & height
        updatedCssClass: this.props.widget.cssClass, // CSS class implementing some CSS rule and transformations configured in some CSS rule
        updatedStyle: this.props.widget.style, // CSS transformations applied to the widget
        updatedValue: this.props.widget.value, // Some arbitrary initial value interpreted by the widget
        updatedTopicId: this.props.widget.topicId, // Unique ID of parent topic
    };

    updateWidget = () => {
        console.log("updated widget");
        console.log(this.state);
        this.props.updateWidget(this.props.widget.id,
            {
                name: this.state.updatedName,
                type: this.state.updatedType,
                widgetOrder: this.state.updatedWidgetOrder,
                text: this.state.updatedText,
                url: this.state.updatedUrl,
                size: this.state.updatedSize,
                width: this.state.updatedWidth,
                height: this.state.updatedHeight,
                cssClass: this.state.updatedCssClass,
                style: this.state.updatedStyle,
                value: this.state.updatedValue,
                topicId: this.state.updatedTopicId,
            })
    };

    widgetMetaRow = (
        <div className={"row p-1"}>
            <div className={"col-4"}>
                <h3>{this.props.widget.name}</h3>
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
                                value={this.state.updatedType}>
                            <option value="HEADING">Heading</option>
                            <option value="PARAGRAPH">Paragraph</option>
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
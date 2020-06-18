import React from "react";
import WidgetEditMetaRowComponent from "./WidgetEditMetaRowComponent";

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

    updateType = (widgetType) => {
        this.props.updateWidget(this.props.widget.id, {
            ...this.props.widget,
            type: widgetType
        })
    };

    deleteWidget = () => this.props.deleteWidget(this.props.widget.id);

    decrementWidget = () => this.props.updateWidget(this.props.widget.id, {
        ...this.props.widget,
        widgetOrder: this.props.widget.widgetOrder - 1
    });

    incrementWidget = () => this.props.updateWidget(this.props.widget.id, {
        ...this.props.widget,
        widgetOrder: this.props.widget.widgetOrder + 1
    });

    metaRow =
        <WidgetEditMetaRowComponent
            name={this.state.name}
            type={this.state.type}
            updateType={this.updateType}
            incrementWidget={this.incrementWidget}
            decrementWidget={this.decrementWidget}
            updateWidget={this.updateWidget}
            deleteWidget={this.deleteWidget}/>

}

export default WidgetEditAbstractComponent;
import React from "react";

class WidgetViewComponent extends React.Component {

    /*
    Integer id; // Unique identifier for this object
    String name; // Optional name of the widget
    String type; // Type of the widget, e.g., Heading, List, Paragraph, Image, YouTube, HTML, Link
    Integer widgetOrder; //  Order with respect to widgets in the same list
    String text; // Plain text useful for heading text, paragraph text, link text, etc
    String url; // Absolute or relative URL referring to online resource
    String size; // Useful to represent size of widget, e.g., heading size
    Integer width, height; // Widget's horizontal & vertical size, e.g., Image's or YouTube's width & height
    String cssClass; // CSS class implementing some CSS rule and transformations configured in some CSS rule
    String style; // CSS transformations applied to the widget
    String value; // Some arbitrary initial value interpreted by the widget
    Integer topicId; // Unique ID of parent topic
    */

    render = () => {

        switch (this.props.widget.type) {
            case 'HEADING': {
                switch (this.props.widget.size) {
                    case 'H1': {
                        return <h1>{this.props.widget.text}</h1>
                    }
                    case 'H2': {
                        return <h2>{this.props.widget.text}</h2>
                    }
                    case 'H3': {
                        return <h3>{this.props.widget.text}</h3>
                    }
                    case 'H4': {
                        return <h4>{this.props.widget.text}</h4>
                    }
                    case 'H5': {
                        return <h5>{this.props.widget.text}</h5>
                    }
                    default:
                        return <span>Invalid heading size: {this.props.widget.size}</span>
                }
            }

            case 'PARAGRAPH' : {
                return <p>{this.props.widget.text}</p>
            }

            default : {
                return <div>Unknown Widget type {this.props.widget.type}</div>
            }

        }
    }
}

export default WidgetViewComponent;
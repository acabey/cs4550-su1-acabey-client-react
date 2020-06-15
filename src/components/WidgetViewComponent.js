import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowDown, faArrowUp, faTimes} from "@fortawesome/free-solid-svg-icons";

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
                return <div>

                </div>

            }

            case 'PARAGRAPH' : {
                return <div></div>

            }

            default : {
                return <div>Unknown Widget type {this.props.widget.type}</div>
            }

        }
    }
}

export default WidgetViewComponent;
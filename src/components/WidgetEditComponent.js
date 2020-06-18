import React from "react";
import WidgetEditHeadingComponent from "./WidgetEditHeadingComponent";
import WidgetEditParagraphComponent from "./WidgetEditParagraphComponent";
import WidgetEditListComponent from "./WidgetEditListComponent";
import WidgetEditImageComponent from "./WidgetEditImageComponent";

class WidgetEditComponent extends React.Component {


    render = () => {

        switch (this.props.widget.type) {
            case 'HEADING': {
                return <WidgetEditHeadingComponent widget={this.props.widget}
                                                   updateWidget={this.props.updateWidget}
                                                   deleteWidget={this.props.deleteWidget}/>
            }

            case 'PARAGRAPH' : {
                return <WidgetEditParagraphComponent widget={this.props.widget}
                                                     updateWidget={this.props.updateWidget}
                                                     deleteWidget={this.props.deleteWidget}/>
            }

            case 'LIST' : {
                return <WidgetEditListComponent widget={this.props.widget}
                                                updateWidget={this.props.updateWidget}
                                                deleteWidget={this.props.deleteWidget}/>
            }

            case 'IMAGE' : {
                return <WidgetEditImageComponent widget={this.props.widget}
                                                 updateWidget={this.props.updateWidget}
                                                 deleteWidget={this.props.deleteWidget}/>
            }

            default : {
                return <div>Unknown Widget type {this.props.widget.type}</div>
            }

        }
    }
}

export default WidgetEditComponent;
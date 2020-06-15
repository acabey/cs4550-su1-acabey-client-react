import React from "react";
import WidgetEditComponent from "./WidgetEditComponent";

class WidgetListComponent extends React.Component {


    render = () => (
        <div>
            {
                // Save and preview items
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
import React from "react";

class WidgetListComponent extends React.Component {


    render = () => (
        <div>
            {
                this.props.widgets.map((widget, i) => <WidgetEditComponent widget={widget}/>
            }
        </div>
    )

}
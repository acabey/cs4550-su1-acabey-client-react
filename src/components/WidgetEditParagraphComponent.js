import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowDown, faArrowUp, faTimes} from "@fortawesome/free-solid-svg-icons";
import WidgetViewComponent from "./WidgetViewComponent";
import WidgetEditAbstractComponent from "./WidgetEditAbstractComponent";

class WidgetEditParagraphComponent extends WidgetEditAbstractComponent {

    render = () => (
        <div className={'col-12 border'}>

            <div className={'m-2'}>

                {this.widgetMetaRow}

                <div className={'row p-1'}>
                    <input className={'form-control'}
                           placeholder={'Paragraph text'}
                           onChange={(e) => console.log(`Changed paragraph text value: ${e.target.value}`)}
                    />
                </div>

                <div className={'row p-1'}>
                    <input className={'form-control'}
                           placeholder={'Widget name'}
                           onChange={(e) => console.log(`Changed widget name value: ${e.target.value}`)}
                    />
                </div>

                <div className={'row p-1'}>
                    <h3>Preview</h3>
                </div>

                <div className={'row p-1'}>
                    <WidgetViewComponent widget={this.props.widget}/>
                </div>

            </div>
        </div>
    )

}

export default WidgetEditParagraphComponent;
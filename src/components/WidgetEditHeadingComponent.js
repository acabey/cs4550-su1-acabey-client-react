import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowDown, faArrowUp, faTimes} from "@fortawesome/free-solid-svg-icons";
import WidgetViewComponent from "./WidgetViewComponent";
import WidgetEditAbstractComponent from "./WidgetEditAbstractComponent";

class WidgetEditHeadingComponent extends WidgetEditAbstractComponent {

    render = () => (
        <div className={'col-12 border'}>

            <div className={'m-2'}>

                {this.widgetMetaRow}

                <div className={'row p-1'}>
                    <input className={'form-control'}
                           placeholder={'Heading text'}
                           onChange={(e) => console.log(`Changed heading text value: ${e.target.value}`)}
                    />
                </div>

                <div className={'row p-1'}>
                    <select className="custom-select form-control"
                            value={'H1'}
                            onChange={() => console.log("Changed header type")}>
                        <option value="H1">H1</option>
                        <option value="H2">H2</option>
                        <option value="H3">H3</option>
                        <option value="H4">H4</option>
                        <option value="H5">H5</option>
                    </select>
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

export default WidgetEditHeadingComponent;
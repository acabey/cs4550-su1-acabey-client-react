import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowDown, faArrowUp, faTimes} from "@fortawesome/free-solid-svg-icons";

class WidgetEditComponent extends React.Component {

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

                    <div className={"row"}>
                        <div className={"col-4"}>
                            <span>
                                <h1>{this.props.widget.name} widget</h1>
                            </span>

                        </div>

                        <div className={"col-4 "}></div>

                        <div className={"col-4"}>
                            <FontAwesomeIcon icon={faArrowUp} className={"btn btn-warning"} onClick={() => console.log('increase widgetOrder')}/>
                            <FontAwesomeIcon icon={faArrowDown} className={"btn btn-warning"} onClick={() => console.log('decrease widgetOrder')}/>

                            <select className="custom-select" onChange={() => console.log("Changed widget type")}>
                                <option selected value="HEADING">Heading</option>
                                <option value="PARAGRAPH">Paragraph</option>
                            </select>

                            <FontAwesomeIcon icon={faTimes} className={"btn btn-danger"} onClick={() => console.log('decrease widgetOrder')}/>
                        </div>
                    </div>

                    <div className={'row'}>
                        <input className={'form-control'}
                               placeholder={'Heading text'}
                               onChange={(e) => console.log(`Changed heading text value: ${e.target.value}`)}
                        />
                    </div>

                    <div className={'row'}>
                        <select className="custom-select form-control"
                                onChange={() => console.log("Changed header type")}>
                            <option selected value="H1">H1</option>
                            <option value="H2">H2</option>
                            <option value="H3">H3</option>
                            <option value="H4">H4</option>
                            <option value="H5">H5</option>
                        </select>
                    </div>

                    <div className={'row'}>
                        <input className={'form-control'}
                               placeholder={'Widget name'}
                               onChange={(e) => console.log(`Changed widget name value: ${e.target.value}`)}
                        />
                    </div>

                </div>

            }

            case 'PARAGRAPH' : {

            }

            default : {
                return <div>Unknown Widget type {this.props.widget.type}</div>
            }

        }
    }
}

export default WidgetEditComponent;
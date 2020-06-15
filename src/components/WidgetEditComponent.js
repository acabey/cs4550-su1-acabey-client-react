import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowDown, faArrowUp, faTimes} from "@fortawesome/free-solid-svg-icons";
import WidgetViewComponent from "./WidgetViewComponent";

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
                return <div className={'col-12 border'}>

                    <div className={'m-2'}>

                        <div className={"row p-1"}>
                            <div className={"col-4"}>
                                <h3>{this.props.widget.name}</h3>
                            </div>

                            <div className={"col-8"}>
                                <div className={'row justify-content-end'}>
                                    <button className={"btn btn-warning mr-1"} onClick={() => console.log('increase widgetOrder')}>
                                        <FontAwesomeIcon icon={faArrowUp}/>
                                    </button>

                                    <button className={"btn btn-warning mr-1"} onClick={() => console.log('decrease widgetOrder')}>
                                        <FontAwesomeIcon icon={faArrowDown}/>
                                    </button>
                                    <div className={'d-inline-block mr-1'}>
                                        <select className="custom-select form-inline " onChange={() => console.log("Changed widget type")}>
                                            <option selected value="HEADING">Heading</option>
                                            <option value="PARAGRAPH">Paragraph</option>
                                        </select>
                                    </div>
                                    <button className={"btn btn-danger"} onClick={() => console.log('delete widget')}>
                                        <FontAwesomeIcon icon={faTimes}/>
                                    </button>
                                </div>
                            </div>

                        </div>

                        <div className={'row p-1'}>
                            <input className={'form-control'}
                                   placeholder={'Heading text'}
                                   onChange={(e) => console.log(`Changed heading text value: ${e.target.value}`)}
                            />
                        </div>

                        <div className={'row p-1'}>
                            <select className="custom-select form-control"
                                    onChange={() => console.log("Changed header type")}>
                                <option selected value="H1">H1</option>
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
            }

            case 'PARAGRAPH' : {
                return <div className={'col-12 border'}>

                    <div className={'m-2'}>

                        <div className={"row p-1"}>
                            <div className={"col-4"}>
                                <h3>{this.props.widget.name}</h3>
                            </div>

                            <div className={"col-8"}>
                                <div className={'row justify-content-end'}>
                                    <button className={"btn btn-warning mr-1"} onClick={() => console.log('increase widgetOrder')}>
                                        <FontAwesomeIcon icon={faArrowUp}/>
                                    </button>

                                    <button className={"btn btn-warning mr-1"} onClick={() => console.log('decrease widgetOrder')}>
                                        <FontAwesomeIcon icon={faArrowDown}/>
                                    </button>
                                    <div className={'d-inline-block mr-1'}>
                                        <select className="custom-select form-inline " onChange={() => console.log("Changed widget type")}>
                                            <option value="HEADING">Heading</option>
                                            <option selected value="PARAGRAPH">Paragraph</option>
                                        </select>
                                    </div>
                                    <button className={"btn btn-danger"} onClick={() => console.log('delete widget')}>
                                        <FontAwesomeIcon icon={faTimes}/>
                                    </button>
                                </div>
                            </div>

                        </div>

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
            }

            default : {
                return <div>Unknown Widget type {this.props.widget.type}</div>
            }

        }
    }
}

export default WidgetEditComponent;
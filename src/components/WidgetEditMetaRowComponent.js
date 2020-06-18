import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowDown, faArrowUp, faTimes} from "@fortawesome/free-solid-svg-icons";
import React from "react";

class WidgetEditMetaRowComponent extends React.Component {

    render = () => (
        <div className={"row p-1"}>
            <div className={"col-4"}>
                <h3>{this.props.name}</h3>
            </div>

            <div className={"col-8"}>
                <div className={'row justify-content-end'}>
                    <button className={"btn btn-warning mr-1"}
                            onClick={this.props.incrementWidget}>
                        <FontAwesomeIcon icon={faArrowUp}/>
                    </button>

                    <button className={"btn btn-warning mr-1"}
                            onClick={this.props.decrementWidget}>
                        <FontAwesomeIcon icon={faArrowDown}/>
                    </button>
                    <div className={'d-inline-block mr-1'}>
                        <select className="custom-select form-inline"
                                onChange={(e) => this.props.updateType(e.target.value)}
                                value={this.props.type}>
                            <option value="HEADING">Heading</option>
                            <option value="PARAGRAPH">Paragraph</option>
                            <option value="LIST">List</option>
                            <option value="IMAGE">Image</option>
                        </select>
                    </div>
                    <button className={'btn btn-primary d-inline mr-1'}
                            onClick={this.props.updateWidget}>Save</button>
                    <button className={"btn btn-danger"}
                            onClick={this.props.deleteWidget}>
                        <FontAwesomeIcon icon={faTimes}/>
                    </button>
                </div>
            </div>
        </div>
    );

}

export default WidgetEditMetaRowComponent;

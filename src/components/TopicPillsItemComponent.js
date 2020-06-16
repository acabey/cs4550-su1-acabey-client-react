import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBan, faCheck, faPencilAlt, faTimes} from "@fortawesome/free-solid-svg-icons";

class TopicPillsItemComponent extends React.Component {

    state = {
        isEditing: false,
        updatedTitle: ''
    };

    render = () =>
        <li className="nav-item wbdv-topic-pill ml-1">
            {
                !this.state.isEditing &&
                <div
                    className={`nav-link ${this.props.selectedTopicId === this.props.topic._id && 'bg-primary'}`}
                    onClick={() => this.props.selectTopic(this.props.topic._id)}>
                    <strong>{this.props.topic.title}</strong>

                    <button
                        className="btn wbdv-topic-item-edit-btn"
                        onClick={() => this.setState({
                            isEditing: true,
                            updatedTitle: this.props.topic.title
                        })}>
                        <FontAwesomeIcon icon={faPencilAlt}/>
                    </button>

                    <button
                        className="btn wbdv-topic-item-delete-btn"
                        onClick={() => this.props.deleteTopic(this.props.topic._id)}>
                        <FontAwesomeIcon icon={faTimes}/>
                    </button>
                </div>
            }

            {
                this.state.isEditing &&
                <div
                    className={`nav-link ${this.props.selectedTopicId === this.props.topic._id && 'bg-primary'}`}
                    onClick={() => this.props.selectTopic(this.props.topic._id)}>

                    <input
                        onChange={(e) => {
                            this.setState({updatedTitle: e.target.value})
                        }}
                        value={this.state.updatedTitle}/>

                    <button
                        className={"btn wbdv-topic-item-cancel-btn"}
                        onClick={() => this.setState({isEditing: false})}>
                        <FontAwesomeIcon icon={faBan}/>
                    </button>
                    <button
                        className={"btn wbdv-topic-item-update-btn"}
                        onClick={() => {
                            this.props.updateTopic(
                                this.props.topic._id,
                                {...this.props.topic, title: this.state.updatedTitle}
                            );
                            this.setState({isEditing: false})}}>
                        <FontAwesomeIcon icon={faCheck}/>
                    </button>
                </div>
            }
        </li>

}

export default TopicPillsItemComponent;
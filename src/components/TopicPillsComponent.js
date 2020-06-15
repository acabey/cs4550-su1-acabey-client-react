import React from "react";
import {faPlus} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const TopicPillsComponent = ({topics}) =>
    <ul className="nav nav-pills wbdv-topic-pill-list">
        {
            topics.map((topic, i) =>
                <li className="nav-item wbdv-topic-pill mr-1">
                    <button className="btn nav-link active">{topic.title}</button>
                </li>
            )
        }
        <li className="nav-item">
            <button className="btn wbdv-topic-add-btn">
                <FontAwesomeIcon icon={faPlus}/>
            </button>
        </li>
    </ul>

export default TopicPillsComponent;

import React from "react";

const TopicPillsComponent = ({topics}) =>
    <ul className="nav nav-pills wbdv-topic-pill-list">
        {
            topics.map((topic, i) =>
                <li className="nav-item wbdv-topic-pill">
                    <button className="btn nav-link active" href="#">{topic.title}</button>
                </li>
            )
        }
        <li className="nav-item">
            <a className="fa fa-plus btn wbdv-topic-add-btn" href="#"></a>
        </li>
    </ul>

export default TopicPillsComponent;

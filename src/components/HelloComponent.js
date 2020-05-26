import {connect} from "react-redux";
import React from "react";

const HelloWorld = ({messageProperty, eventHandler}) => {
    return (
        <div>
            <h1>{messageProperty}</h1>
            <button onClick={() => eventHandler('Hello 3')}/>;
        </div>)
};

const stateToPropertyMapper = (state) => {
    return {
        messageProperty: state.message
    }
};

export default connect(
    stateToPropertyMapper,
    (dispatcher) => {
        return {
            eventHandler: (message) => dispatcher({type: "BTN_PRESS", message: message})
        }
    }
)(HelloWorld);



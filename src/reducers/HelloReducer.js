const hello = (state, action) => {
    if (action.type === "BTN_PRESS") {
        alert(action.type);
        return {message: action.message};
    } else {
        return {message: "Hello world"};
    }
};

export default hello;


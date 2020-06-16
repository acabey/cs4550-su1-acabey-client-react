const initialState = {
    widgets: [],
};

const widgetReducer = (state=initialState, event) => {
    switch (event.type) {
        case "CREATE_WIDGET":
            return {
                widgets: [
                    ...state.widgets,
                    event.newWidget
                ]
            };
            break
        case "DELETE_WIDGET":
            return {
                widgets: state.widgets.filter(widget => widget._id !== event.widgetId)
            };
            break
        case "UPDATE_WIDGET":
            return {
                ...state,
                widgets: state.widgets.map(
                    widget => widget._id === event.updatedWidget._id ?
                        event.updatedWidget : widget )
            };
        case "FIND_WIDGETS_FOR_COURSE":
            return {
                ...state,
                widgets: event.widgets
            };
        case "FIND_ALL_WIDGETS":
            return {
                ...state,
                widgets: event.widgets
            };
            break
        default:
            return state
    }
};

export default widgetReducer

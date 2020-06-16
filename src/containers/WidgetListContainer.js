import {connect} from "react-redux";
import WidgetListComponent from "../components/WidgetListComponent";
import widgetReducer from "../reducers/widgetReducer";
import WidgetService from "../services/WidgetService";

const stateToPropertyMapper = (state, ownProps) => {
    return {
        widgets: state.widgetReducer.widgets,
        editingWidget: state.widgetReducer.editingWidget,
        params: ownProps.params,
    }
};

const dispatchToPropertyMapper = (dispatch) => {
    return {
        findWidgetsForTopic: (topicId) =>  {
            WidgetService.findWidgetsForTopic(topicId)
                .then(widgetsForTopic => dispatch({
                    type: 'FIND_WIDGETS_FOR_TOPIC',
                    widgets: widgetsForTopic
                }))
        },
        findAllWidgets: () => {
            WidgetService.findAllWidgets()
                .then(actualWidgets => dispatch({
                    type: 'FIND_ALL_WIDGETS',
                    widgets: actualWidgets
                }))
        },
        updateWidget: (widgetId, newWidgetData) => {
            WidgetService.updateWidget(widgetId, newWidgetData)
                .then(status => dispatch({
                    type: 'UPDATE_WIDGET',
                    updatedWidget: newWidgetData
                }))
        },
        createWidget: (topicId, newWidget) => {
            WidgetService.createWidget(topicId, newWidget)
                .then(actualNewWidget => dispatch({
                    type: "CREATE_WIDGET",
                    newWidget: actualNewWidget
                }))
        },
        deleteWidget: (widgetId) => {
            WidgetService.deleteWidget(widgetId)
                .then(status => dispatch({
                    type: "DELETE_WIDGET",
                    widgetId: widgetId
                }))
        }
    }
};

const WidgetListContainer = connect
(stateToPropertyMapper, dispatchToPropertyMapper)
(WidgetListComponent);

export default WidgetListContainer

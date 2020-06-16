const initialState = {
    modules: [],
    selectedModule: '',
    editingModule: ''
};

const moduleReducer = (state=initialState, event) => {
    switch (event.type) {
        case "UPDATE_MODULE":
            return {
                ...state,
                modules: state.modules.map(
                    module => module._id === event.updatedModule._id ?
                        event.updatedModule : module )
            };
        case "FIND_MODULES_FOR_COURSE":
            return {
                ...state,
                modules: event.modules
            };
        case "FIND_ALL_MODULES":
            return {
                ...state,
                modules: event.modules
            };
            break
        case "CREATE_MODULE":
            return {
                ...state,
                modules: [
                    ...state.modules,
                    event.newModule
                ]
            };
            break
        case "DELETE_MODULE":
            return {
                ...state,
                modules: state.modules.filter(module => module._id !== event.moduleId)
            };
            break
        case "SELECT_MODULE":
            console.log('select in reducer');
            return {
                ...state,
               selectedModuleId: event.moduleId
            };
            break;
        default:
            return state
    }
};

export default moduleReducer

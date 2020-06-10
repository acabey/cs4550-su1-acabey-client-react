import {connect} from "react-redux";
import ModuleListComponent from "../components/ModuleListComponent";
import moduleReducer from "../reducers/moduleReducer";
import {createModule, deleteModule, findAllModules, findModulesForCourse, updateModule} from "../services/ModuleService";

const stateToPropertyMapper = (state, ownProps) => {
    return {
        modules: state.moduleReducer.modules,
        editingModule: state.moduleReducer.editingModule,
        params: ownProps.params
        // ownProps: ownProps
    }
};

const dispatchToPropertyMapper = (dispatch) => {
    return {
        findModulesForCourse: (courseId) => {
            findModulesForCourse(courseId)
                .then(modulesForTheCourse => dispatch({
                    type: 'FIND_MODULES_FOR_COURSE',
                    modules: modulesForTheCourse
                }))
        },
        findAllModules: () => {
            findAllModules()
                .then(actualModules => dispatch({
                    type: 'FIND_ALL_MODULES',
                    modules: actualModules
                }))
        },
        updateModule: (moduleId, newModuleData) => {
            updateModule(moduleId, newModuleData)
                .then(status => dispatch({
                    type: 'UPDATE_MODULE',
                    updatedModule: newModuleData
                }))
        },
        createModule: (courseId, newModule) => {
            console.log("Container create module");
            createModule(courseId, newModule)
                .then(actualNewModule => dispatch({
                    type: "CREATE_MODULE",
                    newModule: actualNewModule
                }))
        },
        deleteModule: (moduleId) => {
            deleteModule(moduleId)
                .then(status => dispatch({
                    type: "DELETE_MODULE",
                    moduleId: moduleId
                }))
        }
    }
};

const ModuleListContainer = connect
(stateToPropertyMapper, dispatchToPropertyMapper)
(ModuleListComponent);

export default ModuleListContainer

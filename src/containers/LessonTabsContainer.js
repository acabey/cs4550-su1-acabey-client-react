import {connect} from "react-redux";
import LessonTabsComponent from "../components/LessonTabsComponent";
import lessonReducer from "../reducers/lessonReducer";
import LessonService from "../services/LessonService";

const stateToPropertyMapper = (state, ownProps) => {
    return {
        lessons: state.lessonReducer.lessons,
        selectedLessonId: state.lessonReducer.selectedLessonId,
        params: ownProps.params,
    }
};

const dispatchToPropertyMapper = (dispatch) => {
    return {
        findLessonsForModule: (moduleId) =>  {
            LessonService.findLessonsForModule(moduleId)
                .then(lessonsForModule => dispatch({
                    type: 'FIND_LESSONS_FOR_MODULE',
                    lessons: lessonsForModule
                }))
        },
        findAllLessons: () => {
            LessonService.findAllLessons()
                .then(actualLessons => dispatch({
                    type: 'FIND_ALL_LESSONS',
                    lessons: actualLessons
                }))
        },
        updateLesson: (lessonId, newLessonData) => {
            LessonService.updateLesson(lessonId, newLessonData)
                .then(status => dispatch({
                    type: 'UPDATE_LESSON',
                    updatedLesson: newLessonData
                }))
        },
        createLesson: (moduleId, newLesson) => {
            LessonService.createLesson(moduleId, newLesson)
                .then(actualNewLesson => dispatch({
                    type: "CREATE_LESSON",
                    newLesson: actualNewLesson
                }))
        },
        deleteLesson: (lessonId) => {
            LessonService.deleteLesson(lessonId)
                .then(status => dispatch({
                    type: "DELETE_LESSON",
                    lessonId: lessonId
                }))
        },
    }
};

const LessonTabsContainer = connect
(stateToPropertyMapper, dispatchToPropertyMapper)
(LessonTabsComponent);

export default LessonTabsContainer

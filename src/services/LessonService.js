const url = 'https://wbdv-generic-server.herokuapp.com/api';
const nuid = '001867846';

/**
 * retrieves all lessons for course whose ID is moduleId
 * @param moduleId
 * @returns {Promise<T>}
 */
export const findLessonsForModule = (moduleId) =>
    fetch(`${url}/${nuid}/modules/${moduleId}/lessons`)
        .then(response => response.json())

/**
 * creates a new lesson instance for the module whose ID is moduleId
 * @param moduleId
 * @param newLesson
 * @returns {Promise<T>}
 */
export const createLesson = (moduleId, newLesson) =>
    fetch(`${url}/${nuid}/modules/${moduleId}/lessons`,
        {
            method: 'POST',
            body: JSON.stringify(newLesson),
            headers: {
                'content-type': 'application/json'
            }
        })
        .then(response => response.json())

/**
 * removes lesson whose ID is lessonId
 * @param lessonId
 * @returns {Promise<T>}
 */
export const deleteLesson = (lessonId) =>
    fetch(`${url}/${nuid}/lessons/${lessonId}`,
        {
            method: 'DELETE',
        })
        .then(response => response.json())


/**
 * retrieves one lesson whose ID is lessonId (optional)
 * @param lessonId
 * @returns {Promise<T>}
 */
export const findLesson = (lessonId) =>
    fetch(`${url}/${nuid}/lessons/${lessonId}`,
        {
            method: 'GET',
        })
        .then(response => response.json())


/**
 * updates one lesson whose ID is lessonId
 * @param lessonId
 * @param lesson
 * @returns {Promise<T>}
 */
export const updateLesson = (lessonId, lesson) =>
    fetch(`${url}/${nuid}/lessons/${lessonId}`,
        {
            method: 'PUT',
            body: JSON.stringify(lesson),
            headers: {
                'content-type': 'application/json'
            }
        })
        .then(response => response.json())

export default {
    findLessonsForModule,
    createLesson,
    deleteLesson,
    findLesson,
    updateLesson
}
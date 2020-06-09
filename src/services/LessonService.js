"use strict";
class LessonServiceClient {

    url = 'https://wbdv-generic-server.herokuapp.com/api';
    nuid = '001867846';

    /**
     * retrieves all lessons for course whose ID is moduleId
     * @param moduleId
     * @returns {Promise<T>}
     */
    findLessonsForModule = (moduleId) =>
        fetch(`${this.url}/${this.nuid}/modules/${moduleId}/lessons`)
            .then(response => response.json())

    /**
     * creates a new lesson instance for the module whose ID is moduleId
     * @param moduleId
     * @param newLesson
     * @returns {Promise<T>}
     */
    createLesson = (moduleId, newLesson) =>
        fetch(`${this.url}/${this.nuid}/modules/${moduleId}/lessons`,
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
    deleteLesson = (lessonId) =>
        fetch(`${this.url}/${this.nuid}/lessons/${lessonId}`,
            {
                method: 'DELETE',
            })
            .then(response => response.json())


    /**
     * retrieves one lesson whose ID is lessonId (optional)
     * @param lessonId
     * @returns {Promise<T>}
     */
    findLesson = (lessonId) =>
        fetch(`${this.url}/${this.nuid}/lessons/${lessonId}`,
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
    updateLesson = (lessonId, lesson) =>
        fetch(`${this.url}/${this.nuid}/lessons/${lessonId}`,
            {
                method: 'PUT',
                body: JSON.stringify(lesson),
                headers: {
                    'content-type': 'application/json'
                }
            })
            .then(response => response.json())
}

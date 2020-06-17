const url = 'https://acabey-server-java.herokuapp.com/api';

export const createTopic = (lessonId, topic) =>
    fetch(`${url}/lessons/${lessonId}/topics`, {
        method: 'POST',
        body: JSON.stringify(topic),
        headers: {
            'content-type': 'application/json'
        }
    })
        .then(response => response.json());

export const findTopicsForLesson = (lessonId) =>
    fetch(`${url}/lessons/${lessonId}/topics`)
        .then(response => response.json());

export const findTopic = (topicId) =>
    fetch(`${url}/topics/${topicId}`, {
        method: 'GET'
    })
        .then(response => response.json());

export const updateTopic = (topicId, topic) =>
    fetch(`${url}/topics/${topicId}`, {
        method: 'PUT',
        body: JSON.stringify(topic),
        headers: {
            'content-type': 'application/json'
        }
    })
        .then(response => response.json());

export const deleteTopic= (topicId) =>
    fetch(`${url}/topics/${topicId}`, {
        method: 'DELETE'
    })
        .then(response => response.json());

export default {
    createTopic,
    findTopicsForLesson,
    findTopic,
    updateTopic,
    deleteTopic,
}

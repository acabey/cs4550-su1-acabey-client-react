const url = 'https://wbdv-generic-server.herokuapp.com/api';
const nuid = '001867846';

export const createTopic = (lessonId, topic) =>
    fetch(`${url}/${nuid}/lessons/${lessonId}/topics`, {
        method: 'POST',
        body: JSON.stringify(topic),
        headers: {
            'content-type': 'application/json'
        }
    })
        .then(response => response.json());

export const findTopicsForLesson = (lessonId) =>
    fetch(`${url}/${nuid}/lessons/${lessonId}/topics`)
        .then(response => response.json());

export const findTopic = (topicId) =>
    fetch(`${url}/${nuid}/topics/${topicId}`, {
        method: 'GET'
    })
        .then(response => response.json());

export const updateTopic = (topicId, topic) =>
    fetch(`${url}/${nuid}/topics/${topicId}`, {
        method: 'PUT',
        body: JSON.stringify(topic),
        headers: {
            'content-type': 'application/json'
        }
    })
        .then(response => response.json());

export const deleteTopic= (topicId) =>
    fetch(`${url}/${nuid}/topics/${topicId}`, {
        method: 'DELETE'
    })
        .then(response => response.json());

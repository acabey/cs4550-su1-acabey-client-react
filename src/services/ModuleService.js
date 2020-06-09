const url = 'https://wbdv-generic-server.herokuapp.com/api';
const nuid = '001867846';

export const findAllModules = () =>
    fetch(`${url}/${nuid}/modules`)
        .then(response => response.json());

export const findModuleForCourse = (courseId) =>
    fetch(`${url}/${nuid}/courses/${courseId}/modules`)
        .then(response => response.json());


export const deleteModule = (moduleId) => {
    return fetch("${url}/${nuid}/modules/" + moduleId, {
        method: 'DELETE'
    })
        .then(response => response.json())
};

export const updateModule = (moduleId, newModule) =>
    fetch(`${url}/${nuid}/modules/${moduleId}`, {
        method: 'PUT',
        body: JSON.stringify(newModule),
        headers: {
            'content-type': 'application/json'
        }
    })
        .then(response => response.json());

export const createModule = (courseId, module) =>
    fetch(`${url}/${nuid}/courses/${courseId}/modules`, {
        method: 'POST',
        body: JSON.stringify(module),
        headers: {
            'content-type': 'application/json'
        }
    })
        .then(response => response.json());

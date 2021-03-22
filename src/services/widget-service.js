const API_URL = "https://wbdv-sp21-01-chayank-server-ja.herokuapp.com/api";
// http://localhost:8080/api/topics/${topicId}/widgets
export const createWidgetForTopic = (topicId, widget) =>
    fetch(`${API_URL}/topics/${topicId}/widgets`, {
        method: "POST",
        body: JSON.stringify(widget),
        headers: {
            'content-type': 'application/json'
        }
    })
        .then(response => response.json())

export const findWidgetsForTopic = (topicId) =>
    fetch(`${API_URL}/topics/${topicId}/widgets`)
        .then(response => response.json())

export const deleteWidget = (widgetId) =>
    fetch(`${API_URL}/widgets/${widgetId}`, {
        method: "DELETE"
    })
        .then(response => response.json())


export const updateWidget = (widgetId, widget) =>
    fetch(`${API_URL}/widgets/${widgetId}`, {
        method: "PUT",
        body: JSON.stringify(widget),
        headers: {
            'content-type': 'application/json'
        }
    })
        .then(response => response.json())





const api = {
    findWidgetsForTopic, createWidgetForTopic,
    deleteWidget, updateWidget
};

export default api;
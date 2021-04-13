const QUIZZES_URL = "http://localhost:3000/api/quizzes";


export const findQuestionsForQuiz = (quizId) =>
    fetch(`${QUIZZES_URL}/${quizId}/questions`, {
        method: 'GET'
    })
        .then(response => response.json())


const api = {
    findQuestionsForQuiz
}

export default api;
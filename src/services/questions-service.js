const QUIZZES_URL = "https://node-wbdv.herokuapp.com/api/quizzes";


export const findQuestionsForQuiz = (quizId) =>
    fetch(`${QUIZZES_URL}/${quizId}/questions`, {
        method: 'GET'
    })
        .then(response => response.json())


const api = {
    findQuestionsForQuiz
}

export default api;
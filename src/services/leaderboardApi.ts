import axios from 'axios';

const api = axios.create({
    baseURL: 'https://at-the-tsbyss-leaderboard.herokuapp.com/api',
});

export default api;
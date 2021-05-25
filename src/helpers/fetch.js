
const baseUrl = 'http://localhost:4000';

export const fetchReverse = (endpoint, data, method = 'GET') => {

    const url = `${baseUrl}/${endpoint}`;

    if (method === 'GET') {
        return fetch(url,{
            method
        });
    } else {
    }
};
import axios from "axios";

//API key is: 235e9a556be34e409a0e3005c14ecb63
const token = '235e9a556be34e409a0e3005c14ecb63';
const country = 'country=ru';
const category = 'category=technology';

const apiRequest = axios.create({
    baseURL: 'https://newsapi.org/v2',
    headers: {
        'Authorization': `Basic ${token}`
    }
});

const request = async function (){
    try {
        const response = await apiRequest.get(`/top-headlines?${country}&${category}`);
        return response;
    } catch (e) {
        console.log(e)
    }
}

export default request;

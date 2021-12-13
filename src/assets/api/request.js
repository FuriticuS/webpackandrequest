import axios from "axios";

//API key is: 235e9a556be34e409a0e3005c14ecb63

const apiRequest = axios.create({
    baseURL: 'https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=235e9a556be34e409a0e3005c14ecb63'
})

const request = async function (){
    try {
        const response = await apiRequest.get('');
        console.log(response.data, `Request status- ${response.status}`);
        
        return response;
    } catch (e) {
        console.log(e)
    }
}

export default request;

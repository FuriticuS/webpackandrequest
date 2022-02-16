import axios from "axios";
import API_NEWS from "../config/api.config";

//API key is: 235e9a556be34e409a0e3005c14ecb63
const token = '235e9a556be34e409a0e3005c14ecb63';

const apiRequest = axios.create({
    baseURL: API_NEWS.apiUrl,
    headers: {
        'Authorization': `Basic ${token}`
    }
});

const request = async function(apiRec){
    try {
        const orderlist = await apiRequest.get(apiRec);
        return orderlist;
    } catch (e) {
        console.log(e)
    }
}

export default request;

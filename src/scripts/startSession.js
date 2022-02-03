import request from "../services/request";

const firstRequest = async() => {
    console.log("------ index.js ------");

    const orderlist = await request();
    console.log(orderlist.data.articles);

    console.log("------ import ------");
}

export default firstRequest;

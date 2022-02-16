import request from "./apiServices/apiRequest";
import renderLoadPage from "./view/renderLoadPage";

const country = 'country=ru';
const category = 'category=technology';

const loadPageRequest = async() => {
    console.log("------ index.js ------");

    const orderlist = await request(`/top-headlines?${country}&${category}`);
    renderLoadPage(orderlist);


    console.log("------ import ------");
}

export default loadPageRequest;

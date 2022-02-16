import createMainNewsFragment from "../helpers/createMainNewsFragment";
import ELEM_UI from "../config/ui.config";

function renderLoadPage(requestData){
    const reqData = requestData.data.articles;
    console.log(reqData);
    ELEM_UI.mainNewsBlock.innerHTML = createMainNewsFragment(reqData);
}

export default renderLoadPage;

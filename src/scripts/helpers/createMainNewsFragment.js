const createMainNewsFragment = function(data){
    const mainData = data.slice(0,10);
    return mainData.reduce((acc, news) => acc + createElementNews(news),'');
};

function createElementNews({author, description, publishedAt, title, urlToImage}){
    let authorNews = author ? author : "Автор отсутствует"
    return `
        <div class="main-news-item">
            <img src="${urlToImage}" alt="">
            <h3>${title}</h3>
            <p>${description}</p>
            <p>${authorNews}</p>
            <p>${publishedAt}</p>
        </div>
    `
}

export default createMainNewsFragment;
